package com.rising.backend.domain.post.domain;

import com.rising.backend.domain.post.dto.PostDto.PostUpdateRequest;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Where(clause = "is_deleted=false")
@SQLDelete(sql = "UPDATE post SET is_deleted = true WHERE id=?")
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
    @Setter
    private String title;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    @Setter
    private String content;

    private boolean isSolved = false;

    @Column(length = 255)
    private String videoUrl;

    @Column(length = 255)
    private String sessionUrl;

    @Column(length = 1000)
    @Setter
    private String solvedCode;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PostType type;

    @ManyToMany
    @JoinTable(name = "POST_TAG",
            joinColumns = @JoinColumn(name = "POST_ID"),
            inverseJoinColumns = @JoinColumn(name = "TAG_ID")
    )

    @Setter
    private List<Tag> tag = new ArrayList<>();


    public void setTags(List<Tag> tags) {
        this.tag = tags;
    }

    public void setSolved() {
        this.isSolved = true;
    }

}
