package com.rising.backend.domain.user.mapper;

import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.UserRequest;
import com.rising.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final UserRepository userRepository;

    public User toUserEntity(UserRequest.CreateDto userCreate) {
        return User.builder()
                .username(userCreate.getUsername())
                .name(userCreate.getName())
                .password(userCreate.getPassword())
                .profileUrl("")
                .build();
    }
}
