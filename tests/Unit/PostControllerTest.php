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
    public function test_store_post()
    {
        $post = Post::create(['title'=>'Olá','description'=>'essa é uma descrição', 'body'=>'mUNDO']);
        
        $this->assertEquals('Olá', $post->title);
    }
}
