<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    protected $fillable = [
        'name',
        'color'
    ];

    public function people()
    {
        return $this->belongsToMany(Person::class, 'person_technology')
            ->withPivot('level')
            ->withTimestamps();
    }
}
