<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Post;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class PostControllerTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_index_route()
    {
        $response = $this->get('/api/my-posts');
      
        $response->assertStatus(200);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_store_post()
    {
        $post = [Post::factory()->create()];
        
        $this->post(route('post.store'), $post)
         // ->assertStatus(201)
    ->assertJson($post);
    }
}
