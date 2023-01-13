package com.rising.backend.domain.chat.mapper;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.dto.MessageDto;

import static java.time.LocalDateTime.now;

public class ChatMessageMapper {
    public ChatMessage toChatMessageEntity(MessageDto.ChatMessageDto msgDto) {

        ChatMessage msg = ChatMessage.builder()
                .chatRoom()
                .sender(msgDto.getSender())
                .message(msgDto.getContent())
                .sendDate(now());
    }
}