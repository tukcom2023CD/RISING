package com.rising.backend.domain.user.service;

import com.rising.backend.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

import static com.rising.backend.global.constant.Attribute.USER_ID;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

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

    public User getLoginUser(HttpSession session) {
        Long memberId = (Long) session.getAttribute(USER_ID);
        return userService.findUserById(memberId);
    }

    public Long getLoginUserId(HttpSession session) {
        return (Long) session.getAttribute(USER_ID);
    }

    public boolean isUserLogin(HttpSession session) {
        return getLoginUser(session) != null;
    }
}
