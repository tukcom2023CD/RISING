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

    POST_FIND_SUCCESS(200, "게시글 id로 단일 게시글 조회 성공"),

    POSTLIST_FIND_BY_USERID_SUCCESS(200, "유저 id로 게시글 리스트 조회 성공"),



    //COMMENT
    COMMENT_CREATE_SUCCESS(201, "댓글 등록 성공");

    private final int status;
    private final String message;
}
