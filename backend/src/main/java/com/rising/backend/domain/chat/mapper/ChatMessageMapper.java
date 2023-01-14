package com.rising.backend.domain.chat.mapper;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.MessageDto;
import org.springframework.stereotype.Component;

import static java.time.LocalDateTime.now;

@Component
public class ChatMessageMapper {
    public ChatMessage toChatMessageEntity(MessageDto.ChatMessageDto msgDto, ChatRoom chatRoom) {

        ChatMessage msg = ChatMessage.builder()
                .chatRoom(chatRoom)
                .sender(msgDto.getSender())
                .message(msgDto.getContent())
                .sendDate(now())
                .build();

        return msg;
    }
}