package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatMessage;
import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.MessageDto;
import com.rising.backend.domain.chat.exception.ChatRoomNotFoundException;
import com.rising.backend.domain.chat.mapper.ChatMessageMapper;
import com.rising.backend.domain.chat.repository.ChatMessageRepository;
import com.rising.backend.domain.chat.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatMessageService {

    private final ChatMessageRepository chatMessageRepository;;
    private final ChatRoomRepository chatRoomRepository;

    private final ChatMessageMapper chatMessageMapper;

    public ChatMessage saveChatMessage(MessageDto.ChatMessageDto msgDto, Long chatRoomId) {

        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(ChatRoomNotFoundException::new);
        ChatMessage msg = chatMessageMapper.toChatMessageEntity(msgDto, chatRoom);

        return chatMessageRepository.save(msg);
    }
    public List<MessageDto.ChatMessageListResponse> getChatMessageList(Long chatRoomId, Pageable page) {
        //TODO:메세지 없을 경우 exception -> 필요 없는지 확인
        List<ChatMessage> messages = chatMessageRepository.findByChatRoom_Id(chatRoomId,page);
        return chatMessageMapper.toDtoList(messages);
    }
}