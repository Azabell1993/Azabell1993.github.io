#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE
void sendContentToParent(const char *content) {
    printf("Received Content:\n%s\n", content);
    free((void *)content);
}

EMSCRIPTEN_KEEPALIVE
void parseAndProcessContent(const char *content) {
    sendContentToParent(content);
}
