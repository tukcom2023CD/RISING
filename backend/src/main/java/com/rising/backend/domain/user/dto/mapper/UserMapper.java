package com.rising.backend.domain.user.dto.mapper;

import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.request.UserCreateRequestDto;
import com.rising.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final UserRepository userRepository;

    public User toUserEntity(UserCreateRequestDto dto) {
        return User.builder()
                .username(dto.getUsername())
                .name(dto.getName())
                .password(dto.getPassword())
                .profileUrl("")
                .build();
    }
}
