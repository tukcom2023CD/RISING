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
        registry.addEndpoint("/stomp").setAllowedOriginPatterns("*");//클라이언트에서 웹소켓 연결 경로
    }
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.setApplicationDestinationPrefixes("/pub");//메세지 전송시 prefix
        config.setPathMatcher(new AntPathMatcher("."));
        config.enableStompBrokerRelay("/queue", "/topic", "/exchange", "/amq/queue").setRelayHost("rabbitmq")
                .setClientLogin("rising").setClientPasscode("user").setSystemLogin("rising").setSystemPasscode("user");
    }
}
