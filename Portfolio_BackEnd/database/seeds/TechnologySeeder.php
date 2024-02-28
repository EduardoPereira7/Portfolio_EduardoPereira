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
            'Objective-C', 'Perl', 'F#', 'Assembly', 'PowerShell', 'ASP.NET', 'Visual Basic', 'Dart', 'Bootstrap', 'Outras'
        ];
        $colors = [
            '#4F5D95', '#F0DB4F', '#E44D26', '#264DE4', '#A4A9B7', '#239120', '#F7DF1E', '#007396', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26', '#F7DF1E', '#3776AB', '#306998', '#E34F26'
        ];

        foreach ($technologies as $technology) {
            Technology::create([
                'name' => $technology,
                'color' => array_shift($colors)
            ]);
        }
    }
}
