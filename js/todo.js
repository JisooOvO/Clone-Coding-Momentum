const toDoForm = document.querySelector("#todo-form");
const toDolist = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos"

/** ToDo 리스트 */
let toDos = [];

/** ToDo list 작성 후 Enter시 이벤트 */
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value =  "";

    //ToDo를 Object 형태로 저장
    const newTodoObj = {
        text : newTodo,
        id : Date.now(), 
    };
    if(toDos.length < 10){
        toDos.push(newTodoObj);
        saveToDos();
        // 화면 출력
        paintToDo(newTodoObj);
    }else{
        alert("You can register up to 10");
    }
}

/** ToDo 를 화면에 출력하는 함수 */
function paintToDo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span"); // 할 일
    const button = document.createElement("button"); // 삭제 버튼

    li.id = newTodoObj.id; // li 태그에 id를 부여
    span.innerText = newTodoObj.text;
    button.innerText = "❌";
    
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

/** ToDo를 삭제하는 함수 */
function deleteToDo(event){
    const li = event.target.parentElement // click event에 담긴 정보 중 target -> parentElement로 부모 요소 확인 가능
    li.remove(); // 화면에서 제거
    toDos =  toDos.filter(toDo => toDo.id !== parseInt(li.id)); // DOM을 조작하여 나온 변수는 String
    saveToDos(); // 지우고 다시 저장
}

/** local storage에 ToDo 저장하는 함수 */
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // ToDo의 배열을 -> String 형태로 저장
}

toDoForm.addEventListener("submit",handleToDoSubmit)

/** local storage loading */
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos){
    // local storage에 ToDo가 있을 경우 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 기존 값 저장
    parsedToDos.forEach(paintToDo); // paintToDo 함수에 item을 인자로 하나씩 넘겨주며 실행 ()
}