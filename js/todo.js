const toDoForm = document.querySelector("#todo-form");
const toDolist = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

/** ToDo 리스트 */
const toDos = [];

/** ToDo list 작성 후 Enter시 이벤트 */
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value =  "";

    //
    toDos.push(newTodo);
    saveToDos();

    // 화면 출력
    paintToDo(newTodo);
}

/** ToDo 를 화면에 출력하는 함수 */
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span"); // 할 일
    const button = document.createElement("button"); // 삭제 버튼

    span.innerText = newTodo;
    button.innerText = "❌";
    
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);


}

/** ToDo를 삭제하는 함수 */
function deleteToDo(event){
    const li = event.target.parentElement // click event에 담긴 정보 중 target -> parentElement로 부모 요소 확인 가능
    li.remove();

}

/** local storage에 ToDo 저장하는 함수 */
function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos)); // ToDo의 배열을 -> String 형태로 저장
}

toDoForm.addEventListener("submit",handleToDoSubmit)

