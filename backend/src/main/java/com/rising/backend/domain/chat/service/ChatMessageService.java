package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.dto.MessageDto;
import com.rising.backend.domain.chat.mapper.ChatMessageMapper;
import com.rising.backend.domain.chat.repository.ChatMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatMessageService {

    private final ChatMessageRepository chatMessageRepository;
    private final ChatMessageMapper chatMessageMapper;

    public List<MessageDto.ChatMessageListResponse> getChatMessageList(Long chatRoomId, Pageable page) {
        List<ChatMessage> messages = chatMessageRepository.findByChatRoom_Id(chatRoomId,page);
        return chatMessageMapper.toDtoList(messages);
    }
}
