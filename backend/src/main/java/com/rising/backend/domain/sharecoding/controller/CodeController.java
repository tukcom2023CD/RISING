package com.rising.backend.domain.sharecoding.controller;

import com.rising.backend.domain.sharecoding.domain.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import static com.rising.backend.global.constant.RabbitMQ.CODE_EXCHANGE_NAME;
import static com.rising.backend.global.constant.RabbitMQ.CODE_QUEUE_NAME;

@Controller
@RequiredArgsConstructor
@Slf4j
public class CodeController {
    private final RabbitTemplate rabbitTemplate;

    @MessageMapping("/code.message")
    public String  send(Operation operation) {
        rabbitTemplate.convertAndSend(CODE_EXCHANGE_NAME, "code.share", operation);
        return "success!!";
    }

    @RabbitListener(queues = CODE_QUEUE_NAME)
    public void receive(Operation operation) {
        log.info("operation.getText = {}", operation.getText());
    }
}
