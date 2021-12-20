package pessoasDeTech.APIBlog.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pessoasDeTech.APIBlog.DTO.PostDTO;
import pessoasDeTech.APIBlog.entities.Post;
import pessoasDeTech.APIBlog.exceptions.ResourceNotFoundException;
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
			Post entity = post.orElseThrow(() -> new ResourceNotFoundException("ID não encontrado"));
			return new PostDTO(entity);
	}
	
	@Transactional
	public PostDTO insert(PostDTO dto) {
		Post post = new Post();
		copyDtoToEntity(dto, post);
		post = repository.save(post);
		return new PostDTO(post);
	}
	
	public void deleteById(Long id) {
		try{
			repository.deleteById(id);
		}catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado =(");
		}
	}
	
	@Transactional
	public PostDTO update(Long id, PostDTO dto) {
		try{
			Post post = repository.getOne(id);
			copyDtoToEntity(dto, post);
			post = repository.save(post);
			return new PostDTO(post);
		}catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("ID Não Encontrado");
		}
	}
	
	private void copyDtoToEntity(PostDTO dto, Post entity) {
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setBody(dto.getBody());
	}

	
}
