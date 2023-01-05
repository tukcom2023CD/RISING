package com.rising.backend.domain.user.service;

import com.rising.backend.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final HttpSession httpSession;
    private final UserService userService;

    public static final String USER_ID = "USER_ID";

    public void login(Long id) {
        httpSession.setAttribute(USER_ID, id);
    }

    public void logout() {
        httpSession.removeAttribute(USER_ID);
    }

    public boolean checkPassword(String username, String checkPassword) {
        User member = userService.findUserByUsername(username);
        String realPassword = member.getPassword();
//        boolean matches = encoder.matches(checkPassword, realPassword);
//        return matches;
    }

    public User getLoginUser() {
        Long memberId = (Long) httpSession.getAttribute(USER_ID);
        return userService.findUserById(memberId);
    }

    public Long getLoginUserId() {
        return (Long) httpSession.getAttribute(USER_ID);
    }

    public boolean isUserLogin() {
        return getLoginUser() != null;
    }
}
