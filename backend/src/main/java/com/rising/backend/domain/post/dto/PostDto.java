package com.rising.backend.domain.post.dto;

import com.rising.backend.domain.post.domain.PostType;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

public class PostDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class PostCreateRequest {

        @NotEmpty
        @Length(max = 100)
        private String title;

        @NotEmpty
        private String content;

        @NotEmpty
        private PostType type;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class PostGetListResponse {
        private Long id;

        private String title;

        @NotEmpty
        private String content;

        @NotEmpty
        private PostType type;
    }

    public static class PostDetailResponse {
        private Long userId;
        private String content; //추후 사진 삽입 가능하도록 수정
        private String memo;
        private String videoUrl;
        private PostType type;
    }
}
