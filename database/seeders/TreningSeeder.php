<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class TreningSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trenings')->insert([
            [
            'naziv' => 'Body pump',
            'intenzitet' => 'visok',
          
            'kapacitet' => 15
        ],[
            'naziv' => 'Body form',
            'intenzitet' => 'srednji',
            
            'kapacitet' => 15
        ],[
            'naziv' => 'Body combat',
            'intenzitet' => 'visok',
           
            'kapacitet' => 10
        ]]);
    }
}