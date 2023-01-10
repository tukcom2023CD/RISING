package com.rising.backend.domain.sharecoding.controller;

import com.rising.backend.domain.sharecoding.domain.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import static com.rising.backend.global.constant.RabbitMQ.CODE_EXCHANGE_NAME;
import static com.rising.backend.global.constant.RabbitMQ.CODE_QUEUE_NAME;

@Controller
@RequiredArgsConstructor
@Slf4j
public class CodeController {
    private final RabbitTemplate rabbitTemplate;

    @MessageMapping("/code/message/{postId}") //웹소켓으로 들어오는 메세지 발행 요청 처리. 클라이언트는 (/pub)/code/message/10 이런식으로 전송
//    @PostMapping("/code/message{postId}")
    @SendTo("/topic/{postId}")
    public Operation send(@DestinationVariable Long postId, @RequestBody Operation operation) {
        rabbitTemplate.convertAndSend(CODE_EXCHANGE_NAME, "code.share", operation); //클라이언트로 전송
        return operation;
    }

    @RabbitListener(queues = CODE_QUEUE_NAME) //해당 큐에 들어온 메세지 소비
    public void receive(Operation operation) {
        log.info("operation.getText = {}", operation.getText());
    }
}
