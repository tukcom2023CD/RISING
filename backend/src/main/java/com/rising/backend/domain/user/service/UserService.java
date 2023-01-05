package com.rising.backend.domain.user.service;

import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.mapper.UserMapper;
import com.rising.backend.domain.user.dto.UserDto;
import com.rising.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public boolean isDuplicatedUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public User register(UserDto.UserCreateRequest requestDto) {
        User user = userMapper.toUserEntity(requestDto);
        user.setEncryptedPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    public User findUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow();
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() ->
                new IllegalArgumentException("해당 회원이 존재하지 않습니다."));
    }
}
