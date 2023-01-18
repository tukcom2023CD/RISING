package com.rising.backend.domain.chat.mapper;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.chat.dto.ChatRoomDto;
import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.mapper.PostMapper;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ChatRoomMapper {

    private final UserMapper userMapper;
    private final PostMapper postMapper;

    public ChatRoom toChatRoomEntity(Post post, User mentor) {
        return ChatRoom.builder()
                .post(post)
                .mentor(mentor)
                .mentee(post.getUser())
                .build();
    }

    public ChatRoomDto.ChatRoomResponse toChatRoomDto (ChatRoom chatRoom) {
        return ChatRoomDto.ChatRoomResponse.builder()
                .roomId(chatRoom.getId())
                .mentee(userMapper.toUserDto(chatRoom.getMentee()))
                .mentor(userMapper.toUserDto(chatRoom.getMentor()))
                .post(postMapper.toPostChatRoomResponse(chatRoom.getPost()))
                .build();
    }
    public List<ChatRoomDto.ChatRoomResponse> toChatRoomDtoList(List<ChatRoom> chatRooms) {
        return chatRooms.stream().map(r -> toChatRoomDto(r))
                .collect(Collectors.toList());
    }

}
