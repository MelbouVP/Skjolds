<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'image_path'
    ];

    protected $hidden = ['pivot', 'created_at', 'updated_at'];

    public function colors()
    {
        return $this->belongsToMany(Color::class);
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }


    /**
     * Scope a query to only include active users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  Array  $props
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($query, $props)
    {
        Log::info($props);

        // $query = $products;
        $genders = null;
        $productCategories = null;
        
        
        if(array_key_exists('category', $props)){
            $genders = array_filter($props['category'], fn($value) => $value === 'men' || $value === 'women');
            $productCategories = array_diff( $props['category'], $genders );
        }


        if (array_key_exists('min_price', $props)) {
            $query->where('price', '>', $props['min_price']);
        }


        if(array_key_exists('max_price', $props)){
            $query->where('price', '<', $props['max_price']);
        }


        if(!empty($productCategories)){

            $query = $query->whereHas('categories', function (Builder $query) use($productCategories) {
                $query->whereIn('category_name', $productCategories);
            });
        }


        if(array_key_exists('color', $props)){
            $colors = $props['color'];

            $query = $query->whereHas('colors', function (Builder $query) use($colors) {

                $query->whereIn('color_name', $colors);
            });
        }

        if(array_key_exists('size', $props)){
            $sizes = $props['size'];

            $query = $query->whereHas('sizes', function (Builder $query) use($sizes) {

                $query->whereIn('size_name', $sizes);
            });
        }

        if(!empty($genders)){

            $query = $query->whereHas('categories', function (Builder $query) use($genders) {

                $query->whereIn('category_name', $genders);
            });
        }

        return $query;
    }
    
}
