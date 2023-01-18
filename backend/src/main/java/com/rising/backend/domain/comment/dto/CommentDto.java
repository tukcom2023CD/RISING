package com.rising.backend.domain.comment.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class CommentDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class CommentCreateRequest {
        @NotEmpty
        private Long postId;

        @NotEmpty
        private String content;

        private Long parentId = null;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class CommentListResponse {

        private String content;

        private String user;

        private List<CommentListResponse> children = new ArrayList<>();

        private LocalDateTime createdAt;
    }
}
