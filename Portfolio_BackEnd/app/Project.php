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
        'thumbnail'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
