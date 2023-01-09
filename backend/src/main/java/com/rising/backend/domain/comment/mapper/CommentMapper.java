package com.rising.backend.domain.comment.mapper;

import com.rising.backend.domain.comment.domain.Comment;
import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.comment.repository.CommentRepository;
import com.rising.backend.domain.post.service.PostService;
import com.rising.backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CommentMapper {

    private final CommentRepository commentRepository;
    private final UserService userService;
    private final PostService postService;

    public Comment toCommentEntity(CommentDto.CommentCreateRequest commentCreate, Long userId) {
        return Comment.builder()
                .content(commentCreate.getContent())
                .user(userService.findUserById(userId))
                .post(postService.findPostById(commentCreate.getPostId()))
                .parentId(commentCreate.getParentId())
                .build();
    }

}
