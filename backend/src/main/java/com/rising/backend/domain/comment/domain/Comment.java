package com.rising.backend.domain.comment.domain;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "post_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    @NotBlank
    @Column(length = 255)
    private String content;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name ="user_id", nullable = false)
    private User user;

    private Long parentId;

}
