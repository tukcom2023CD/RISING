package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.ChatRoomDto;
import com.rising.backend.domain.chat.mapper.ChatRoomMapper;
import com.rising.backend.domain.chat.repository.ChatRoomRepository;
import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.UserDto;
import com.rising.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;
    private final PostRepository postRepository;
    private final ChatRoomMapper chatRoomMapper;

    public ChatRoom createChatRoom(Long postId, User mentor) {
        Post post = postRepository.findById(postId).orElseThrow();

        return chatRoomRepository.save(chatRoomMapper.toChatRoomEntity(post, mentor));
    }

    public List<ChatRoomDto.ChatRoomResponse> findMenteeChatRoom(Long menteeId) {

        List<ChatRoom> chatRooms = chatRoomRepository.findByMentee_Id(menteeId);
        List<ChatRoomDto.ChatRoomResponse> chatRoomsDto = chatRoomMapper.toMenteeChatRoomEntity(chatRooms);
        return chatRoomsDto;
    }
    public boolean isUserChatted(Long userId) {
        return false; // 수정
    }

}
