package com.rising.backend.global.error.exception;

import com.rising.backend.global.error.ErrorCode;
import lombok.Getter;

import java.util.NoSuchElementException;

@Getter
public class NotFoundException extends NoSuchElementException {

    private final ErrorCode errorCode;

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
