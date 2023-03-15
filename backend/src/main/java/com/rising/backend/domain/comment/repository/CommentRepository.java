package com.rising.backend.domain.comment.repository;

import com.rising.backend.domain.comment.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {


    @Query("SELECT c FROM Comment c WHERE c.parentId is null and c.post.id = ?1 ORDER BY c.createdAt ASC")
    List<Comment> findCommentsByPostId(Long postId);

    @Query("SELECT c FROM Comment c WHERE c.parentId = ?1 ORDER BY c.createdAt ASC")
    List<Comment> findChildrenComments(Long parentId);

    List<Comment> findByParentId(Long parentId);

    void deleteAllByParentId(Long parentId);

    Long countByPost_Id(Long postId);

}
