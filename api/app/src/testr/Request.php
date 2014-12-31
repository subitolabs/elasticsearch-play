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
        $request = parent::createFromGlobals();

        $requestBody = $request->getContent();

        if (!empty($requestBody))
        {
            $requestBodyData = json_decode($requestBody, true);

            if (!empty($requestBodyData) && is_array($requestBodyData))
            {
                $request->query->add($requestBodyData);
            }
        }

        return $request;
    }
}