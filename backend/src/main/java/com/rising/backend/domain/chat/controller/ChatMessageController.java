package com.rising.backend.domain.chat.controller;

import com.rising.backend.domain.chat.dto.MessageDto;
import com.rising.backend.domain.chat.service.ChatMessageService;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "CHAT-MESSAGE API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/chatmessages")
public class ChatMessageController {

    private final ChatMessageService chatMessageService;

    @GetMapping("/{chatRoomId}")
    public ResponseEntity<ResultResponse> getMessages(@PathVariable Long chatRoomId,
                                                      @PageableDefault(size = 10, sort = "sendDate", direction = Sort.Direction.DESC) final Pageable pageable) {
        List<MessageDto.ChatMessageListResponse> messages = chatMessageService.getChatMessageList(chatRoomId, pageable);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.CHATMESSAGE_FIND_SUCCESS, messages));
    }
}
