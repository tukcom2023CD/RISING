package com.rising.backend.domain.post.domain;

import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name ="user_id", nullable = false)
    private User user;

    @NotBlank
    @Column(length = 100)
    private String title;

    @NotBlank
    @Column(length = 1000)
    private String content;

    @Column(length = 1000)
    private String memo;

    @Column(length = 255)
    private String videoUrl;

    @Column(length = 255)
    private String sessionUrl;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PostType type;
}
