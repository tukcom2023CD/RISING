package com.rising.backend.domain.user.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @Getter
    public static class CreateDto {
        @NotEmpty
        @Length(min = 2, max = 20)
        private String username;

        @NotEmpty
        @Length(min = 4, max = 20)
        private String password;

        @NotEmpty
        private String name;
    }


}
