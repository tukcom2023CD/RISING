package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.MessageDto;
import com.rising.backend.domain.chat.mapper.ChatMessageMapper;
import com.rising.backend.domain.chat.repository.ChatMessageRepository;
import com.rising.backend.domain.chat.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatMessageService {

    private final ChatMessageRepository chatMessageRepository;;
    private final ChatRoomRepository chatRoomRepository;

    private final ChatMessageMapper chatMessageMapper;

    public ChatMessage saveChatMessage(MessageDto.ChatMessageDto msgDto, Long chatRoomId) {

        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow();
        ChatMessage msg = chatMessageMapper.toChatMessageEntity(msgDto, chatRoom);

        return chatMessageRepository.save(msg);
    }
}