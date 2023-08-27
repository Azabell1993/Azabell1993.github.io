document.addEventListener("DOMContentLoaded", function () {
    var editor = CodeMirror(document.getElementById("editor-container"), {
        value: "// 코드를 입력하세요...",
        mode: "text/x-csrc",
        lineNumbers: true,
        theme: "dracula",
    });

    editor.setSize("100%", "calc(100% - 50px)");

    const Module = require('./wasm/wasm-parser.js');

    function processContent(content) {
        Module._parseAndProcessContent(content);
    }

    document.getElementById("save-button").addEventListener("click", function () {
        var content = editor.getValue();
        processContent(content);
    });
});