package com.rising.backend.domain.post.repository;

import com.rising.backend.domain.post.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

    Tag findByContent(String content);
}
