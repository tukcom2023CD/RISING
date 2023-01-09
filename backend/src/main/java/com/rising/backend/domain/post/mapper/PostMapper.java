package com.rising.backend.domain.post.mapper;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import static com.rising.backend.domain.post.dto.PostDto.*;

@Component
@RequiredArgsConstructor
public class PostMapper {
    private final UserService userService;

    public Post toPostEntity(PostCreateRequest postCreate, User loginUser) {
        return Post.builder()
                .user(loginUser)
                .content(postCreate.getContent())
                .title(postCreate.getTitle())
                .memo(null)
                .videoUrl(null)
                .type(postCreate.getType()).build();
    }

    public Page<PostGetListResponse> toDtoList(Page<Post> studyList) {
        return studyList.map(this::toPostListResponse);
    }

    public PostGetListResponse toPostListResponse(Post post) {
        return PostDto.PostGetListResponse.builder()
                .id(post.getId())
                .content(post.getContent())
                .title(post.getTitle())
                .type(post.getType())
                .build();
    }
}
