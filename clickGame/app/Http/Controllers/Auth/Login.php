<?php
 
namespace App\Http\Controllers\Auth;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
 
class Login extends Controller
{
    public function __invoke(Request $request)
    {
        // Validate the input
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
 
        // Attempt to log in
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            $last_location = Auth::user()->current_location_id;
            $target = $last_location ? "/location/{$last_location}" : "/location/1";
            
            return redirect($target)->with('success', 'Welcome back!');
        }
        
        // If login fails, redirect back with error
        return back()
            ->withErrors(['email' => 'The provided credentials do not match our records.'])
            ->onlyInput('email');
    }

    public function updateLocation(Request $request)
    {
        $request->validate([
            'location_id' => 'required|integer|exists:locations,id',
        ]);

        $user = Auth::user();
        $user->current_location_id = $request->location_id;
        $user->save();

        // Use back() to refresh the Inertia props on the current page
        return back()->with('success', 'Location updated!');
    }
}