package com.rising.backend.global.interceptor;

import com.rising.backend.global.annotation.LoginUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import static com.rising.backend.global.constant.Attribute.USER_ID;

@Slf4j
@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws HttpClientErrorException.Unauthorized {

        log.info("로그인 인터셉터 실행");

        HttpSession session = request.getSession();
        Long loginId = (Long)session.getAttribute(USER_ID);

        if (handler instanceof HandlerMethod && ((HandlerMethod) handler).hasMethodAnnotation(LoginUser.class)) {
            if(isEmpty(session) || loginId == null) {
                log.info("미인증 사용자 요청");
                // + 로그인 정보 없을때 처리 (ex.Redirect)
                return false;
            }
        }
        return true; //정상적으로 다음 인터셉터나 컨트롤러 호출
    }
    public boolean isEmpty(HttpSession session) {
        return session == null;
    }
}
