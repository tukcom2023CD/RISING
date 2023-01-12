package com.rising.backend.global.util;

import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class UuidConverter {

    private final char[] digits = {
            '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
            'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z', '-', '*'
    };

    public String toUnsignedString(long i, int shift) {
        char[] buf = new char[64];
        int charPos = 64;
        int radix = 1 << shift;
        long mask = radix - 1;
        long number = i;

        do {
            buf[--charPos] = digits[(int) (number & mask)];
            number >>>= shift;
        } while (number != 0);

        return new String(buf, charPos, (64 - charPos));
    }

    public String toBase64(UUID uuid) {
        return toUnsignedString(uuid.getMostSignificantBits(), 6) +
                toUnsignedString(uuid.getLeastSignificantBits(), 6);
    }
}
