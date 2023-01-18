package com.rising.backend.domain.user.mapper;

import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.UserDto;
import com.rising.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final UserRepository userRepository;

    public User toUserEntity(UserDto.UserCreateRequest userCreate) {
        return User.builder()
                .username(userCreate.getUsername())
                .name(userCreate.getName())
                .password(userCreate.getPassword())
                .profileUrl("")
                .build();
    }

    //채팅방 조회시 보이는 user 정보
    public UserDto.UserChatRoomResponse toUserDto(User user) {
        return UserDto.UserChatRoomResponse.builder()
                .userId(user.getId())
                .name(user.getName())
                .profileUrl(user.getProfileUrl())
                .build();
    }
}
