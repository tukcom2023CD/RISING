package com.rising.backend.global.util;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/docs")
class SwaggerRedirector {
    @GetMapping
    public String api() { return "redirect:/swagger-ui/index.html"; }
}
