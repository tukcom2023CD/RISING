package com.rising.backend.domain.chat.dto;

import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.user.dto.UserDto;
import lombok.*;

import javax.validation.constraints.NotNull;

public class ChatRoomDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    @Builder
    public static class ChatRoomResponse {

        @NotNull
        Long roomId;

        @NotNull
        UserDto.UserChatRoomResponse mentee;

        @NotNull
        UserDto.UserChatRoomResponse mentor;

        @NotNull
        PostDto.PostChatRoomResponse post;
    }
}
