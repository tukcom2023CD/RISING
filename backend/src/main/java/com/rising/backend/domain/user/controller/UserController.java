package com.rising.backend.domain.user.controller;


import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.UserDto;
import com.rising.backend.domain.user.service.LoginService;
import com.rising.backend.domain.user.service.UserService;
import com.rising.backend.global.annotation.LoginRequired;
import com.rising.backend.global.annotation.LoginUser;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class UserController {

    private final UserService userService;
    private final LoginService loginService;

    @PostMapping
    public ResponseEntity<String> registration(@RequestBody @Valid UserDto.UserCreateRequest createRequest) {
        if (userService.isDuplicatedUsername(createRequest.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("회원 아이디 중복");
        }

        User entity = userService.register(createRequest);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("사용자 등록 성공");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid UserDto.UserLoginRequest loginRequest, HttpServletRequest request) {

        User member = userService.findUserByUsername(loginRequest.getUsername());

        if (!loginService.checkPassword(member.getUsername(), loginRequest.getPassword())) {
            log.info("로그인 정보 일치하지 않음");
            throw new RuntimeException(); //추후 에러 처리 수정
        }
        loginService.login(member.getId(), request.getSession());

        return ResponseEntity.status(HttpStatus.OK)
                .body("로그인 성공");
    }

    @GetMapping("/logout")
    @LoginRequired
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null){
            loginService.logout(session);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body("로그아웃 성공");
    }

    @GetMapping("/info")
    @LoginRequired
    public ResponseEntity<ResultResponse> userInfo(@LoginUser User user) {

        return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_FIND_INFO_SUCCESS,userService.getUserInfo(user)));
    }
    @Operation(summary = "회원 삭제", description = "현재 로그인된 user 정보 soft delete")
    @DeleteMapping()
    @LoginRequired
    public ResponseEntity<ResultResponse> deleteUser(@LoginUser User user) {
        userService.deleteUser(user);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_DELETE_SUCCESS));
    }
}
