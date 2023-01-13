package com.rising.backend.domain.sharecoding.controller;

import com.rising.backend.domain.sharecoding.domain.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
@Slf4j
public class CodeController {
    private final RabbitTemplate rabbitTemplate;

    @MessageMapping("/code/message")
    public Operation send(@RequestBody Operation operation) {
        return operation;
    }
}
