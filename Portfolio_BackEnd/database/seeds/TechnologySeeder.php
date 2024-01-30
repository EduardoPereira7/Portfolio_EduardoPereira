<?php

use Illuminate\Database\Seeder;
use App\Technology;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $technologies = [
            'PHP', 'JavaScript', 'HTML', 'CSS', 'C#', 'C++', 'React', 'React Native', 'Java', 'Python', 'Ruby', 'Swift', 'Kotlin', 'Rust', 'Go', 'TypeScript', 'SQL', 'C',
            'Objective-C', 'Perl', 'F#', 'Assembly', 'PowerShell', 'TypeScript', 'Visual Basic', 'Dart', 'Kotlin', 'Bootstrap', 'Outras'
        ];

        foreach ($technologies as $technology) {
            Technology::create([
                'name' => $technology
            ]);
        }
    }
}
