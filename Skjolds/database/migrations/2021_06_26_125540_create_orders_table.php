<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->string('order_id')->primary();
            $table->string('user_id');
            $table->decimal('order_sum', 8, 2);
            $table->string('shipping_country');
            $table->string('shipping_city');
            $table->string('shipping_address');
            $table->string('order_customer_email');
            $table->string('customer_name');
            $table->string('payment_status');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('email')
                ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
