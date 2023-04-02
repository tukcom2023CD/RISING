package com.rising.backend.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

/** {주체}_{이유} message 는 동사 명사형으로 마무리 */
@Getter
@AllArgsConstructor
public enum ErrorCode {
  // Global
  INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "G001", "서버 오류"),
  INPUT_INVALID_VALUE(HttpStatus.BAD_REQUEST, "G002", "잘못된 입력"),


  // 도메인 - Post
  POST_NOT_FOUND(HttpStatus.NOT_FOUND, "P001", "해당 게시글 찾을 수 없음"),
  ;

  private final HttpStatus status;
  private final String code;
  private final String message;
}
