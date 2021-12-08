package com.desafio.demo.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.demo.entities.Post;
import com.desafio.demo.repositories.PostRepository;

@RestController
@RequestMapping("/posts")
public class PostResource {

	@Autowired
	private PostRepository repository;
	
	@GetMapping("")
	public List<Post> findAll(){
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Integer id){
		return repository.findById(id)
				.map(obj -> ResponseEntity.ok().body(obj))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public Post create(@RequestBody Post post) {
		return repository.save(post);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable Integer id ,@RequestBody Post post){
		return repository.findById(id)
				.map(obj -> {
					obj.setTitle(post.getTitle());
					obj.setDescription(post.getDescription());
					obj.setBody(post.getBody());
					obj.setCreated_at(post.getCreated_at());
					obj.setUpdate_at(post.getUpdate_at());
					Post updated = repository.save(obj);
					return ResponseEntity.ok().body(updated);
					}).orElse(ResponseEntity.notFound().build());

	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		return repository.findById(id)
				.map(obj -> {
					repository.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}
	
}
