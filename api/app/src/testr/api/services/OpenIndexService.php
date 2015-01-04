<?php
/**
 * Created by PhpStorm.
 * User: tom
 * Date: 03/01/2015
 * Time: 23:51
 */

namespace testr\api\services;


use Elasticsearch\Client;
use testr\api\http\Request;
use testr\api\http\Validator;

class OpenIndexService
{
    public function run(Request $request)
    {
        $inputIndex     = $request->getString('index', 3, 128);
        $esClient       = new Client();

        if (!$esClient->indices()->exists(['index' => $inputIndex]))
        {
            throw new \Exception('This index does not exist!');
        }

        $buffer = $esClient->indices()->getSettings(['index' => $inputIndex]);

        return $buffer[$inputIndex]['settings']['index']['analysis'];
    }
}