package com.rising.backend.domain.post.service;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.domain.Session;
import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.mapper.PostMapper;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.rising.backend.domain.post.dto.PostDto.PostCreateRequest;
import static com.rising.backend.domain.post.dto.PostDto.PostGetListResponse;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;

    public Post createPost(PostCreateRequest createRequest, User loginUser) {
        return postRepository.save(postMapper.toPostEntity(createRequest, loginUser));
    }

    public Post findPostById(Long postId) {
        return postRepository.findById(postId).orElseThrow();
    }


    public List<PostGetListResponse> pageList(Pageable pageable) {
        Page<Post> postList = postRepository.findAll(pageable);
        return postMapper.toDtoPageList(postList).getContent();
    }

    public Session createSession(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow();
//        return postRepository.save(postMapper.toSessionEntity(post));
        return null;
    }

    public PostDto.PostDetailResponse getPostDtoById(Long postId) {
        Post post = findPostById(postId);
        return postMapper.toPostDto(post);
    }

    public List<PostDto.PostDetailResponse> getPostListByUserId(Long userId) {
        List<Post> postList = postRepository.findByUserId(userId);
        return postMapper.toDtoList(postList);
    }
}