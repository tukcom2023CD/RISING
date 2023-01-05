package com.rising.backend.domain.post.mapper;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PostMapper {

    private final PostRepository postRepository;
    private final UserService userService;

    public Post toPostEntity(PostDto.PostCreateRequest postCreate) {
        return Post.builder()
                .user(userService.findUserById(postCreate.getUserId()))
                .content(postCreate.getContent())

                .title(postCreate.getTitle())
                .memo(null)
                .videoUrl(null)
                .type(postCreate.getType()).build();
    }
}
