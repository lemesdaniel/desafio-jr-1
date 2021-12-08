package com.desafio.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafio.demo.entities.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>{

}
