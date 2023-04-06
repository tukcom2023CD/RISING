package com.rising.backend.domain.chat.exception;

import com.rising.backend.global.error.ErrorCode;
import com.rising.backend.global.error.exception.BusinessException;

public class ChatRoomCreationFailedException extends BusinessException {
    public ChatRoomCreationFailedException() {
        super(ErrorCode.CHATROOM_CREATION_FAILED);
    }
}
