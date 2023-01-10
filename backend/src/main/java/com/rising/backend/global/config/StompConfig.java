package com.rising.backend.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class StompConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        registry.addEndpoint("/stomp").setAllowedOriginPatterns("*").withSockJS();
        registry.addEndpoint("/stomp").setAllowedOriginPatterns("*"); //웹소켓 엔드포인트 지정. 클라이언트에서 이 경로로 서버와 handshake / 허용할 origin패턴 지정
    }
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) { // 메세지브로커 활성화
        config.setApplicationDestinationPrefixes("/pub"); //클라이언트에서 발송한 메세지 prefix 자동으로 붙음 / s컨트롤러에서는 이 prefix를 제외한 경로로 mapping하면 됨
        config.enableSimpleBroker("/sub"); //메세지브로커 활성화 / subscribe접두사 설정 - 경로: sub/messagemapping설정경로
    }
}

