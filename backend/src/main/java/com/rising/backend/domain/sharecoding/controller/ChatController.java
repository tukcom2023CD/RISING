package com.rising.backend.domain.sharecoding.controller;

import com.rising.backend.domain.chat.dto.MessageDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import static com.rising.backend.global.constant.RabbitMQ.CODE_EXCHANGE_NAME;
import static com.rising.backend.global.constant.RabbitMQ.CODE_QUEUE_NAME;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final RabbitTemplate rabbitTemplate;

    @MessageMapping("chat.message.{postId}") // StompConfig에 의해 prefix붙어서 /pub/chat/message가 됨. 이 경로로 메세지 보내면 controller가 실행
    // @SendTo("/topic/code") //구독 경로 - 이렇게 해두면 클라이언트쪽에서 sendto로 명시된 경로를 구독할 때 거기로 흘러들어감
    public String send(@RequestBody MessageDto.ChatMessageDto msg, @DestinationVariable Long postId) {

        //rabbitTemplate.convertAndSend(CODE_EXCHANGE_NAME, "code.share", msg); //code.share을 가지고 큐로 전달 -> code.*로 매핑되게 해놨으면 그 큐로 operation 전달됨
        //rabbitMQ 큐로 들어가는듯

        rabbitTemplate.convertAndSend(CODE_EXCHANGE_NAME, "code."+ postId, msg); //code.*로 바인딩된 큐로 보냄
//        rabbitTemplate.convertAndSend("/sub/chat/message", msg); //code.share을 가지고 큐로 전달 -> code.*로 매핑되게 해놨으면 그 큐로 operation 전달됨
        //topic으로 안하고 이렇게 경로, 메세지 해서 바로 보내면 그냥 저 경로대로 subscribe하면 되는데
        //저 위 코드에서는 그냥 메세지 오는대로 큐에 넣기때문에, 각각이 어느 경로로 subscribe되는지 알 수 없음

        return msg.getContent();
    }

    //메세지가 큐에 도착할 때 실행되는 메소드
    @RabbitListener(queues = CODE_QUEUE_NAME) //단히 소비만 하는 용도. 큐에 들어오는 메세지를 소비하는 소비자가 되겠다는 어노테이션

    public void receive(MessageDto.ChatMessageDto msg) {
        log.info("operation.getText = {}", msg.getContent());
        //

    }
}
