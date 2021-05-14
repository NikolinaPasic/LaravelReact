<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAranzmaniTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aranzmani', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('naziv');
            $table->double('cena',15,8);
            $table->date('datum_polaska');
            $table->date('datum_povratka');
            $table->integer('kapacitet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aranzmani');
    }
}
