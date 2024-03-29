package com.rising.backend.domain.chat.controller;

import com.rising.backend.domain.chat.dto.MessageDto;
import com.rising.backend.domain.chat.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import static com.rising.backend.global.constant.RabbitMQ.EXCHANGE_NAME;
import static com.rising.backend.global.constant.RabbitMQ.CHAT_QUEUE_NAME;

@Controller
@RequiredArgsConstructor
@Slf4j
public class WebSocketChatController {
    private final RabbitTemplate rabbitTemplate;

    private final ChatMessageService chatMessageService;

    @MessageMapping("chat.message.{chatRoomId}") // 클라이언트에서 '/pub' 붙여 메세지 보내는 경로
    public void send(@RequestBody MessageDto.ChatMessageDto msg, @DestinationVariable Long chatRoomId) {

        log.info("chatRoomId = {}", chatRoomId);
        rabbitTemplate.convertAndSend(EXCHANGE_NAME, "chat."+ chatRoomId, msg); //chat.*로 바인딩된 큐로 보냄
        chatMessageService.saveChatMessage(msg, chatRoomId);
    }

    //메세지가 큐에 도착할 때 실행
    @RabbitListener(queues = CHAT_QUEUE_NAME)
    public void receive(MessageDto.ChatMessageDto msg) {
        log.info("message.getText = {}", msg.getContent());
    }
}