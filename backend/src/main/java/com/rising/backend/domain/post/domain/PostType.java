package com.rising.backend.domain.post.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum PostType {
    QUESTION,
    MENTORING;

    @JsonCreator
    public static PostType from(String s) {
        return PostType.valueOf(s.toUpperCase());
    }
}
