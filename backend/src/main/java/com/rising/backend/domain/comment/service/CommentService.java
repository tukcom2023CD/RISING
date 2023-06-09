package com.rising.backend.domain.comment.service;

import com.rising.backend.domain.comment.domain.Comment;
import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.comment.mapper.CommentMapper;
import com.rising.backend.domain.comment.repository.CommentRepository;
import com.rising.backend.domain.post.service.PostService;
import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final PostService postService;
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;

    public Comment createComment(CommentDto.CommentCreateRequest dto, Long userId) {
        Comment entity = commentMapper.toCommentEntity(dto, userId);
        return commentRepository.save(entity);
    }

    public Comment findByCommentId(Long commentId) {
        try {
            return commentRepository.findById(commentId).orElseThrow();
        } catch (NoSuchElementException e) {
            throw new NotFoundException(ErrorCode.COMMENT_NOT_FOUND);
        }
    }

    public List<Comment> findByParentId(Long commentId) {
        try {
            return commentRepository.findByParentId(commentId);
        } catch (NoSuchElementException e) {
            throw new NotFoundException(ErrorCode.COMMENT_NOT_FOUND);
        }
    }

    public List<CommentDto.CommentListResponse> findByPostId(Long postId) {
        postService.findPostById(postId);
        List<Comment> comments = commentRepository.findCommentsByPostId(postId);
        return comments.stream().map(c -> commentMapper.toCommentDto(c, findChildrenByParentId(c.getId())))
                .collect(Collectors.toList());
    }

    public List<CommentDto.CommentListResponse> findChildrenByParentId(Long parentId) {
        List<Comment> comments = findByParentId(parentId);
        return comments.stream().map(c -> commentMapper.toCommentDto(c, null))
                .collect(Collectors.toList());
    }

    public void deleteCommentById(Long commentId) {
        List<Comment> comments = findByParentId(commentId);
        if (comments != null) {
            for (Comment comment : comments) {
                commentRepository.deleteById(comment.getId());
            }
        }
        commentRepository.deleteById(commentId);
    }
}
