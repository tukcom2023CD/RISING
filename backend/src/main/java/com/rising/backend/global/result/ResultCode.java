package com.rising.backend.global.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResultCode {

    //USER
    USER_NOT_LOGIN(201, "로그인 필요"),

    //POST
    POST_CREATE_SUCCESS(201, "게시글 등록 성공"),



    //COMMENT
    COMMENT_CREATE_SUCCESS(201, "댓글 등록 성공");

    private final int status;
    private final String message;
}
