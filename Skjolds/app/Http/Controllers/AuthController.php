<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;


class AuthController extends Controller
{
    
    public function register(Request $request)
    {
        

        $fields = $request->validate([
            'username' => 'required|string|min:4',
            'email' => 'required|email:filter|unique:users,email|',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201)->cookie(
            'auth_token', $token, null, '/', null, null, true // $name, $value, $minutes, $path, $domain, $secure, $httpOnly
        );
        
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response([
            'message' => 'Logged out'
        ], 200);
    }

    public function login(Request $request)
    {
        
        $fields = $request->validate([
            'email' => 'required|email:filter',
            'password' => 'required|string|min:6'
        ]);

        // Check if user exists by finding unique user email
        $user = User::where('email', $fields['email'])->first();

        // Check user existance and password correctness
        if(!$user || !Hash::check($fields['password'], $user->password) ){
            return response([
                'message' => 'Invalid credentials'
            ], 401);
        };

        // Check if user already has token, delete old tokens and issue new token

        if( $user->tokens ){
            $user->tokens()->delete();
        };

        $token = $user->createToken('auth_token')->plainTextToken;


        $response = [
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'username' => $user->username
            ],
            'token' => $token
        ];

        return response($response, 201);
    }
}
