package com.rising.backend.domain.user.domain;

import com.rising.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(unique = true, length = 20)
    private String username;

    @NotBlank
    @Column(length = 100)
    private String password;

    @NotBlank
    @Column(length = 20)
    private String name;

    @Column(length = 255)
    private String profileUrl;

    public void setEncryptedPassword(String encryptedPassword) {
        this.password = encryptedPassword;
    }

}
