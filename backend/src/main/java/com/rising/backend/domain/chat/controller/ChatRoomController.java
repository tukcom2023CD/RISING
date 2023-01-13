package com.rising.backend.domain.chat.controller;

import com.rising.backend.domain.chat.domain.ChatRoom;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

        //채팅 신청 기록이 있을 경우 생성 실패
        if(chatRoomService.isUserChatted(loginUser.getId())) {
            log.error("이미 채팅 기록이 있음 -> 채팅방으로 리다이렉트시키면 좋을듯");
            throw new RuntimeException();
        }

        ChatRoom createdChatRoom = chatRoomService.createChatRoom(postId, loginUser); // loginUser = mentor

        return ResponseEntity.ok(ResultResponse.of(ResultCode.CHATROOM_CREATE_SUCCESS, createdChatRoom));
    }
}
