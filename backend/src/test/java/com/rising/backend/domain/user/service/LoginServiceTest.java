package com.rising.backend.domain.user.service;

import com.rising.backend.domain.user.exception.LoginRequiredException;
import com.rising.backend.domain.user.repository.UserRepository;
import com.rising.backend.global.constant.Attribute;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockHttpSession;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class LoginServiceTest {

    @InjectMocks //테스트 대상 객체 주입
    LoginService loginService;

    @Mock
    private UserRepository userRepository;

    private MockHttpSession httpSession;


    // 테스트 전에 session 생성 - 실제 서버를 구동하지 않으므로 필요
    @BeforeEach
    public void setup() {
        httpSession = new MockHttpSession();
    }

    @Test
    @DisplayName("로그인시 세션에 id가 등록되고, 해당 id를 가지고 get했을 경우 userId가 반환된다.")
    public void 로그인() {
        //로그인 서비스 내 동작이 session동작밖에 없어서 Mockr이 아닌 MockHttpSession을 사용함

        // given
        Long userId = 1L;

        // when
        loginService.login(userId, httpSession);

        // then
        assertEquals(userId, httpSession.getAttribute(Attribute.USER_ID));
    }

    @Test
    @DisplayName("로그인하지 않고 로그아웃한 경우, LoginRequired 익셉션이 발생한다.")
    public void logoutWithoutLogin() {
        // given
        Long userId = 1L;

        // when, then
        Assertions.assertThrows(LoginRequiredException.class, () -> {
            loginService.logout(httpSession);
        });
    }


    @Test
    @DisplayName("로그인하지 않았는데 getLoginUser할 경우 LoginRequiredException이 발생한다.")
    public void getLoginUserBeforeLogin() {
        // given
        Long userId = 1L;

        // when, then
        Assertions.assertThrows(LoginRequiredException.class, () -> {
            loginService.getLoginUser(httpSession);
        });
    }
}