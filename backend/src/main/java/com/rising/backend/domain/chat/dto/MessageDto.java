package com.rising.backend.domain.chat.dto;


import lombok.*;

public class MessageDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    @Builder
    public static class ChatMessageDto {

        private String content;
        private String sender;

    }
}

