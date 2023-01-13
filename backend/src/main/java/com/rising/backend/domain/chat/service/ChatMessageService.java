package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.dto.MessageDto;
import com.rising.backend.domain.chat.mapper.ChatMessageMapper;
import com.rising.backend.domain.chat.repository.ChatMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatMessageService {

    private final ChatMessageRepository chatMessageRepository;;

    private final ChatMessageMapper chatMessageMapper;


    public ChatMessage saveChatMessage(MessageDto.ChatMessageDto msgDto) {
        ChatMessage msg = chatMessageMapper.toChatMessageEntity(msgDto);
        return chatMessageRepository.save(msg);
    }
}
