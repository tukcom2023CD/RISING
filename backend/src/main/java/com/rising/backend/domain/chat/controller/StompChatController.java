package com.rising.backend.domain.chat.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import static com.rising.backend.domain.chat.dto.MessageDto.ChatMessageDto;

@Controller
@RequiredArgsConstructor
@Slf4j
public class StompChatController {

//    private final RabbitTemplate rabbitTemplate;
    private final SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping(value = "/chat/{roomId}")
    public void message(@DestinationVariable Long roomId, ChatMessageDto dto) {
//        rabbitTemplate.convertAndSend("/sub/chat/" + roomId, dto);
        simpMessagingTemplate.convertAndSend("/sub/chat/" + roomId, dto);
        log.info(dto.getContent());
    }
}
