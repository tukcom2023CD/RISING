package com.rising.backend.domain.sharecoding.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import static com.rising.backend.global.constant.RabbitMQ.CODE_EXCHANGE_NAME;

@Controller
@RequiredArgsConstructor
public class CodeController {
    private final RabbitTemplate template;


    @MessageMapping("/greeting")
    @GetMapping("/greeting")
    public String send() {
        template.convertAndSend(CODE_EXCHANGE_NAME, "room." + 1, "hello");
        return "Success!!!";
    }
}
