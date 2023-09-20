const clock = document.querySelector("#clock");

/** 현재 시분초를 보여주는 함수 */
function getClock(){
    const date = new Date();

    /** date.get메소드의 반환형은 number -> pad를 쓰기 위하여 String으로 변환 */
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/** 웹페이지 로딩시 바로 시간을 보여줘야함 */
getClock();

setInterval(getClock, 1000);