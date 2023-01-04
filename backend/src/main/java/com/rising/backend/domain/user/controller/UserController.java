package com.rising.backend.domain.user.controller;


import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.request.UserCreateRequestDto;
import com.rising.backend.domain.user.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Tag(name = "USER API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<String> registration(@RequestBody @Valid UserCreateRequestDto dto) {
        if (userService.isDuplicatedUsername(dto.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("회원 아이디 중복");
        }

        User entity = userService.register(dto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("사용자 등록 성공");
    }
}
