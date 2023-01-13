package com.rising.backend.global.constant;

public class RabbitMQ {

    public static final String CHAT_QUEUE_NAME = "chat.queue";
    public static final String CODE_QUEUE_NAME = "code.queue";

    public static final String EXCHANGE_NAME = "rising.exchange"; //추후 변경
    public static final String CHAT_ROUTING_KEY = "chat.*";
    public static final String CODE_ROUTING_KEY = "code.*";

}
