<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
            'name' => 'milica',
            'email' => 'milica@gmail.com',
            'password' => 'milica'
        ],[
            'name' => 'milada',
            'email' => 'milada@gmail.com',
            'password' => 'milada'
        ],[
            'name' => 'zuta',
            'email' => 'zuta@gmail.com',
            'password' => 'zuta'
        ]]);
    }
}