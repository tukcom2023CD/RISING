package com.rising.backend.domain.post.dto;

import com.rising.backend.domain.post.domain.PostType;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

public class PostDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    @Data
    public static class PostCreateRequest {
        @NotEmpty
        private Long userId;

        @NotEmpty
        @Length(max = 100)
        private String title;

        @NotEmpty
        private String content;

        @NotEmpty
        private PostType type;
    }
}
