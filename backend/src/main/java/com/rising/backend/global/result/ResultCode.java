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
    POST_PAGINATION_SUCCESS(200, "게시글 리스트 조회 성공"),

    //SESSION
    SESSION_CREATE_SUCCESS(201, "세션 생성 성공"),
    SESSION_GET_SUCCESS(201, "세션 반환 성공"),
    USER_NOT_POST_AUTHOR(400, "사용자가 게시글의 작성자가 아님"),


    //COMMENT
    COMMENT_CREATE_SUCCESS(201, "댓글 등록 성공");

    private final int status;
    private final String message;
}
