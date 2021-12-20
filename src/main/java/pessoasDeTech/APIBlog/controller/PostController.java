package pessoasDeTech.APIBlog.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import pessoasDeTech.APIBlog.DTO.PostDTO;
import pessoasDeTech.APIBlog.services.PostService;

@RestController
@RequestMapping(value = "/post")
public class PostController {

	@Autowired
	private PostService service;
	
	@GetMapping
	ResponseEntity<Page<PostDTO>> ListPaged(
		@PageableDefault(sort = "id", direction = Direction.ASC, page = 0, size = 10) Pageable pageable) {
		
		Page<PostDTO> page = service.listPaged(pageable);
		return ResponseEntity.ok().body(page);
	}
	
	@GetMapping(value = "/data")
	ResponseEntity<Page<PostDTO>> ListData(
		@PageableDefault(sort = "createdAt", direction = Direction.DESC, page = 0, size = 10) Pageable pageable) {
		
		Page<PostDTO> page = service.listPaged(pageable);
		return ResponseEntity.ok().body(page);
	}
	
	@GetMapping(value = "/{id}")
	ResponseEntity<PostDTO> findById(@PathVariable Long id) {
		PostDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<PostDTO> insert(@RequestBody PostDTO postDto) {
		postDto = service.insert(postDto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(postDto.getId()).toUri();
		return ResponseEntity.created(uri).body(postDto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id){
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<PostDTO> update (@PathVariable Long id, @RequestBody PostDTO postDto){
		postDto = service.update(id, postDto);
		return ResponseEntity.ok().body(postDto);
	}
	
}
