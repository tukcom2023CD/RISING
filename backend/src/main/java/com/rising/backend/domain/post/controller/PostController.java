package com.rising.backend.domain.post.controller;

import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.service.PostService;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "POST API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/posts")
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<ResultResponse> create(@RequestBody PostDto.PostCreateRequest createRequest) {
        postService.createPost(createRequest);

        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_CREATE_SUCCESS));
    }

}
