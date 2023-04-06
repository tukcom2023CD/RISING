package com.rising.backend.domain.user.exception;

import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.BusinessException;

public class InvalidPasswordException extends BusinessException {

    public InvalidPasswordException() {
        super(ErrorCode.USER_INVALID_PASSWORD);
    }
}
