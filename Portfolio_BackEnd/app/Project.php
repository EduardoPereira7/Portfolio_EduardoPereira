<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'person_id',
        'name',
        'description',
        'link',
        'image'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class);
    }
}
