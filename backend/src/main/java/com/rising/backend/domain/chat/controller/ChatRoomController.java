package com.rising.backend.domain.chat.controller;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.ChatRoomDto;
import com.rising.backend.domain.chat.service.ChatRoomService;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.annotation.LoginRequired;
import com.rising.backend.global.annotation.LoginUser;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "CHATROOM API")
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/chatrooms")
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    // 채팅하기 버튼 누르면 채팅방 생성
    @LoginRequired
    @PostMapping("/{postId}")
    public ResponseEntity<ResultResponse> createChatRoom (
            @PathVariable Long postId,
            @Parameter(hidden = true) @LoginUser User loginUser) {

        ChatRoom createdChatRoom = chatRoomService.createChatRoom(postId, loginUser); // loginUser = mentor
        if (createdChatRoom == null) {
            return ResponseEntity.ok(ResultResponse.of(ResultCode.CHATROOM_CREATE_SUCCESS, false));
        }

        return ResponseEntity.ok(ResultResponse.of(ResultCode.CHATROOM_CREATE_SUCCESS, createdChatRoom));
    }


    // 현재 로그인된 user가 mentee인 채팅방 조회
    @LoginRequired
    @GetMapping("/mentee")
    public ResponseEntity<ResultResponse> findMenteeChatRoom (
            @Parameter(hidden = true) @LoginUser User loginUser) {

        List<ChatRoomDto.ChatRoomResponse> menteeChatRoom = chatRoomService.findMenteeChatRoom(loginUser.getId());

        return ResponseEntity.ok(ResultResponse.of(ResultCode.CHATROOM_FIND_BY_MENTEE, menteeChatRoom));
    }
}
