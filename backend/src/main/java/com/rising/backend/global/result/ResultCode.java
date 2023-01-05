package com.rising.backend.global.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResultCode {

    //USER



    //POST
    POST_CREATE_SUCCESS(201, "게시글 등록 성공");



    //COMMENT


    private final int status;
    private final String message;
}
