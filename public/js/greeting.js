const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

// 자주 사용하는 string은 대문자 변수로 저장 (관례)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


/** 로그인 버튼 클릭시 동작 함수 */
function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 Event에 대한 기본 행동을 차단
    //console.log(event) // 이벤트에 대한 정보
    
    /** 로그인 폼 숨기기 */
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    paintGreetings(username);
    
    /** 브라우저에 유저 이름 저장하기 */
    localStorage.setItem(USERNAME_KEY,username);
};

/** 유저에게 인사하는 함수 */
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

/** 로그인 체크*/
if (savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(savedUsername);    
}