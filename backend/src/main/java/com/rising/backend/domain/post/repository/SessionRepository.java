package com.rising.backend.domain.post.repository;

import com.rising.backend.domain.post.domain.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {

}
