
function handleCommand () {
    var input = document.getElementById('commandInput').value.trim();
    
    if (input === 'cat < info' || input === 'info') {
        displayResumeInfo();
        scrollToCursor();
        return;    
    }

    if (input === 'cat < skill' || input === 'skill') {
        displaySkillInfo();
        scrollToCursor();
        return;    
    }

    if (input === 'cat < about' || input === 'about') {
        displayAboutInfo();
        scrollToCursor();
        return;
    }

    if (input === 'clear') {
        clearConsole();
        scrollToCursor();
        return;
    }

    if (input === 'editor') {
        openEditorWindow();
        scrollToCursor();
        return;
    }

    if (input === 'ls') {
        displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>ls</span>");
        displayOutput("'cat < info' 또는 'info' || 'info' : 기본인적사항");
        displayOutput("'cat < skill' 또는 'skill' : 스킬정보");
        displayOutput("'cat < about' 또는 'about' : About은");
        displayOutput("'clear'      : 콘솔 창 정리");
        displayOutput("'ls'         : 명령어 모음");
        displayOutput("'editor'     : 에디터 창 호출");
        scrollToCursor();
        return;
    }
    
    if (input === 'help') {
        displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>help</span>");
        displayOutput("'cat < info' 또는 'info' || 'info' : 기본인적사항");
        displayOutput("'cat < skill' 또는 'skill' : 스킬정보");
        displayOutput("'cat < about' 또는 'about' : About은");
        displayOutput("'clear'      : 콘솔 창 정리");
        displayOutput("'ls'         : 명령어 모음");
        displayOutput("'editor'     : 에디터 창 호출");
        scrollToCursor();
        return;
    }

    // 입력한 명령어가 없을 경우
    displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#FF0000;'> </span>");
    scrollToCursor();
}

function displayOutput(output) {
    var outputDiv = document.getElementById('output');
    output = output.replace(/\n/g, '<br>'); // Replace \n with <br>
    outputDiv.innerHTML += output + "<br>";
    outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to the bottom
    document.getElementById('commandInput').value = ''; // Clear input
}
    
function displayResumeInfo(output) {
    var outputDiv = document.getElementById('output');
    var table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>기본인적 사항</span>");
    // Insert rows for each piece of information
    insertRow(table, "- ","- 기본정보");
    insertRow(table, "이름", "박지우");
    insertRow(table, "이메일", "jeewoo19930315@gmail.com");
    insertRow(table, "깃허브", "https://github.com/Azabell1993");
    insertRow(table, "자격증(취득일자)", "전산응용기계제도기능사(2014.07.18)");
    insertRow(table, "- ","-  자기계발사항");
    insertRow(table, "SIAT과정 (풀스택 과정)", "판교디지털훈련센터 | JAVA, Spring, Oracle 등(2022.02.21 ~ 2022.08.12)");
    insertRow(table, "정보보안과정", "코리아IT아카데미 | Linux, PacketTracer 등(2021.08.24 ~ 2021.12.25)");
    insertRow(table, "임베디드 개발", "대한상공회의소 | C언어, Atmega128, STM(2021.05.25 ~ 2021.07.25)");
    insertRow(table, "- ","-  경력사항");
    insertRow(table, "2022.10.3.~재직 중", "엠티데이타 | SI 웹 개발");
    insertRow(table, "2020.01.28 ~ 2020.10.16", "   나노**스 | 금형설계 및 증작 설계");
    insertRow(table, "2019.03.01 ~ 2020.01.24", "   월드****놀러지 | 금형설계 및 증작 설계");
    insertRow(table, "2017.11.20 ~ 2019.01.24", "   두*엔     | 금형설계 및 증작 설계");
    insertRow(table, "2017.07.01 ~ 2017.11.01", "   에**스   | 금형 설계 인턴");
    insertRow(table, "2016.04.01 ~ 2017.01.24", "   이**기술단 | 플랜트 배관 설계");
    insertRow(table, "2014.08.13 ~ 2016.04.01", "   맥*킬     | 플랜트배관 설계 및 모델링");    
    insertRow(table, "- ","-  신체사항");
    insertRow(table, "청각장애 3급","3급 - 보청기, 인공와우(시끄러운 장소에서 다소 제약)");
    outputDiv.appendChild(table);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    document.getElementById('commandInput').value = '';
}

function displaySkillInfo(output) {
    var outputDiv = document.getElementById('output');
    var table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    var preTag = document.createElement('pre');
    preTag.style.margin = '0';
    displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>프로그래밍</span>");
    displayOutput("<pre><code><span style='color:#9FCA56;'>- 프로그래밍 </br>"
        + "  <strong>C언어</strong></br>"
        + " 구조체 포인터와 함수 포인터를 어려움 없이 활용, 객체지향의 5원칙을 유사 객체지향으로 흉내, Makefile, Cmake, gdb 有</br ></br > "
        + " 유사 OOP 설계 연습(2021년)              : 하기 링크 A </br> "
        + " 유사 STL 설계 연습(2023년 상반기)_1     : 하기 링크 B </br> "
        + " 유사 STL 설계 연습(2023년 상반기)_2     : 하기 링크 C </br> "
        + " 유사 Lambda 설계 연습(2023년 상반기)    : 하기 링크 D </br></span>")
    
    insertRow(table, "A", "https://github.com/Azabell1993/ClangStructPointerExample")
    insertRow(table,"B" ,"https://github.com/Azabell1993/c-programming-structPointer_data_structure_2023/blob/cb4f45dd76f58c9f14b320efbcca088a97f15231/basic_stl_2023/vector.h#L1-L133")
    insertRow(table,"C" ,"https://github.com/Azabell1993/c-programming-structPointer_data_structure_2023/blob/cb4f45dd76f58c9f14b320efbcca088a97f15231/basic_stl_2023/add.h#L1-L73") 
    insertRow(table, "D", "https://github.com/Azabell1993/c-programming-structPointer_data_structure_2023/blob/cb4f45dd76f58c9f14b320efbcca088a97f15231/C_functional%20programming/structural%20design/test4.c#L1-L36")

    var preTag = document.createElement('pre');
    preTag.style.margin = '0';
    displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>웹 실무</span>");
    displayOutput("<pre><code><span style='color:#9FCA56;'>- 웹 실무</br>"
    + "- SI 웹 개발자로 경험한 프로젝트를 통해 복지부에서의 대규모 트래픽 DBMS 및 MVC패턴에 따른 자바 프로그래밍을 '경험'하였습니다.</br>"
    + "- 기획서와 문서화를 통해 전체적인 프로세스를 SI에서 배울 수 있었습니다.</br>"
    + "- Vue 프레임워크인 Nuxt.js를 통해 프론트 언어로 화면 개발에 기여하였습니다.</br>"
    + "- DB (Oracle, Tibero, MySQL) : 고객의 요구사항에 맞는 기능을 삽입하거나 수정하고 설계할 수 있습니다.</br></span>");


    var preTag = document.createElement('pre');
    preTag.style.margin = '0';
    displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>DBMS</span>");
    displayOutput("<pre><code><span style='color:#9FCA56;'>- DBMS </br>"
    + "- MySQL, Oracle, Tibero: 프로젝트에서 데이터베이스 유지보수를 담당하면서 다양한 데이터베이스 시스템을 다루었습니다.</br>"
    + "- 고객의 요구사항에 맞게 데이터베이스 구조를 설계하고, 쿼리 작성 및 최적화를 수행하였습니다.</br>"
    + " 효율적인 옵티마이저 사용을 통해 성능 개선을 이루었습니다.</br > "
    + "- 데이터 모델링: 프로젝트 초기 단계에서 요구사항 분석과 함께 데이터 모델링을 수행하였습니다.</br>" 
    + " 엔터티와 관계의 정의, 속성 및 제약 조건 등을 고려하여 ER 다이어그램을 작성하였습니다.이를 기반으로 데이터베이스 스키마를 구축하고 관리하였습니다.</br>"
    + "- 성능 최적화: 대규모 트래픽 처리에 필요한 성능 최적화 작업도 수행하였습니다.</br>" 
    + " 인덱싱 전략, 쿼리 튜닝 등의 기술을 활용하여 쿼리 실행 속도와 시스템 응답 시간 개선에 기여하였습니다.</br></span>")
    
    outputDiv.appendChild(table);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    document.getElementById('commandInput').value = '';
    
}

function displayAboutInfo(output) {
    var outputDiv = document.getElementById('output');
    var table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    var preTag = document.createElement('pre');
    preTag.style.margin = '0';
    displayOutput("<pre><code>my_info@consoleStyle:~$ <span style='color:#9FCA56;'>About</span>");
                    displayOutput("<pre><code><span style='color:#9FCA56;'>"+
                    "<strong>인프라 지식과 네이티브 프로그래밍에 능숙한 C/C++ 개발자로 성장하고자 하는 열정적인 개발자입니다.<strong></br></br>"+
                    "22년 10월에 웹 SI 컨소시엄에 신입 개발자로 합류하여, 데이터베이스 최적화 및 시스템 운영에 관한 경험을 쌓았습니다. MySQL, Oracle, Tibero를 활용하여 데이터베이스 설계 및 쿼리 최적화를 담당하며 시스템의 안정성을 유지하는데 기여하였습니다.</br>"+
                    "추가적으로 백업 및 복원 작업과 데이터 보안 강화에도 참여하였습니다.</br></br>"+
                    "개발 기술 뿐만 아니라, 청음복지관에서 청각장애인을 위한 키오스크 프로그램을 직접 설계하고 개발하는 프로젝트 매니저 역할을 수행했습니다.</br></br>"+
                    "제 기술적 배경은 C/C++에서 특히 강점을 보이며, 구조체 포인터와 함수 포인터를 활용한 객체지향 프로그래밍 원칙의 구현, 리눅스 환경에서의 gcc 컴파일러 디버깅 등을 경험하였습니다.</br>"+
                    "이러한 경험들을 바탕으로 네이티브 개발 능력을 강화하며, 넓은 범위의 기술 스택에 도전하는 개발자로 성장하고 있습니다.</br></br>"+
                    "저는 현재 C/C++을 중심으로, 인프라와 시스템에 필수적인 심도 있는 지식을 확장하고자 합니다. 궁극적인 목표는 고성능 컴퓨팅과 인프라 설계에 관한 전문성을 갖춘 개발자가 되어, 복잡한 시스템의 효율적 관리와 최적화를 달성하는 것입니다.</br>"+
                    "열린 마음으로 새로운 기술을 배우고 도전하며, 문제 해결 능력을 지속적으로 향상시키고자 합니다.</br></br>"+
                    "</span></code></pre>");
    outputDiv.appendChild(table);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    document.getElementById('commandInput').value = '';
}

function insertRow(table, label, value) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();

    cell1.textContent = label;
    cell1.style.border = '1px solid #D8DEE9';
    cell1.style.padding = '8px';
    cell1.style.textAlign = 'left';
    cell1.style.color = '#D8DEE9';

    if (value.includes("https://")) {
        var link = document.createElement('a');
        link.href = value;
        link.textContent = value;
        link.target = "_blank";
        link.style.color = '#e9fa2d';
        cell2.appendChild(link);
    } else {
        value = value.replace(/\n/g, '\n');
        cell2.innerHTML = value;
        cell2.textContent = value;
    }

    cell2.style.border = '1px solid #D8DEE9';
    cell2.style.padding = '8px';
    cell2.style.textAlign = 'left';
    cell2.style.color = '#D8DEE9';
}

// screen clear
function clearConsole() {
    document.getElementById('output').innerHTML = '';
    document.getElementById('commandInput').value = '';
    var promptElement = document.getElementById('prompt');
    if (promptElement) {
        promptElement.innerHTML = '';
    }
}

// move to cursor
function scrollToCursor() {
    var inputElement = document.getElementById('commandInput');
    inputElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
    });
}

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

function openEditorWindow() {
    var editorWindow = window.open('editor.html', '_blank', 'width=1200,height=900');
    editorWindow.onload = function () {
        // initializeEditor(editorWindow);
        var savedContent = localStorage.getItem("savedContent");
        editorWindow.postMessage(savedContent, '*');
    };
    document.getElementById('commandInput').value = '';
    return;
}

window.addEventListener('message', function (event) {
    var content = event.data;
    if (content !== undefined) {
        editor.setValue(content);
    }
});

function receiveEditorContent(content) {
    var inputElement = document.getElementById('commandInput');
    inputElement.value = content;
    displayOutput("<pre><code>my_info@consoleStyle:~$ " + content);
}

// function initializeEditor(editorWindow) {
//     var editorContainer = editorWindow.document.getElementById('editor-container');

//     var editor = CodeMirror(editorContainer, {
//         mode: 'text/x-csrc',
//         theme: 'default',
//         lineNumbers: true,
//         indentWithTabs: true,
//         tabSize: 4,
//     });

//     editor.setValue("// Enter your C code here...");
// }
