package com.rising.backend.domain.post.service;

import com.rising.backend.domain.post.domain.Post;
import com.rising.backend.domain.post.domain.PostType;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

public class PostSpecification {
    public static Specification<Post> searchWith(final PostType postType) {

        return ((root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (postType != null) {
                predicates.add(builder.equal(root.get("postType"), postType));
            }
            return builder.and(predicates.toArray(new Predicate[0]));
        });
    }
}
