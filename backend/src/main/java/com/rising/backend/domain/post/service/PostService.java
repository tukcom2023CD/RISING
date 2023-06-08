package com.rising.backend.domain.post.service;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.domain.Tag;
import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.post.mapper.PostMapper;
import com.rising.backend.domain.post.repository.PostRepository;
import com.rising.backend.domain.post.repository.TagRepository;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.NotFoundException;
import com.rising.backend.global.util.UuidConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import static com.rising.backend.domain.post.dto.PostDto.PostCreateRequest;
import static com.rising.backend.domain.post.dto.PostDto.PostGetListResponse;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;
    private final UuidConverter uuidConverter;
    private final TagRepository tagRepository;

    public Post createPost(PostCreateRequest createRequest, User loginUser) {
        Post postEntity = postMapper.toPostEntity(createRequest, loginUser);
        List<Tag> tags = createRequest.getTags().stream().map(t -> getTagByContent(t))
                .collect(Collectors.toList());
        postEntity.setTags(tags);
        return postRepository.save(postEntity);
    }

    public Post findPostById(Long postId) {
        try {
            return postRepository.findById(postId).orElseThrow();
        } catch (NoSuchElementException e) {
            throw new NotFoundException(ErrorCode.POST_NOT_FOUND);
        }
    }

    public boolean checkIsAuthor(Post post, User user) {
        User userofPost = post.getUser();
        return userofPost.getId().equals(user.getId());
    }

    public List<PostGetListResponse> pageList(Pageable pageable) {
        Page<Post> postList = postRepository.findAll(pageable);
        return postMapper.toDtoPageList(postList).getContent();
    }

    public String getSessionUrl(Long postId, User user) {
        Post post = findPostById(postId);
        if (!checkIsAuthor(post, user)) {
            return null;
        }

        return post.getSessionUrl();
    }

    public PostDto.PostDetailResponse getPostDtoById(Long postId) {
        Post post = findPostById(postId);

        List<String> tags = postMapper.TagtoString(post.getTag());
        return postMapper.toPostDto(post, tags);
    }

    public List<PostDto.PostGetListResponse> getPostListByUserId(Long userId) {
        List<Post> postList = postRepository.findByUserId(userId);
        return postMapper.toDtoList(postList);
    }

    public Tag getTagByContent(String content) {
        return tagRepository.findByContent(content);
    }

    public void deletePostById(Long postId) {
        postRepository.deleteById(postId);
    }

    public void updatePost(Long postId, PostDto.PostUpdateRequest updateRequest) {
        Post post = findPostById(postId);

        List<Tag> tags = updateRequest.getTags().stream().map(t -> getTagByContent(t))
                .collect(Collectors.toList());

        post.setTitle(updateRequest.getTitle());
        post.setContent(updateRequest.getContent());
        post.setTags(tags);
    }

    public void solve(Long postId, String solvedCode) {
        Post post = findPostById(postId);
        post.setSolved(); //멘토링 완료
        post.setSolvedCode(solvedCode);
    }
}