package com.rising.backend.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class StompConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        registry.addEndpoint("/stomp").setAllowedOriginPatterns("*").withSockJS();
        registry.addEndpoint("/stomp").setAllowedOriginPatterns("*"); //클라이언트에서 웹소켓 연결할 때 사용할 API 경로를 설정해주는 메소드.
    }
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.setApplicationDestinationPrefixes("/pub");// 메세지 보낼 때 관련 경로 설정 - 클라이언트가 메세지 보낼 때 앞에 /pub 붙어있으면 broker로 전송됨.
        // ws.send로 지정하는 경로 -> ws.send하면서 /pub/메세지경로 붙이면 해당 경로에 맞는 @MessageMapping 실행됨
//        config.enableSimpleBroker("/sub"); // 메세지 받을 때 관련 경로 설정 - /sub이 앞에 붙은 경우, messageBroker가 잡아서 해당 큐를 구독하고 있는 클라이언트에게 메세지 전달
        // ws.subscribe로 지정하는 경로

        config.setPathMatcher(new AntPathMatcher(".")); //url을 chat/room/3 -> chat.room.3으로 참조하기 위한 설정

         config.enableStompBrokerRelay("/queue", "/topic", "/exchange", "/amq/queue");//subscribe url prefix
    }

}