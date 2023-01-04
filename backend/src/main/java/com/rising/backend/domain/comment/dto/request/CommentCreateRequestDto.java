package com.rising.backend.domain.comment.dto.request;

import lombok.Getter;

@Getter
public class CommentCreateRequestDto {

    private Long postId;

    private Long userId;

    private String content;

    private Long parentId;

}
