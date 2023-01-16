package com.rising.backend.domain.comment.service;

import com.rising.backend.domain.comment.domain.Comment;
import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.comment.mapper.CommentMapper;
import com.rising.backend.domain.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    public Comment createComment(CommentDto.CommentCreateRequest dto, Long userId) {
        Comment entity = commentMapper.toCommentEntity(dto, userId);
        return commentRepository.save(entity);
    }

    public List<CommentDto.CommentListResponse> findByPostId(Long postId) {
        List<Comment> comments = commentRepository.findCommentsByPostId(postId);
        return comments.stream().map(c -> commentMapper.toCommentDto(c, findChildrenByParentId(c.getId())))
                .collect(Collectors.toList());
    }

    public List<CommentDto.CommentListResponse> findChildrenByParentId(Long parentId) {
        List<Comment> comments = commentRepository.findByParentId(parentId);
        return comments.stream().map(c -> commentMapper.toCommentDto(c, null))
                .collect(Collectors.toList());
    }
}
