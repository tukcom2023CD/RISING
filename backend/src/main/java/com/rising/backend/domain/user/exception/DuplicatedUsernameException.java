package com.rising.backend.domain.user.exception;

import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.BusinessException;

public class DuplicatedUsernameException extends BusinessException {
    public DuplicatedUsernameException() {
        super(ErrorCode.USER_NAME_DUPLICATED);
    }
}
