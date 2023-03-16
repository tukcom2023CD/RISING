package com.rising.backend.global.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResultCode {

    //USER
    USER_NOT_LOGIN(201, "로그인 필요"),
    USER_LOGIN_SUCCESS(200, "로그인 성공"),
    USER_FIND_INFO_SUCCESS(200, "유저 정보 조회 성공"),
    USER_DELETE_SUCCESS(200, "유저 삭제 성공"),


    //POST
    POST_CREATE_SUCCESS(201, "게시글 등록 성공"),

    POST_DELETE_SUCCESS(200, "게시글 삭제 성공"),
    POST_PAGINATION_SUCCESS(200, "게시글 리스트 조회 성공"),
    POST_FIND_SUCCESS(200, "게시글 id로 단일 게시글 조회 성공"),
    POSTLIST_FIND_BY_USERID_SUCCESS(200, "유저 id로 게시글 리스트 조회 성공"),

    //SESSION
    SESSION_GET_SUCCESS(201, "세션 반환 성공"),
    USER_NOT_POST_AUTHOR(400, "사용자가 게시글의 작성자가 아님"),


    //COMMENT
    COMMENT_CREATE_SUCCESS(201, "댓글 등록 성공"),
    COMMENT_GET_SUCCESS(200, "댓글 조회 성공"),
    COMMENT_DELETE_SUCCESS(200, "댓글 삭제 성공"),


    //CHATROOM
    CHATROOM_CREATE_SUCCESS(201, "채팅방 생성 성공"),
    CHATROOM_FIND_BY_MENTEE(200, "로그인된 유저가 멘티인 채팅방 조회 성공"),
    CHATROOM_FIND_BY_MENTOR(200, "로그인된 유저가 멘토인 채팅방 조회 성공"),
    CHATROOM_DELETE_SUCCESS(200, "채팅방 삭제 성공"),

    //CHATMESSAGE
    CHATMESSAGE_FIND_SUCCESS(200, "채팅 메시지 반환 성공");

    private final int status;
    private final String message;
}
