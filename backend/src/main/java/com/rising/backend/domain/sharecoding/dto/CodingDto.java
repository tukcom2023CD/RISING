package com.rising.backend.domain.sharecoding.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class CodingDto {
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class CompilerReqeust {
        @NotEmpty
        private String language;

        @NotEmpty
        private String version;

        @NotEmpty
        private String code;

        private String input;
    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class CompilerResponse {

        @NotNull
        private String cpuTime;

        @NotNull
        private String memory;

        @NotNull
        private String output;

        @NotNull
        private LanguageDto language;

    }

    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    public static class LanguageDto {

        @NotNull
        private String id;

        @NotNull
        private int version;

        @NotNull
        private String version_name;

    }
}