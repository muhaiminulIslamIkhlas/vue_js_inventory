<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
     protected $fillable = [
        'name', 'email', 'phone','address',
        'photo','nid','joining_date','salary'
            ];
}
