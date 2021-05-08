<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;

    protected $fillable = [
        'size_name',
        'size_value',
        'size_type'
    ];

    protected $hidden = ['pivot', 'created_at', 'updated_at'];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
