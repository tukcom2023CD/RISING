package com.rising.backend.global.resolver;

import com.rising.backend.domain.user.service.LoginService;
import com.rising.backend.global.annotation.LoginUser;
import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Component
public class LoginUserArgumentsResolver implements HandlerMethodArgumentResolver {
    //메소드 파라미터를 인자값들에 주입
    private final LoginService loginService;

    private final HttpSession session;

    @Override
    public boolean supportsParameter(MethodParameter methodParameter) {
        //LoginUser어노테이션이 달려있으면 resolver가 지원하는 대상
        return methodParameter.hasParameterAnnotation(LoginUser.class);
    }

    @Override
    public Object resolveArgument(MethodParameter methodParameter, ModelAndViewContainer modelAndViewContainer, NativeWebRequest nativeWebRequest, WebDataBinderFactory webDataBinderFactory) throws Exception {
        return loginService.getLoginUser(session);
    }
}
