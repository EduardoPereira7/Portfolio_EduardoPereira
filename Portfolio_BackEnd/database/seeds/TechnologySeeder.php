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
            'Objective-C', 'Perl', 'F#', 'Assembly', 'PowerShell', 'ASP.NET', 'Visual Basic', 'Dart', 'Bootstrap', 'Laravel', 'Outras'
        ];
        $colors = [
            '#777BB4', '#F7DF1E', '#E34F26', '#1572B6', '#239120', '#00599C', '#61DAFB', '#61DAFB', '#007396', '#3776AB', '#CC342D', '#FFAC45', '#0095D5', '#DE3A2C', '#00ADD8', '#3178C6', '#CC2929', '#A8B9CC', '#39457E', '#002395 ', '#002395', '#5A5255', '#012456', '#5A5255', '#0175C2', '#7952B3', '#F7DF1E', '#FF2D20', '#000000'
        ];

        foreach ($technologies as $technology) {
            Technology::create([
                'name' => $technology,
                'color' => array_shift($colors)
            ]);
        }
    }
}
