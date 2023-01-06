package com.rising.backend.domain.comment.controller;

import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.service.LoginService;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;

@Tag(name = "USER API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comments")
public class CommentController {

    private final LoginService loginService;
    @PostMapping
    public ResponseEntity<ResultResponse> create(@RequestBody CommentDto.CommentCreateRequest createRequest,
                                                 HttpServletRequest request) {
        User user = loginService.getLoginUser(request.getSession(false));

        if (user == null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(URI.create("/login"));
            return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_NOT_LOGIN));
        }
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_CREATE_SUCCESS));
    }
}
