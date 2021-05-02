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

        $products = Product::all();

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
        $attributes = $request->validate([
            'name' => 'required|string|max:60',
            'description' => 'required',
            'price' => 'required|numeric|between:1,129.99'
        ]);

        $this->create($attributes);

        // return Product::create($attributes);
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
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $attributes = $request->validate([
            'name' => 'required|string|max:60',
            'description' => 'required',
            'price' => 'required|numeric|between:1,129.99'
        ]);


        $product = Product::find($product->id);
        $product->update($attributes);

        return $product;
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
}
