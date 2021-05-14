<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAranzmanUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aranzman_user', function (Blueprint $table) {
            $table->primary(['user_id','aranzman_id']);
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('aranzman_id')->unsigned();
            $table->foreign('user_id')
            ->references('id')
            ->on('users');
            $table->foreign('aranzman_id')
            ->references('id')
            ->on('aranzmani');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aranzman_user');
    }
}
