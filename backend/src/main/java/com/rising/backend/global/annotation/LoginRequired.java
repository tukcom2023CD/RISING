package com.rising.backend.global.annotation;

import java.lang.annotation.*;

@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
//로그인이 필요한지 체크
public @interface LoginRequired {}
