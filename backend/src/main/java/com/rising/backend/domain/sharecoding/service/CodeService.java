package com.rising.backend.domain.sharecoding.service;

import com.rising.backend.domain.sharecoding.dto.CodingDto;
import com.rising.backend.global.config.CompileConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

@Service
@RequiredArgsConstructor
@Slf4j
public class CodeService {

    private final CompileConfig compileConfig;
    public CodingDto.CompilerResponse getCompileResponse(CodingDto.CompilerReqeust request) {
        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory(compileConfig.COMPILE_API_URL);

        WebClient webclient = WebClient.builder()
                .uriBuilderFactory(factory)
                .build();

        CodingDto.CompilerResponse responseMono = webclient.post()
                .header("X-RapidAPI-Key", compileConfig.getKey())
                .header("X-RapidAPI-Host", compileConfig.COMPILE_API_HOST)
                .header("content-type", "application/json")
                .bodyValue(request)// await
                .exchangeToMono(response -> {
                    Integer httpStatusCode = response.statusCode().value();
                    HttpStatus httpStatus = HttpStatus.valueOf(httpStatusCode);
                    if (httpStatus.is2xxSuccessful()) {
                        return response.bodyToMono(CodingDto.CompilerResponse.class);
                    } else {
                        log.error("Exception occurred - status: {}, message: {}", httpStatus, httpStatus.getReasonPhrase());
                        throw new RuntimeException();
                    }
                }).block();
        return responseMono;
    }

}
