document.addEventListener("DOMContentLoaded", function () {
    var editor = CodeMirror(document.getElementById("editor-container"), {
        value: "console.log(\"hello!\");",
        mode: "javascript",
        lineNumbers: true,
        theme: "dracula",
    });

    editor.setSize("100%", "calc(100% - 50px)"); 

    document.getElementById("save-button").addEventListener("click", function () {
        var content = editor.getValue();
        localStorage.setItem("savedContent", content);

        if (window.confirm("저장 하시겠습니까?")) {
            var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
            var anchor = document.createElement("a");
            anchor.download = "my_file.js"; // 수정: 파일 이름을 변경
            anchor.href = URL.createObjectURL(blob);
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }
    });

    document.getElementById("return-button").addEventListener("click", function () {
        var content = editor.getValue();
        localStorage.setItem("savedContent", content);
    
        window.opener.receiveEditorContent(content);
    });
    
    return;
});

function saveToFile(content) {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    var anchor = document.createElement("a");
    anchor.download = "myCodeFile.js";
    anchor.href = URL.createObjectURL(blob);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}