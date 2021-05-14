<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class ZakazivanjeSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('zakazivanje')->insert([
            [
            'datum' => '2021-06-04',
            'user_id' => '16',
            'trening_id' => '7'
        ],[
            'datum' => '2021-06-04',
            'user_id' => '17',
            'trening_id' => '8'
        ],[
            'datum' => '2021-06-04',
            'user_id' => '18',
            'trening_id' => '9'
        ]]);
    }
}