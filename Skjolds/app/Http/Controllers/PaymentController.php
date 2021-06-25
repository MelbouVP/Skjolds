<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\{Stripe, Charge};
use Stripe\Checkout\Session;


class PaymentController extends Controller
{
    
    public function makePayment(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));
        // Charge::create ([
        //         "amount" => 120 * 100,
        //         "currency" => "inr",
        //         "source" => $request->stripeToken,
        //         "description" => "Make payment and chill." 
        // ]);

        Log::info(env('STRIPE_SECRET'));
        Log::info($request->all());

        $items = $request['items'];

        $YOUR_DOMAIN = 'http://localhost:3000/checkout';

        $checkout_session = Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [
            [
                'price_data' => [
                    'currency' => 'eur',
                    'unit_amount' => $items[0]['price']*100,
                    'product_data' => [
                        'name' => $items[0]['name'],
                        'images' => ["https://s6.gifyu.com/images/Felicciti-2019-Off-shoulders-Dress.jpg"],
                ],
                ],
                'quantity' => $items[0]['quantity']
            ],
            // [
            //     'price_data' => [
            //         'currency' => 'eur',
            //         'unit_amount' => $items[1]['price']*100,
            //         'product_data' => [
            //             'name' => $items[1]['name'],
            //             'images' => ["https://s6.gifyu.com/images/206266-2001_A.png"],
            //     ],
            //     ],
            //     'quantity' => $items[1]['quantity']
            // ],

        ],
        'mode' => 'payment',
        'success_url' => $YOUR_DOMAIN . '?success=true',
        'cancel_url' => $YOUR_DOMAIN . '?canceled=true',
        ]);

        Log::info($checkout_session);

        return response(json_encode(['id' => $checkout_session->id]), 200);
  
        // Session::flash('success', 'Payment successfully made.');
          
        // return back();
    }
}
