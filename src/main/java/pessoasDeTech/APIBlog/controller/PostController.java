package pessoasDeTech.APIBlog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
