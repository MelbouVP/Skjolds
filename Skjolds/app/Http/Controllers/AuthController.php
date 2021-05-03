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
        
        // validate request
        $fields = $request->validate([
            'username' => 'required|string|min:4',
            'email' => 'required|email:filter|unique:users,email|', // email:filter ensures correct email format, unqique checks against unique emails in users table
            'password' => 'required|string|min:8|confirmed'
        ]);

        // create new user, bcrypt hashes password
        $user = User::create([
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        // Sanctum API authentication token
        $token = $user->createToken('auth_token')->plainTextToken;


        $response = [
            'user' => [
                'name' => $user->username,
                'email' => $user->email
            ]
        ];

        // append auth to response as httpOnly cookie
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
            'password' => 'required|string|min:8'
        ]);

        // Check if user exists by finding unique user email
        $user = User::where('email', $fields['email'])->first();

        // Check user existance and password correctness
        if(!$user || !Hash::check($fields['password'], $user->password) ){
            return response([
                'message' => 'Invalid credentials'
            ], 401);
        };

        $token = $this->issueToken($user);

        $response = [
            'user' => [
                'email' => $user->email,
                'username' => $user->username,
                'privileged' => $token['privilege']
            ],
        ];

        return response($response, 201)->cookie(
            'auth_token', $token['data'], null, '/', null, null, true
        );
    }


    // issue auth tokens to users
    public function issueToken(User $user)
    {

        // Check if user already has token, delete old tokens in order to issue new one
        if( $user->tokens ){
            $user->tokens()->delete();
        };

        // issue privileged token with abilities based on user role
        if($user->role != 'user'){
            return [
                'data' => $this->issuePrivilegedToken($user),
                'privilege' => true
            ];
        } else {
            return [
                'data' => $user->createToken('auth_token')->plainTextToken,
                'privilege' => false
            ];
        }

    }

    public function issuePrivilegedToken(User $user)
    {
        switch ($user->role) {
            case 'admin':
              return $user->createToken('auth_token',['Product:crud'])->plainTextToken;
              break;
            default:
                return $user->createToken('auth_token')->plainTextToken;
          }

    }
}
