package com.rising.backend.domain.post.service;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.dto.PostRequest;
import com.rising.backend.domain.post.mapper.PostMapper;
import com.rising.backend.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;

    public Post createPost(PostRequest.CreateDto dto) {
        return postRepository.save(postMapper.toPostEntity(dto));
    }
}
