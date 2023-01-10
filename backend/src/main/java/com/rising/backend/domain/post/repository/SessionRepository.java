package com.rising.backend.domain.post.repository;

import com.rising.backend.domain.post.domain.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SessionRepository extends JpaRepository<Session, Long> {
    Optional<Session> findByPost_Id(Long postId);
}
