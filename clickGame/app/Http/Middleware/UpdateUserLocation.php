<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class UpdateUserLocation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        // If the URL has a location {id}, and it's different from the user's current DB id
        if ($user && $request->route('id')) {
            $locationData = $request->route('id');

            if ($user->current_location_id != $locationData->id) {
                $user->update(['current_location_id' => $locationData->id]);
            }
        }

        return $next($request);
    }
}
