package com.rising.backend.domain.post.controller;

import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.dto.PostDto.PostUpdateRequest;
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
    @GetMapping("/{postId}/session")
    public ResponseEntity<ResultResponse> getSession(
            @PathVariable Long postId,
            @Parameter(hidden = true) @LoginUser User loginUser) {
        String sessionUrl = postService.getSessionUrl(postId, loginUser);

        if (sessionUrl == null) {
            return ResponseEntity.ok(ResultResponse.of(ResultCode.USER_NOT_POST_AUTHOR));
        }

        return ResponseEntity.ok(ResultResponse.of(ResultCode.SESSION_GET_SUCCESS, sessionUrl));
    }

    @GetMapping("/{postId}")
    public ResponseEntity<ResultResponse> getPostById(@PathVariable Long postId) {
        PostDto.PostDetailResponse post = postService.getPostDtoById(postId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_FIND_SUCCESS, post));
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<ResultResponse> delete(@PathVariable Long postId) {
        postService.deletePostById(postId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_DELETE_SUCCESS));
    }

    @GetMapping("/mypages/{userId}")
    public ResponseEntity<ResultResponse> getPostListByUserId(@PathVariable Long userId) {
        List<PostDto.PostGetListResponse> postList = postService.getPostListByUserId(userId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POSTLIST_FIND_BY_USERID_SUCCESS, postList));
    }

    @PutMapping("/{postId}")
    public ResponseEntity<ResultResponse> update(
            @PathVariable Long postId,
            @RequestBody PostUpdateRequest updateRequest) {
            postService.updatePost(postId, updateRequest);
            return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_UPDATE_SUCCESS));

    }

    //멘토링 종료
    @PutMapping("/{postId}/solve")
    public ResponseEntity<ResultResponse> solve(
            @PathVariable Long postId,
            @RequestBody String solvedCode) {
        postService.solve(postId, solvedCode);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.POST_SOLVED));

    }



}
