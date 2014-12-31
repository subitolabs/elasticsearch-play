<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Max-Age: 1728000');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    require_once __DIR__.'/../vendor/autoload.php';
    require_once __DIR__ . '/../src/testr/Request.php';

    $request    = \testr\Request::createFromGlobals();
    $prefix     = getPrefix();
    $esClient   = getElasticSearchClient();

    init();

    list($inputAnalyzers, $inputFilters) = getInputs();

    $inputText = $request->get('text');

    if ($esClient->indices()->exists(['index' => $prefix]))
    {
        $esClient->indices()->delete(['index' => $prefix]);
    }

    $esClient->indices()->create([
        'index' => $prefix,
        'body'  => [
            'settings' => [
                'number_of_shards'      => 1,
                'number_of_replicas'    => 0,
                'analysis'              => [
                    'filter'   => $inputFilters,
                    'analyzer' => $inputAnalyzers
                ]
            ]
        ]
    ]);

    $outputTests = [];

    foreach($inputAnalyzers as $analyzer => $analyzerData)
    {
        $tokens = $esClient->indices()->analyze([
            'index'     => $prefix,
            'analyzer'  => $analyzer,
            'text'      => $inputText
        ]);

        $outputTests[] = [
            'title'     => $analyzer,
            'tokens'    => $tokens['tokens']
        ];
    }

    //var_dump($prefix, $inputAnalyzers, $inputFilters);die();

    //$tests = runTest($inputAnalyzers);

    renderResponse(200, [
        'tests' => $outputTests
    ]);

    function renderResponse($status, $data)
    {
        $output = json_encode([
            'status'    => $status,
            'data'      => $data
        ]);

        header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
        header('Content-type: text/json');
        header('Content-size: ' . strlen($output));

        die($output);
    }

    function init()
    {
        global $request;

        if ($request->getMethod() === 'OPTIONS' || $request->getMethod() === 'HEAD')
        {
            die('ok');
        }

        set_exception_handler(function($e)
        {
            renderResponse(500, [
                'error'     => 'exception',
                'message'   => $e->getMessage(),
                'file'      => $e->getFile(),
                'line'      => $e->getLine()
            ]);
        });

        set_error_handler(function($error, $message, $file, $line, $context)
        {
            renderResponse(500, [
                'error'     => $error,
                'message'   => $message,
                'file'      => $file,
                'line'      => $line
            ]);
        });
    }

    function getInputs()
    {
        global $request;

        $inputAnalyzers = $request->get('analyzers');
        $inputFilters   = $request->get('filters');

        if (empty($inputAnalyzers) || empty($inputFilters))
        {
            throw new \Exception('Parameters are missing!');
        }

        $inputAnalyzers = json_decode($inputAnalyzers, true);
        $inputFilters   = json_decode($inputFilters, true);

        if ($inputAnalyzers === false || $inputFilters === false)
        {
            throw new \Exception('Parameters are not JSON!');
        }

        //$inputAnalyzers = prefixInput($inputAnalyzers);
        //$inputFilters   = prefixInput($inputFilters);

        return [$inputAnalyzers, $inputFilters];
    }

    function getPrefix()
    {
        global $request;

        $ip = $request->server->get('REMOTE_ADDR');
        $ua = $request->server->get('HTTP_USER_AGENT');

        if (empty($ip) || empty($ua))
        {
            throw new \Exception('REMOTE_ADDR or HTTP_USER_AGENT is missing!');
        }

        return md5($ip . '_' . $ua) . '_';
    }

    function prefixInput($input)
    {
        global $prefix;

        $buffer = [];

        foreach($input as $k => $v)
        {
            $buffer[$prefix . $k] = $v;
        }

        return $buffer;
    }

    function getElasticSearchClient()
    {
        $client = new Elasticsearch\Client();

        return $client;
    }




