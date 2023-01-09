package com.rising.backend.domain.sharecoding.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Act {
    ADD,
    DELETE;

    @JsonCreator
    public static Act from(String s) {
        return Act.valueOf(s.toUpperCase());
    }
}
