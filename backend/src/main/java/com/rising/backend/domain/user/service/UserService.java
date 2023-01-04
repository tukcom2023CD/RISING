package com.rising.backend.domain.user.service;

import com.rising.backend.domain.user.domain.User;
import com.rising.backend.domain.user.dto.mapper.UserMapper;
import com.rising.backend.domain.user.dto.request.UserCreateRequestDto;
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

    public User register(UserCreateRequestDto requestDto) {
        User user = userMapper.toUserEntity(requestDto);
        user.setEncryptedPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
