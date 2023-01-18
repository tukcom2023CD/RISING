package com.rising.backend.domain.post.mapper;

import com.rising.backend.domain.comment.repository.CommentRepository;
import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.domain.Tag;
import com.rising.backend.domain.post.dto.PostDto;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.util.UuidConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.rising.backend.domain.post.dto.PostDto.PostCreateRequest;
import static com.rising.backend.domain.post.dto.PostDto.PostGetListResponse;

@Component
@RequiredArgsConstructor
public class PostMapper {
    private final UuidConverter uuidConverter;

    private final CommentRepository commentRepository;
    public Post toPostEntity(PostCreateRequest postCreate, User loginUser) {
        return Post.builder()
                .user(loginUser)
                .content(postCreate.getContent())
                .title(postCreate.getTitle())
                .videoUrl(null)
                .sessionUrl(uuidConverter.toBase64(UUID.randomUUID()))
                .type(postCreate.getType()).build();
    }

    public PostDto.PostDetailResponse toPostDto(Post post, List<String> tags) {
        return PostDto.PostDetailResponse.builder()
                .userId(post.getUser().getId())
                .title(post.getTitle())
                .content(post.getContent())
                .videoUrl(post.getVideoUrl())
                .type(post.getType())
                .tags(tags)
                .created_at(post.getCreatedAt().toLocalDate())
                .build();
    }

    public Page<PostGetListResponse> toDtoPageList(Page<Post> studyList) {
        return studyList.map(this::toPostListResponse);
    }

    public List<PostDto.PostGetListResponse> toDtoList(List<Post> postList) {
        return postList.stream().map(p -> toPostListResponse(p))
                .collect(Collectors.toList());
    }

    public PostGetListResponse toPostListResponse(Post post) {
        return PostDto.PostGetListResponse.builder()
                .id(post.getId())
                .content(post.getContent())
                .created_at(post.getCreatedAt().toLocalDate())
                .title(post.getTitle())
                .type(post.getType())
                .tags(TagtoString(post.getTag()))
                .commentCount(commentRepository.countByPost_Id(post.getId()))
                .build();
    }

    public List<String> TagtoString(List<Tag> tags) {
        return tags.stream().map(tag -> tag.getContent())
                .collect(Collectors.toList());
    }

}
