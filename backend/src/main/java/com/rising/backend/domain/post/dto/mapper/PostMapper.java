package com.rising.backend.domain.post.dto.mapper;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.dto.request.PostCreateRequestDto;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PostMapper {

    private final PostRepository postRepository;
    private final UserService userService;

    public Post toPostEntity(PostCreateRequestDto dto) {
        return Post.builder()
                .user(userService.getUser(dto.getUserId()))
                .content(dto.getContent())
                .title(dto.getTitle())
                .memo(null)
                .videoUrl(null)
                .type(dto.getType()).build();
    }
}
