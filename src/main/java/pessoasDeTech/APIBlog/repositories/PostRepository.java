package pessoasDeTech.APIBlog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import pessoasDeTech.APIBlog.entities.Post;

public interface PostRepository extends JpaRepository<Post, Long>{

}
