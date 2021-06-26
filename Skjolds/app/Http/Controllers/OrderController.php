<?php

namespace App\Http\Controllers;

use App\Models\{ Color, Order, OrderItem, Product, Size };
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Object $orderData
     * @return \Illuminate\Http\Response
     */
    public function store($orderData)
    {

        Log::info($orderData);
        Log::info($orderData['orderID']);
        
        Order::create([
            'order_id' => $orderData['orderID'],
            'user_id' => $orderData['userID'],
            'order_sum' => ( ( $orderData['order_total_amount'] ) / 100),
            'shipping_country' => $orderData['customer_adress']['country'],
            'shipping_city' => $orderData['customer_adress']['city'],
            'shipping_address' => $orderData['customer_adress']['street'],
            'order_customer_email' => $orderData['customer_email'],
            'customer_name' => $orderData['customer_name'],
            'payment_status' => $orderData['payment_status'],
        ]);

        foreach($orderData['line_items'] as $item){

            $sizeId = Size::where('size_value', $item['size'])->firstOrFail()->id;
            $colorId = Color::where('color_name', $item['color'])->firstOrFail()->id;
            $productId = Product::where('id', $item['productID'])->firstOrFail()->id;

            OrderItem::create([
                'order_id' => $orderData['orderID'],
                'size_id' => $sizeId,
                'color_id' => $colorId,
                'product_id' => $productId,
                'quantity' => $item['quantity']
            ]);


            Log::info(Order::where('order_id', $orderData['orderID'])->firstOrFail());
            Log::info(OrderItem::where('order_id', $orderData['orderID'])->firstOrFail());

        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
