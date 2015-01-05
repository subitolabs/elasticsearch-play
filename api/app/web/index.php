<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Max-Age: 1728000');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    require_once __DIR__.'/../vendor/autoload.php';
//var_dump($_SERVER, $_GET);die();
    $request    = \testr\api\http\Request::createFromGlobals();

    $requestUri = trim($request->getRequestUri(), '\\/');

    init();

    $service    = str_replace('api/', '', strpos($requestUri, '?') === false ? $requestUri : substr($requestUri, 0, strpos($requestUri, '?')));
    $services   = ['test' => 'Test', 'open' => 'OpenIndex'];

    if (!isset($services[$service]))
    {
        throw new \Exception('Bad service name!');
    }

    $serviceClass = 'testr\api\services\\' . $services[$service] . 'Service';

    $serviceInstance = new $serviceClass();

    $responseData = $serviceInstance->run($request);

    renderResponse(200, $responseData);

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
                'file'      => str_replace(realpath(__DIR__ . '/..'), '', $e->getFile()),
                'line'      => $e->getLine()
            ]);
        });

        set_error_handler(function($error, $message, $file, $line, $context)
        {
            renderResponse(500, [
                'error'     => $error,
                'message'   => $message,
                'file'      => str_replace(realpath(__DIR__ . '/..'), '', $file),
                'line'      => $line
            ]);
        });
    }





