package com.rising.backend.domain.chat.exception;

import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.BusinessException;

public class ChatRoomNotFoundException extends BusinessException {
    public ChatRoomNotFoundException() { super(ErrorCode.CHATROOM_NOT_FOUND); }
}
