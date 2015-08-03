<?php

namespace testr\api\services;

use Elasticsearch\Client;
use testr\api\http\Request;
use testr\api\http\Validator;

class OpenIndexService
{
    public function run(Request $request)
    {
        $inputIndex     = $request->getString('index', 2, 128);
        $esClient       = new Client([
            'hosts' => [
                            'host' => 'localhost',
                            'port' => 92000
                        ]
        ]);

        if (!$esClient->indices()->exists(['index' => $inputIndex]))
        {
            if (strpos($inputIndex, 'sample-') === 0)
            {
                preg_match('/sample\-([a-z0-9A-Z]+)\-(.*)/', $inputIndex, $matches);

                $sample = $matches[1];

                if (file_exists(ROOT . '/src/testr/api/samples/' . $sample . '.json'))
                {
                    return json_decode(file_get_contents(ROOT . '/src/testr/api/samples/' . $sample . '.json'));
                }
                else
                {
                    throw new \Exception('Sample unknown!');
                }
            }
            else
            {
                return json_decode(file_get_contents(ROOT . '/src/testr/api/samples/blank.json'));
            }
        }

        $buffer = $esClient->indices()->getSettings(['index' => $inputIndex]);

        return $buffer[$inputIndex]['settings']['index']['analysis'];
    }
}