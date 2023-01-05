package com.rising.backend.domain.comment.dto.request;

import lombok.Getter;

@Getter
public class CommentRequest {

    public static class CreateDto {
        private Long postId;

        private Long userId;

        private String content;

        private Long parentId;

    }

}
