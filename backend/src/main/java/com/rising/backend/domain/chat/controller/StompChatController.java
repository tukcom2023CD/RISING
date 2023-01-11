package com.rising.backend.domain.chat.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import static com.rising.backend.domain.chat.dto.MessageDto.ChatMessageDto;

@Controller
@RequiredArgsConstructor
public class StompChatController {

    private final RabbitTemplate rabbitTemplate;

    @MessageMapping(value = "/chat/message/{roomId}")
    public void message(@DestinationVariable Long roomId, ChatMessageDto dto) {
        rabbitTemplate.convertAndSend("/sub/chat/" + roomId, dto);
    }
}
