<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function updatePlayerWinFight(Request $request) {
            $request->validate([
                'player_id' => 'required|integer|exists:users,id',
                'curhp' => 'required|integer',
                'xp' => 'required|integer',
                'gold' => 'required|integer',
                'level' => 'nullable|integer',
                'exp_to_next_level' => 'nullable|integer',
            ]);

            $user = User::find($request->player_id);

            if ($user) {
                $user->curhp = $request->curhp;
                $user->current_exp = $request->xp;
                $user->gold = $request->gold;
                $user->level = $request->level ?? $user->level;
                $user->exp_to_next_level = $request->exp_to_next_level ?? $user->exp_to_next_level;

                $user->save(); 

                return back()->with('success', 'User updated!');
            }
            else {
                    return back()
                        ->withErrors(['user error' => 'User not found in our database.']);
            }
    }

    public function resetPlayerStats(Request $request) {
        $request->validate([
            'player_id' => 'required|integer|exists:users,id',
        ]);

        $user = User::find($request->player_id);

        if($user) {
                $user->attack = 50;
                $user->magical_attack = 10;
                $user->defense = 80;
                $user->magical_defense = 20;
                $user->gold = 250;
                $user->inbank = 0;
                $user->curhp = 150;
                $user->maxhp = 200;
                $user->curmp = 50;
                $user->maxmp = 100; 
                $user->current_exp = 0;
                $user->exp_to_next_level = 100;
                $user->level = 1;
                $user->primary_hand = '';
                $user->secondary_hand = '';
                $user->current_location_id = 1;

                $user->save(); 
                
                return back()->with('success', 'User updated!');
            } else {
                    return back()
                    ->withErrors(['user error' => 'User not found in our database.']);
            }
    }
}
