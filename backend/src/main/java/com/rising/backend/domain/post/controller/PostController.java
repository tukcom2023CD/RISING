package com.rising.backend.domain.post.controller;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.domain.Session;
import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.service.PostService;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.annotation.LoginRequired;
import com.rising.backend.global.annotation.LoginUser;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.rising.backend.domain.post.dto.PostDto.PostCreateRequest;


@Tag(name = "POST API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/posts")
@Slf4j
public class PostController {

    private final PostService postService;

    @PostMapping
    @LoginRequired
    public ResponseEntity<ResultResponse> create(
            @RequestBody PostCreateRequest createRequest,
            @Parameter(hidden = true) @LoginUser User loginUser ) {

        postService.createPost(createRequest, loginUser);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_CREATE_SUCCESS));
    }

    @GetMapping
    public ResponseEntity<ResultResponse> getList(@PageableDefault(size = 10, sort = "createdAt", direction = Sort.Direction.DESC) final Pageable pageable) {
        List<PostDto.PostGetListResponse> list = postService.pageList(pageable);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_PAGINATION_SUCCESS, list));
    }

    @LoginRequired
    @PostMapping("{postId}/session")
    public ResponseEntity<ResultResponse> createSession(
            @PathVariable Long postId,
            @Parameter(hidden = true) @LoginUser User loginUser) {
        Post post = postService.findPostById(postId);
        if (!postService.checkIsAuthor(post, loginUser)) {
            return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_NOT_POST_AUTHOR));
        }
        Session session = postService.createSession(post);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.SESSION_CREATE_SUCCESS, session.getUrl()));
    }

    @LoginRequired
    @GetMapping("{postId}/session")
    public ResponseEntity<ResultResponse> getSession(
            @PathVariable Long postId,
            @Parameter(hidden = true) @LoginUser User loginUser) {
        Session session = postService.findSessionByPostId(postId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.SESSION_GET_SUCCESS, session.getUrl()));
    }
}
