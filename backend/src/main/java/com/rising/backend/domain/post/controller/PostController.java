package com.rising.backend.domain.post.controller;

import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.service.PostService;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.annotation.LoginUser;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Tag(name = "POST API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/posts")
@Slf4j
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<ResultResponse> create(
            @RequestBody PostDto.PostCreateRequest createRequest,
            @Parameter(hidden = true) @LoginUser User user ) {
        postService.createPost(createRequest);
        log.info("로그인된 유저: " + user.getName());
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_CREATE_SUCCESS));
    }

}
