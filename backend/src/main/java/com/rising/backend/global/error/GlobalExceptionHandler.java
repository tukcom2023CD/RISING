package com.rising.backend.global.error;

import com.rising.backend.global.error.exception.BusinessException;
import com.rising.backend.global.error.exception.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorResponse> handleException(Exception e) {
        log.error(e.getMessage(), e);
        ErrorResponse response = ErrorResponse.of(ErrorCode.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler
    protected ResponseEntity<ErrorResponse> handleRuntimeException(BusinessException e) {
        final ErrorCode errorCode = e.getErrorCode();
        final ErrorResponse response =
                ErrorResponse.builder()
                        .errorMessage(errorCode.getMessage())
                        .businessCode(errorCode.getCode())
                        .build();
        log.warn(e.getMessage());
        return ResponseEntity.status(errorCode.getStatus()).body(response);
    }

    @ExceptionHandler
    protected ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        final ErrorResponse response =
                ErrorResponse.of(ErrorCode.INPUT_INVALID_VALUE, e.getBindingResult());
        log.warn(e.getMessage());
        return new ResponseEntity<>(response, BAD_REQUEST);
    }

    @ExceptionHandler(NotFoundException.class)
    protected ResponseEntity<ErrorResponse> handleNotFoundException(NotFoundException e) {
        final ErrorCode errorCode = e.getErrorCode();
        final ErrorResponse response = makeErrorResponse(errorCode);
        log.warn(e.getMessage());
        return new ResponseEntity<>(response, errorCode.getStatus());
    }

    private ErrorResponse makeErrorResponse(ErrorCode errorCode) {
        return ErrorResponse.builder()
                .errorMessage(errorCode.getMessage())
                .businessCode(errorCode.getCode())
                .build();
    }
}
