package com.rising.backend.domain.chat.dto;

import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.UserDto;
import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;

public class ChatRoomDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    @Builder
    public static class ChatRoomResponse {

        @NotEmpty
        Long roomId;

        UserDto.UserChatRoomResponse mentee;

        UserDto.UserChatRoomResponse mentor;

        PostDto.PostChatRoomResponse post;
    }
}
