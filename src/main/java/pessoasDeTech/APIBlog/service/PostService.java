package pessoasDeTech.APIBlog.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pessoasDeTech.APIBlog.DTO.PostDTO;
import pessoasDeTech.APIBlog.entities.Post;
import pessoasDeTech.APIBlog.repositories.PostRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository repository;
	
	@Transactional(readOnly = true)
	public Page<PostDTO> listPaged(Pageable pageable) {
		Page<Post> post = repository.findAll(pageable);
		return post.map(x -> new PostDTO(x));
	}
	
	@Transactional(readOnly = true)
	public PostDTO findById(Long id) {
		Optional<Post> post = repository.findById(id);
		Post entity = post.get();
		return new PostDTO(entity);
	}
	
	
}
