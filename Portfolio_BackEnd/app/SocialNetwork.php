<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
    use HasFactory;

    protected $fillable = [
        'person_id',
        'name',
        'link',
        'icon',
        'color',
        'backColor'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class, 'person_id');
    }
}
