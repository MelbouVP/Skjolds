<?php

namespace App\Http\Controllers;

use App\Models\{Category, Product, Color, Size};
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $products = Product::with('colors','sizes', 'categories')->simplePaginate(15);

        // Log::info($products);

        // $products = Product::simplePaginate(50);

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

        // $data = $request->all();
        // error_log( print_r($data, TRUE) ); 
        
        $fields = $this->validateData($request);

        $categories = $this->validateCategory($request['categories']);
        $colors = $this->validateColor($request['colors']);
        $sizes = $this->validateSize($request['sizes']);
        
        $path = $request->file('image')->store('product','public');


        $product = Product::create([
            'name' => $fields['name'],
            'description' => $fields['description'],
            'price' => $fields['price'],
            'image_path' => 'images/' . $path
        ]);

        foreach($colors as $color) {
            $product->colors()->attach($color['id']);
        }

        foreach($sizes as $size) {
            $product->sizes()->attach($size['id']);
        }

        foreach($categories as $category) {
            $product->categories()->attach($category['id']);
        }
        

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

        $product = Product::with('colors', 'sizes', 'categories')->find($product->id);
        // Log::info($product);

        return response($product, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $product = Product::with('colors', 'sizes', 'categories')->findOrFail($id);

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
        Log::info($fields);
        $categories = $this->validateCategory($request['categories']);
        $colors = $this->validateColor($request['colors']);
        $sizes = $this->validateSize($request['sizes']);
        
        $product = Product::find($id);
        
        
        if(request()->hasFile('image')){
            unlink($product->image_path);
    
            $path = $request->file('image')->store('product','public');

            $product->update([
                'name' => $fields['name'],
                'description' => $fields['description'],
                'price' => $fields['price'],
                'image_path' => 'images/' . $path
            ]);

        } else {
            $product->update([
                'name' => $fields['name'],
                'description' => $fields['description'],
                'price' => $fields['price']
            ]);
        }

        $product->categories()->detach();
        foreach($categories as $category) {
            $product->categories()->attach($category['id']);
        }

        $product->colors()->detach();
        foreach($colors as $color) {
            $product->colors()->attach($color['id']);
        }

        $product->sizes()->detach();
        foreach($sizes as $size) {
            $product->sizes()->attach($size['id']);
        }

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

    public function filter(Request $request)
    {
        $filledInput = array_filter($request->all());

        
        $products = Product::filter($filledInput)->with('colors','sizes', 'categories')->simplePaginate(50);


        // Log::info($products);

        return response($products, 201);
    }




    public function validateData(Request $request)
    {

        $decodedJSON = [
            'name' => $request['name'],
            'description' => $request['description'],
            'price' => json_decode($request['price']),
            'image' => $request['image'],
            'categories' => json_decode($request['categories']),
            'colors' => json_decode($request['colors']),
            'sizes' => json_decode($request['sizes']),
        ];
    

        return Validator::make( $decodedJSON, [
            'name' => $request->isMethod('put') ? 'string|max:50' : 'required|string|max:50',
            'description' => $request->isMethod('put') ? '' : 'required',
            'price' => $request->isMethod('put') ? 'numeric|between:1,129.99' : 'required|numeric|between:1,129.99',
            'image' => $request->isMethod('put') ? '' : 'required|mimes:png,jpg,jpeg|max:2048',// max limits upload size e.g. 2048 kB = 2 Mb
            'categories' => 'array|required',
            'colors' => 'array|required',
            'sizes' => 'array|required'
        ])->validate();

    }


    /**
     * 
     *
     * @param 
     */
    public function validateCategory($requestCategories)
    {

        $categories = json_decode($requestCategories, true);

        foreach($categories as $category) {
            
            if(!Category::where('id', $category['id'])->exists()){
                return response('Provided invalid data', 422);
            }
        }

        return $categories;
    }

    
    /**
     * 
     *
     * @param 
     */
    public function validateColor($requestColors)
    {

        $colors = json_decode($requestColors, true);
        
        foreach($colors as $color) {
            
            $color_id = $color['id'];
            
            if( !Color::where('id', $color_id)->first() ){
                return Response::json('Something went wrong', 422);
            }
        }

        return $colors;

    }

    /**
     * 
     *
     * @param 
     */
    public function validateSize($requestSizes)
    {

        $sizes = json_decode($requestSizes, true);

        foreach($sizes as $size) {
            
            if(!Size::where('id', $size['id'])->exists()){
                return response('Provided invalid data', 422);
            }
        }

        return $sizes;
    }


}
