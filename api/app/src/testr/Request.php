<?php
/**
 * Created by PhpStorm.
 * User: tom
 * Date: 31/12/2014
 * Time: 15:10
 */

namespace testr;


class Request extends \Symfony\Component\HttpFoundation\Request
{
    /**
     * Creates a new request with values from PHP's super globals.
     *
     * @return Request A new request
     *
     * @api
     */
    public static function createFromGlobals()
    {
        foreach($_GET as $k=>&$v)
        {
            $v = json_decode($v, true);
        }

        foreach($_POST as $k=>&$v)
        {
            $v = json_decode($v, true);
        }

        $request = parent::createFromGlobals();

        $requestBody = $request->getContent();

        if (!empty($requestBody))
        {//var_dump($requestBody);//die();
            $requestBodyData = json_decode($requestBody, true);

            if (!empty($requestBodyData) && is_array($requestBodyData))
            {
                $request->query->add($requestBodyData);
            }
        }

        return $request;
    }
}