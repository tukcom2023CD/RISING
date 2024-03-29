package com.rising.backend.domain.chat.service;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.ChatRoomDto;
import com.rising.backend.domain.chat.exception.ChatRoomCreationFailedException;
import com.rising.backend.domain.chat.exception.ChatRoomNotFoundException;
import com.rising.backend.domain.chat.mapper.ChatRoomMapper;
import com.rising.backend.domain.chat.repository.ChatRoomRepository;
import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;


@Service
@RequiredArgsConstructor
@Slf4j
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;
    private final PostRepository postRepository;
    private final ChatRoomMapper chatRoomMapper;

    public ChatRoom createChatRoom(Long postId, User mentor) {
        Post post = postRepository.findById(postId).orElseThrow();

        //채팅 신청 기록이 있을 경우 생성 실패
        if(isUserChatted(mentor.getId())) {
            log.error("이미 채팅 기록이 있음 -> 채팅방으로 리다이렉트시키면 좋을듯");
            throw new RuntimeException(); // 추후 수정
        }
        
        if(isUserPostCreated(mentor.getId(), post.getUser().getId())) {
            throw new ChatRoomCreationFailedException();
        }

        return chatRoomRepository.save(chatRoomMapper.toChatRoomEntity(post, mentor));
    }

    public List<ChatRoomDto.ChatRoomResponse> findMenteeChatRoom(Long menteeId) {
        //TODO: 예외처리 필요 없는지 확인
        List<ChatRoom> chatRooms = chatRoomRepository.findByMentee_Id(menteeId);
        List<ChatRoomDto.ChatRoomResponse> chatRoomsDto = chatRoomMapper.toChatRoomDtoList(chatRooms);
        return chatRoomsDto;
    }


    public List<ChatRoomDto.ChatRoomResponse> findMentorChatRoom(Long mentorId) {
        List<ChatRoom> chatRooms = chatRoomRepository.findByMentor_Id(mentorId);
        //if(chatRooms.isEmpty()) throw new ChatRoomNotFoundException();
        List<ChatRoomDto.ChatRoomResponse> chatRoomsDto = chatRoomMapper.toChatRoomDtoList(chatRooms);
        return chatRoomsDto;
    }

    public boolean isUserChatted(Long userId) {
        return false; // 이후 리팩토링시 수정
    }

    //TODO: 리팩토링시 함께 수정
    public boolean isUserPostCreated(Long userId, Long postUserId) {
        return Objects.equals(postUserId, userId);
    }

    public void deleteChatRoom(Long chatRoomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(ChatRoomNotFoundException::new);
        chatRoomRepository.delete(chatRoom);
    }
}
