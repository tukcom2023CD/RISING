package com.rising.backend.global.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@Getter
@PropertySource("classpath:application-secret.yml")
public class CompileConfig {

    @Value("${compile.key}")
    private String key;

    public static final String COMPILE_API_URL = "https://online-code-compiler.p.rapidapi.com/v1/";
    public static final String COMPILE_API_HOST = "online-code-compiler.p.rapidapi.com";

}
