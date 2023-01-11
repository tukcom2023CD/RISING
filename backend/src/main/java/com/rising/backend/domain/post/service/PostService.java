package com.rising.backend.domain.post.service;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.mapper.PostMapper;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.util.UuidConverter;
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
    private final UuidConverter uuidConverter;

    public Post createPost(PostCreateRequest createRequest, User loginUser) {
        return postRepository.save(postMapper.toPostEntity(createRequest, loginUser));
    }

    public Post findPostById(Long postId) {
        return postRepository.findById(postId).orElseThrow();
    }

    public boolean checkIsAuthor(Post post, User user) {
        User userofPost = post.getUser();
        return userofPost.getId().equals(user.getId());
    }

    public List<PostGetListResponse> pageList(Pageable pageable) {
        Page<Post> postList = postRepository.findAll(pageable);
        return postMapper.toDtoList(postList).getContent();
    }

    public String getSessionUrl(Long postId, User user) {
        Post post = findPostById(postId);
        if (!checkIsAuthor(post, user)) {
            return null;
        }

        return post.getSessionUrl();
    }

}