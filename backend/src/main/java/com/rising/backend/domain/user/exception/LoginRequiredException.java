package com.rising.backend.domain.user.exception;

import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.BusinessException;

public class LoginRequiredException extends BusinessException {
    public LoginRequiredException() { super(ErrorCode.USER_LOGIN_REQURED); }
}
