package com.rising.backend.domain.chat.controller;

import com.rising.backend.domain.chat.service.ChatRoomService;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.annotation.LoginRequired;
import com.rising.backend.global.annotation.LoginUser;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "CHAT-ROOM API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/chatrooms")
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    @LoginRequired
    @PostMapping("/{postId}")
    public ResponseEntity<ResultResponse> getSession(
            @PathVariable Long postId,
            @Parameter(hidden = true) @LoginUser User loginUser) {

        chatRoomService.createChatRoom(postId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.CHATROOM_CREATE_SUCCESS));
    }
}
