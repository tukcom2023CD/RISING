package com.rising.backend.domain.post.dto;

import com.rising.backend.domain.post.domain.PostType;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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

        private List<String> tags = new ArrayList<>();
    }

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class PostUpdateRequest {
        private String title;
        private String content;
        private List<String> tags = new ArrayList<>();
    }

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class SolvedCodeRequest {
        private String solvedCode;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class PostGetListResponse {
        private Long id;

        @NotEmpty
        private String title;

        @NotEmpty
        private String content;

        @NotEmpty
        private PostType type;

        @NotEmpty
        private LocalDate created_at;

        @NotEmpty
        private Long commentCount;

        private List<String> tags;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class PostDetailResponse {
        private Long userId;

        @NotEmpty
        private String title;

        @NotEmpty
        private String content; //추후 사진 삽입 가능하도록 수정

        private Long commentCount;

        private String videoUrl;

        private PostType type;

        private LocalDate created_at;

        private boolean isSolved;

        private String solvedCode;

        private List<String> tags;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class PostChatRoomResponse {

        @NotNull
        private Long postId;

        @NotNull
        private Long userId; //작성자
    }
}
