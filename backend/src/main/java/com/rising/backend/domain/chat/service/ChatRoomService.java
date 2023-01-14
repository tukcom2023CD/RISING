package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.mapper.ChatRoomMapper;
import com.rising.backend.domain.chat.repository.ChatRoomRepository;
import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;
    private final ChatRoomMapper chatRoomMapper;
    private final PostRepository postRepository;

    public ChatRoom createChatRoom(Long postId, User mentor) {
        Post post = postRepository.findById(postId).orElseThrow();

        return chatRoomRepository.save(chatRoomMapper.toChatRoomEntity(post, mentor));
    }

    public boolean isUserChatted(Long userId) {
        return false; // 수정
    }

}
