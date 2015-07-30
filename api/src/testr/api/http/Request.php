<?php
/**
 * Created by PhpStorm.
 * User: tom
 * Date: 31/12/2014
 * Time: 15:10
 */

namespace testr\api\http;

class Request extends \Symfony\Component\HttpFoundation\Request
{
    public function getJSONObject($name)
    {
        $value = parent::get($name);

        if (is_array($value))
        {
            return $value;
        }

        if (empty($value))
        {
            throw new \Exception($name . ' is empty!');
        }

        $value = json_decode($value, true);

        if ($value === null || $value === false)
        {
            throw new \Exception($name . ' is not JSON encoded!');
        }

        if (!is_array($value))
        {
            throw new \Exception($name . ' is not a JSON array!');
        }

        return $value;
    }

    public function getString($name, $min, $max)
    {
        $value = parent::get($name);

        if (strlen($value) <= $min)
        {
            throw new \Exception($name .  ' is too small!');
        }

        if (strlen($value) >= $max)
        {
            throw new \Exception($name . ' is too big!');
        }

        return $value;
    }

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
        //    $v = json_decode($v, true);
        }

        foreach($_POST as $k=>&$v)
        {
         //   $v = json_decode($v, true);
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