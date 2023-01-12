package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.mapper.ChatRoomMapper;
import com.rising.backend.domain.chat.repository.ChatRoomRepository;
import com.rising.backend.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;
    private final ChatRoomMapper chatRoomMapper;
    private final PostRepository postRepository;

    public ChatRoom createChatRoom(Long postId) {
        return chatRoomRepository.save(chatRoomMapper.toChatRoomEntity(
                postRepository.findById(postId).orElseThrow()));
    }

}
