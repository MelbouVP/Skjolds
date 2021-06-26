<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('order_id');
            $table->foreignId('size_id');
            $table->foreignId('color_id');
            $table->foreignId('product_id');
            $table->tinyInteger('quantity');

            $table->foreign('order_id')
                ->references('order_id')
                ->on('orders');
            
            $table->foreign('size_id')
                ->references('id')
                ->on('sizes');

            $table->foreign('color_id')
                ->references('id')
                ->on('colors');

            $table->foreign('product_id')
                ->references('id')
                ->on('products');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
