package com.rising.backend.domain.user.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
public class UserDto {

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @Getter
    public static class UserCreateRequest {
        @NotEmpty
        @Length(min = 2, max = 20)
        private String username;

        @NotEmpty
        @Length(min = 4, max = 20)
        private String password;

        @NotEmpty
        private String name;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @Getter
    public static class UserLoginRequest {

        @NotEmpty
        private String username;

        @NotEmpty
        private String password;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @Getter
    public static class UserChatRoomResponse {

        @NotNull
        private Long userId;

        @NotEmpty
        private String name;

        private String profileUrl;
    }
}
