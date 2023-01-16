package com.rising.backend.domain.comment.mapper;

import com.rising.backend.domain.comment.domain.Comment;
import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.post.service.PostService;
import com.rising.backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CommentMapper {
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

    public CommentDto.CommentListResponse toCommentDto(Comment comment,
                                                       List<CommentDto.CommentListResponse> children) {
        return CommentDto.CommentListResponse.builder()
                .user(comment.getUser().getName())
                .children(children)
                .content(comment.getContent())
                .createdAt(comment.getCreatedAt())
                .build();
    }


}
