<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wisata extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

     protected $table= 'wisatas';
    protected $fillable = [
        'name',
        'location',
        'ticket',
        'rating',
        'image_path',
    ];
}

