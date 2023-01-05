package com.rising.backend.domain.user.service;

import com.rising.backend.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

    public static final String USER_ID = "USER_ID";

    public void login(Long id, HttpSession session) {
        session.setAttribute(USER_ID, id);
    }

    public void logout(HttpSession session) {
        session.removeAttribute(USER_ID);
        session.invalidate();
    }

    public boolean checkPassword(String username, String checkPassword) {
        User member = userService.findUserByUsername(username);
        String realPassword = member.getPassword();
        return passwordEncoder.matches(checkPassword, realPassword);
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
