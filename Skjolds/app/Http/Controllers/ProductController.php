<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $products = Product::simplePaginate(15);

        // foreach ($products as $product) {
        //     $product->image_path = asset('images/product/'. $product->image_path);
        // };

        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($data)
    {
        Product::create($data);

        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        
        $fields = $this->validateData($request);
            
        // $data = $request->all();
        // error_log( print_r($data, TRUE) ); 
        
        $path = $request->file('image')->store('product','public');


        $product = Product::create([
            'name' => $fields['name'],
            'description' => $fields['description'],
            'price' => $fields['price'],
            'image_path' => 'images/' . $path
        ]);

        return response('Success', 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Product::find($product->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $product = Product::find($id);

        return response($product, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $fields = $this->validateData($request);
        
        $product = Product::find($id);

        unlink($product->image_path);

        $path = $request->file('image')->store('product','public');

        $product->update([
            'name' => $fields['name'],
            'description' => $fields['description'],
            'price' => $fields['price'],
            'image_path' => 'images/' . $path
        ]);

        return response($product, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        return Product::destroy($product->id);
    }

    /**
     * Search for product by name
     *
     * @param  str $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Product::where('name','like', '%'.$name.'%')->get();
    }

    public function validateData(Request $request)
    {
        return $request->validate([
            'name' => 'required|string|max:50',
            'description' => 'required',
            'price' => 'required|numeric|between:1,129.99',
            'image' => 'required|mimes:png,jpg,jpeg|max:2048' // max limits upload size e.g. 2048 kB = 2 Mb
        ]);
    }
}
