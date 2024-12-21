<?php

namespace Database\Factories;

use App\Models\Kategoria;
use Illuminate\Database\Eloquent\Factories\Factory;
use Nette\Utils\Random;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ingatlan>
 */
class IngatlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kategoria' => Kategoria::all()->random()->id,
            'leiras' => fake('hu_HU')->sentence(),
            'hirdetesDatuma' => fake()->date(),
            'tehermentes' => rand(0,1),
            'ar'=> rand(10000000,100000000),
            'kepURL'=> fake()->url(),
        ];
    }
}
