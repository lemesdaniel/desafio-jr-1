package pessoasDeTech.APIBlog.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import pessoasDeTech.APIBlog.DTO.PostDTO;
import pessoasDeTech.APIBlog.service.PostService;

@RestController
@RequestMapping(value = "/post")
public class PostController {

	@Autowired
	private PostService service;
	
	@GetMapping
	ResponseEntity<Page<PostDTO>> ListPaged(Pageable pageable) {
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
	
	
}
