package com.rising.backend.domain.chat.domain;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.user.domain.User;
import com.rising.backend.global.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE chat_room SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class ChatRoom extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Post post;

    @ManyToOne
    private User mentor;

    @ManyToOne
    private User mentee;

}
