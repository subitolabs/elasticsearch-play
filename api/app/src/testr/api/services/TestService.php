<?php
/**
 * Created by PhpStorm.
 * User: tom
 * Date: 03/01/2015
 * Time: 23:50
 */

namespace testr\api\services;


use Elasticsearch\Client;
use testr\api\http\Request;

class TestService
{
    public function run(Request $request)
    {
        $inputAnalyzers     = $request->getJSONObject('analyzers');
        $inputFilters       = $request->getJSONObject('filters');
        $inputTokenizers    = $request->getJSONObject('tokenizers');
        $inputText          = $request->getString('text', 0, 5000);
        $inputIndex         = $request->getString('index', 0, 128);

        $esClient = new Client();

        if ($esClient->indices()->exists(['index' => $inputIndex]))
        {
            $esClient->indices()->delete(['index' => $inputIndex]);
        }

        $esClient->indices()->create([
            'index' => $inputIndex,
            'body'  => [
                'settings' => [
                    'number_of_shards'      => 1,
                    'number_of_replicas'    => 0,
                    'analysis'              => [
                        'text'      => $inputText,
                        'filter'    => $inputFilters,
                        'tokenizer' => $inputTokenizers,
                        'analyzer'  => $inputAnalyzers
                    ]
                ]
            ]
        ]);

        $outputTests    = [];
        $tries          = 0;

        while(true)
        {
            usleep(100 * 1000);

            try
            {
                foreach ($inputAnalyzers as $analyzer => $analyzerData)
                {
                    $tokens = $esClient->indices()->analyze([
                        'index'     => $inputIndex,
                        'analyzer'  => $analyzer,
                        'text'      => $inputText
                    ]);

                    $outputTests[] = [
                        'title'     => $analyzer,
                        'tokens'    => $tokens['tokens']
                    ];
                }

                return ['tests' => $outputTests];
            }
            catch(\Exception $e)
            {
                if ($tries++ > 10)
                {
                    throw $e;
                }
            }
        }
    }
}