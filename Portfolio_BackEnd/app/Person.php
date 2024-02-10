<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = [
        'name',
        'status',
        'description',
        'email',
        'photo',
        'phone',
        'linkedin',
        'github',
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
}
