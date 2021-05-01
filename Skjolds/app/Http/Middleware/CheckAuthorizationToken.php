<?php

namespace App\Http\Middleware;

use Closure;

class CheckAuthorizationToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        ddd($request->headers);
    //   if ($request->headershas('access_token')) {
    //      $request->headers->set('Authorization', 'Bearer ' . $request->get('access_token'));
    //     }
    //     return $next($request);
    }
}