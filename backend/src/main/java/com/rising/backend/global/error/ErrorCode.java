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

  // User 도메인
  EXAMPLE_USER_ERROR(HttpStatus.BAD_REQUEST, "U001", "테스트용 예시 에러코드"),
  USER_LOGIN_REQURED(HttpStatus.UNAUTHORIZED,"U002","로그인 필요"),
  USER_NOT_FOUND(HttpStatus.NOT_FOUND, "U003","해당 유저를 찾을 수 없음"),
  USER_INVALID_PASSWORD(HttpStatus.UNAUTHORIZED, "U004","로그인 정보가 일치하지 않음"),
  USER_NAME_DUPLICATED(HttpStatus.CONFLICT, "U005", "이미 해당 username을 가진 유저가 존재함" ),

  //ChatRoom, ChatMessage 도메인
  CHATROOM_NOT_FOUND(HttpStatus.NOT_FOUND, "CR001", "채팅방이 존재하지 않음"),
  CHATROOM_CREATION_FAILED(HttpStatus.CONFLICT, "CR002", "자신의 글에서 채팅방 생성 불가능"),

  // 도메인 - Post
  POST_NOT_FOUND(HttpStatus.NOT_FOUND, "P001", "해당 게시글 찾을 수 없음"),

  // 도메인 - Comment
  COMMENT_NOT_FOUND(HttpStatus.NOT_FOUND, "P001", "해당 댓글 찾을 수 없음");

  private final HttpStatus status;
  private final String code;
  private final String message;
}
