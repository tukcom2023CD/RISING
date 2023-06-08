package com.rising.backend.domain.post.repository;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.domain.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByUserId(Long userId);

    List<Tag> findTagById(Long id);
    Page<Post> findAll(Specification<Post> spec, Pageable pageable);
}
