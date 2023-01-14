package com.rising.backend.domain.chat.dto;


import lombok.*;

import java.time.LocalDateTime;

public class MessageDto {

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    @Builder
    public static class ChatMessageDto {

        private String content;
        private String sender;

    }

    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access =  AccessLevel.PRIVATE)
    @Getter
    @Builder
    public static class ChatMessageListResponse {

        private String sender;
        private String message;
        private LocalDateTime sendDate;

    }

}

