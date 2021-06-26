<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\{Stripe, Customer};
use Stripe\Checkout\Session;


class PaymentController extends Controller
{
    
    public function makePayment(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $items = $this->generateLineItems($request['items']);


        $DOMAIN = 'http://localhost:3000';



        $checkout_session = Session::create([
            'payment_method_types' => ['card'],
            'shipping_address_collection' => [
                'allowed_countries' => ['LT', 'LV','EE', 'DE', 'PL', 'NO', 'SE', 'FR', 'IT', 'CH', 'CZ', 'US', 'CA', 'RU'],
            ],
            'line_items' => $items,
            'mode' => 'payment',
            'success_url' => $DOMAIN . '/checkout?success=true&session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => $DOMAIN . '/cart',
            'metadata' => [
                'userID' => $request['userId']
            ]
        ]);

        return response(json_encode(['id' => $checkout_session->id]), 200);
  
    }


    public function generateLineItems($items)
    {
        $lineitems = array();

        foreach ($items as $item) {
            $product_data = array(
                                    'name' => $item["name"],
                                    'description' => $item["description"],
                                    'images' => [
                                        // "http://localhost:8000/" . $item['image_path']
                                        'https://s6.gifyu.com/images/Felicciti-2019-Off-shoulders-Dress.jpg'
                                    ],
                                    'metadata' => [
                                        'productID' => $item['id'],
                                        'size' => $item['selectedAttributes'][0],
                                        'color' => $item['selectedAttributes'][1],
                                        'quantity' => $item['quantity'],
                                        'price' => $item["price"]*100
                                    ]
                                );
            $price_data = array('currency' => "eur",
                                'unit_amount' => $item["price"]*100,
                                'product_data' => $product_data,
                                );
            $lineitem = array('quantity' => $item["quantity"],
                            'price_data' => $price_data,
                            );
            $lineitems[] = $lineitem;
        }

        return $lineitems;
    }

    public function confirmPayment(Request $request)
    {

        Stripe::setApiKey(env('STRIPE_SECRET'));
        
        try {
            $session = Session::retrieve($request['sessionId']);
        } catch (\Throwable $th) {
            return response('The server could not understand the request.', 400);
        }

        $customer = Customer::retrieve($session->customer);

        $lineItem = $session->allLineItems($request['sessionId']);


        $orderData = [
            'orderID' => $session->payment_intent,
            'order_date' => $customer->created,
            'payment_status' => $session->payment_status,
            'userID' => $session->metadata->userID,
            'customer_name' => $session->shipping->name,
            'customer_adress' => [
                'country' => $session->shipping->address->country,
                'city' => $session->shipping->address->city,
                'street' => $session->shipping->address->line1,
                'postal_code' => $session->shipping->address->postal_code,
            ],
            'customer_email' => $session->customer_details->email,
            'order_total_amount' => $session->amount_total,
            'line_items' => []
        ];


        foreach($lineItem->data as $item){

            $product = \Stripe\Product::retrieve($item->price->product);

            $orderData['line_items'][] = [
                'productID' => $product->metadata->productID,
                'name' => $product->name,
                'images' => $product->images,
                'size' => $product->metadata->size,
                'color' => $product->metadata->color,
                'quantity' => $product->metadata->quantity,
                'price' => $product->metadata->price
            ];
        }

        $this->saveOrderDetails($orderData);

        return response($orderData, 201);

    }


    public function saveOrderDetails($data)
    {

        $order = new OrderController();

        $order->store($data);

    }

}
