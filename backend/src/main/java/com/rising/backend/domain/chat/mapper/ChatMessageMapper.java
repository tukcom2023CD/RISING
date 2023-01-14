package com.rising.backend.domain.chat.mapper;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.dto.MessageDto;

import java.util.List;
import java.util.stream.Collectors;

public class ChatMessageMapper {

    public MessageDto.ChatMessageListResponse toChatMessageDto(ChatMessage message) {
        return MessageDto.ChatMessageListResponse.builder()
                .sender(message.getSender())
                .message(message.getMessage())
                .sendDate(message.getSendDate())
                .build();
    }

    public List<MessageDto.ChatMessageListResponse> toDtoList(List<ChatMessage> messageList) {
        return messageList.stream().map(p -> toChatMessageDto(p))
                .collect(Collectors.toList());
    }
}
