package com.rising.backend.domain.comment.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

public class CommentDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class CommentCreateRequest {
        @NotEmpty
        private Long postId;

        @NotEmpty
        private String content;

        private Long parentId;
    }
}
