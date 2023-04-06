package com.rising.backend.global.interceptor;

import com.rising.backend.domain.user.exception.LoginRequiredException;
import com.rising.backend.domain.user.service.LoginService;
import com.rising.backend.global.annotation.LoginRequired;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
@RequiredArgsConstructor
public class LoginInterceptor implements HandlerInterceptor {

    private final LoginService loginService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws HttpClientErrorException.Unauthorized {

        if (isLoginRequiredMethod(handler) && !loginService.isUserLogin(request.getSession())) {
            throw new LoginRequiredException(); //추후 수정
        }
        return true; //다음 interceptor나 Controller로 넘어감
    }

    private boolean isLoginRequiredMethod(Object handler) {
        return handler instanceof HandlerMethod
                && ((HandlerMethod) handler).hasMethodAnnotation(LoginRequired.class);
    }
}