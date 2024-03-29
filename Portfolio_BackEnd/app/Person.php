<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = [
        'name',
        'status',
        'summary',
        'about',
        'description',
        'email',
        'photo',
        'phone',
        'certifications',
        'languages'
    ];

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class, 'person_technology')
            ->withPivot('level')
            ->withTimestamps();
    }

    public function socialNetworks()
    {
        return $this->hasMany(SocialNetwork::class);
    }
}
