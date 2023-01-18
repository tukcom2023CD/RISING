package com.rising.backend.global.config;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static com.rising.backend.global.constant.RabbitMQ.*;

@Configuration
@EnableRabbit
@RequiredArgsConstructor
public class RabbitConfig {

    private final CachingConnectionFactory cachingConnectionFactory;
    //Queue 등록
    @Bean
    public Queue chatQueue() {
        return new Queue(CHAT_QUEUE_NAME, true);
    }

    @Bean
    public Queue codeQueue() { return new Queue(CODE_QUEUE_NAME, true);}

    //Exchange 등록
    @Bean
    public TopicExchange exchange() {
        return new TopicExchange(EXCHANGE_NAME);
    }

    //Exchange - chat Queue 바인딩
    @Bean
    public Binding binding(Queue chatQueue, TopicExchange exchange) {
        return  BindingBuilder.bind(chatQueue).to(exchange).with(CHAT_ROUTING_KEY);
    }

    //Exchange - code Queue 바인딩
    @Bean
public Binding codeBinding(Queue codeQueue, TopicExchange exchange) {
        return  BindingBuilder.bind(codeQueue).to(exchange).with(CODE_ROUTING_KEY);
    }

    // 바이트-자바 Object간 변환
    @Bean
    public RabbitTemplate rabbitTemplate(){
        RabbitTemplate rabbitTemplate = new RabbitTemplate(cachingConnectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }

    @Bean
    MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }
}
