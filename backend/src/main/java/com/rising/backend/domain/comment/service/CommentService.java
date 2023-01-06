package com.rising.backend.domain.comment.service;

import com.rising.backend.domain.comment.domain.Comment;
import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.comment.mapper.CommentMapper;
import com.rising.backend.domain.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    public Comment createComment(CommentDto.CommentCreateRequest dto, Long userId) {
        Comment entity = commentMapper.toCommentEntity(dto, userId);
        return commentRepository.save(entity);
    }
}
