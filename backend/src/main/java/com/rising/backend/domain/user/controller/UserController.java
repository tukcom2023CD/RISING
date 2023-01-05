package com.rising.backend.domain.user.controller;


import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.UserRequest;
import com.rising.backend.domain.user.service.LoginService;
import com.rising.backend.domain.user.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Tag(name = "USER API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;
    private final LoginService loginService;

    @PostMapping
    public ResponseEntity<String> registration(@RequestBody @Valid UserRequest.CreateDto createRequest) {
        if (userService.isDuplicatedUsername(createRequest.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("회원 아이디 중복");
        }

        User entity = userService.register(createRequest);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("사용자 등록 성공");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid UserRequest.LoginDto loginRequest, HttpServletRequest request) {

        User member = userService.findUserByUsername(loginRequest.getUsername());
        if (!loginService.checkPassword(member.getUsername(), loginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("아이디 또는 비밀번호가 일치하지 않습니다.");
        }

        loginService.login(member.getId(), request.getSession());

        return ResponseEntity.status(HttpStatus.OK)
                .body("로그인 성공");
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null){
            loginService.logout(session);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body("로그아웃 성공");
    }

}
