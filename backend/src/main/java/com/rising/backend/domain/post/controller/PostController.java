package com.rising.backend.domain.post.controller;

import com.rising.backend.domain.post.dto.request.PostCreateRequestDto;
import com.rising.backend.domain.post.service.PostService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<String> create(@RequestBody PostCreateRequestDto dto) {
        postService.createPost(dto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("글 등록 성공");
    }

}
