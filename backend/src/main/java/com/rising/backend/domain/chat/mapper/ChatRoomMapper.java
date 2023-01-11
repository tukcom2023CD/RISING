package com.rising.backend.domain.chat.mapper;

import com.rising.backend.domain.chat.domain.ChatRoom;
import com.rising.backend.domain.post.domain.Post;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ChatRoomMapper {

    public ChatRoom toChatRoomEntity(Post post) {
        return ChatRoom.builder()
                .post(post)
                .build();
    }
}
