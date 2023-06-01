package com.rising.backend.domain.sharecoding.controller;

import com.rising.backend.domain.sharecoding.domain.Operation;
import com.rising.backend.domain.sharecoding.dto.CodingDto;
import com.rising.backend.domain.sharecoding.service.CodeService;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import static com.rising.backend.global.constant.RabbitMQ.CODE_QUEUE_NAME;
import static com.rising.backend.global.constant.RabbitMQ.EXCHANGE_NAME;

@Controller
@RequiredArgsConstructor
@Slf4j
public class CodeController {

    private final RabbitTemplate rabbitTemplate;
    private final CodeService codeService;

    @MessageMapping("code.message.{postId}")
    public void send(@RequestBody Operation operation, @DestinationVariable Long postId) {

        log.info("postId = {}", postId);
        rabbitTemplate.convertAndSend(EXCHANGE_NAME, "code."+ postId, operation); //code.*로 바인딩된 큐로 보냄
    }

    @RabbitListener(queues = CODE_QUEUE_NAME)
    public void receive(Operation operation) {
        log.info("code send success");
    }

    @PostMapping("api/v1/codes")
    public ResponseEntity<ResultResponse> compile(
            @RequestBody CodingDto.CompilerReqeust request) {

        CodingDto.CompilerResponse response = codeService.getCompileResponse(request);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.GET_COMPILE_RESULT, response));
    }

}
