package com.rising.backend.domain.post.dto.request;

import com.rising.backend.domain.post.domain.PostType;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

@Getter
public class PostCreateRequestDto {

    @NotEmpty
    private Long userId;

    @NotEmpty
    @Length(max = 100)
    private String title;

    @NotEmpty
    private String content;

    @NotEmpty
    private PostType type;

}
