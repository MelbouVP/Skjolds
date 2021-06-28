<?php

namespace App\Http\Controllers;

use App\Models\{ Color, Order, OrderItem, Product, Size };
use Barryvdh\Snappy\Facades\SnappyPdf;
// use Barryvdh\Snappy\Facades\SnappyPdfe as PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
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
            'shipping_country' => $orderData['customer_address']['country'],
            'shipping_city' => $orderData['customer_address']['city'],
            'shipping_address' => $orderData['customer_address']['street'],
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

    public function generate(Request $request)
    {

        $id = $request['id'];
        $order = Order::where('order_id', $id)->firstOrFail();



        // Log::info($order);

        // Log::info($request->all());

        $html = $request['invoice'];

        // Log::info($html);
        
        // $html = mb_convert_encoding($html, "utf-8", "auto");
        
        // $html = mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8');

        // $html = utf8_decode($html);

        // Log::info($html);



        $html = 
        "<html>
            <head>
                <meta charset='utf-8' /> 
                <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                <link rel='stylesheet' type='text/css' href=" . public_path('/css/invoice.css') . " >
            </head>
            <body>
                {$html}
            </body>
        </html>";

        
        // Log::info($html);
        // $pdf = App::make('dompdf.wrapper');

        $pdf = SnappyPdf::loadHTML($html);

        // $pdf->setOptions(['dpi' => 72 ]);


        // Log::info($pdf);
        // $pdf->save("{$id}.pdf");

        return $pdf->stream('invoice');

        // $path = public_path() . '/pdf/' . $data->filename . '.pdf';

        // $pdf = PDF::loadView('pdf.coverletter', $data);

        // $pdf->save($path);

        // return response()->download($path);
    }


}
