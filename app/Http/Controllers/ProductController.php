<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
        $products= Product::all();
        return response()->json($products);

        
        

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create($request->post());
        return response()->json([
            'product'=>$product
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
   
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $product->fill($request->post())->save();

        // return response()->json([
        //     'product'=>$product
        // ]);

        $product= Product::find($id);
        $product->code = $request->code;
        $product->product = $request->product;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->save();

        return response()->json([
                $product
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  App\Models\Product $product

     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        // $product->delete();
        // return response()->json([
        //     'msg'=>$product
        // ]);
        $product= Product::find($id);
        $product->delete();
        return response()->json([
            'msg'=>$product
         ]);
       
    }
}
