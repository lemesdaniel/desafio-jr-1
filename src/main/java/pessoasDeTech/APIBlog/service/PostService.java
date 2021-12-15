package pessoasDeTech.APIBlog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pessoasDeTech.APIBlog.repositories.PostRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository repository;
	
	
}
