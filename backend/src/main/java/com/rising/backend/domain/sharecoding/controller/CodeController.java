package com.rising.backend.domain.sharecoding.controller;

import com.rising.backend.domain.sharecoding.domain.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import static com.rising.backend.global.constant.RabbitMQ.*;

@Controller
@RequiredArgsConstructor
@Slf4j
public class CodeController {

    private final RabbitTemplate rabbitTemplate;

    @MessageMapping("code.message.{postId}")
    public void send(@RequestBody Operation operation, @DestinationVariable Long postId) {

        log.info("postId = {}", postId);
        rabbitTemplate.convertAndSend(EXCHANGE_NAME, "code."+ postId, operation); //code.*로 바인딩된 큐로 보냄
    }

    @RabbitListener(queues = CODE_QUEUE_NAME)
    public void receive(Operation operation) {
        log.info("code send success");
    }
}
