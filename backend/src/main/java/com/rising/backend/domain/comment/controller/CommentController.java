package com.rising.backend.domain.comment.controller;

import com.rising.backend.domain.comment.dto.CommentDto;
import com.rising.backend.domain.comment.service.CommentService;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.annotation.LoginRequired;
import com.rising.backend.global.annotation.LoginUser;
import com.rising.backend.global.result.ResultCode;
import com.rising.backend.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "COMMENT API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comments")
public class CommentController {
    private final CommentService commentService;
    @PostMapping
    @LoginRequired
    public ResponseEntity<ResultResponse> create(@RequestBody CommentDto.CommentCreateRequest createRequest,
                                                 @Parameter(hidden = true) @LoginUser User loginUser) {
        commentService.createComment(createRequest, loginUser.getId());
        return ResponseEntity.ok(ResultResponse.of(ResultCode.COMMENT_CREATE_SUCCESS));
    }

    @GetMapping("/{postId}")
    public ResponseEntity<ResultResponse> getComments(@PathVariable Long postId) {
        List<CommentDto.CommentListResponse> comments = commentService.findByPostId(postId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.COMMENT_GET_SUCCESS, comments));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<ResultResponse> delete(@PathVariable Long commentId) {
        commentService.deleteCommentById(commentId);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.COMMENT_CREATE_SUCCESS));
    }
}
