const questions=[


"이 고민이 1주일 이상 계속되었나요?",

"하루에 여러 번 이 고민이 떠오르나요?",

"다른 일을 하고 있을 때도 이 고민이 계속 떠오르나요?",

"해결하려고 여러 번 시도했지만 해결되지 않았나요?",

"이 고민 때문에 해야 할 일을 미룬 적이 있나요?",

"이 고민 때문에 잠이나 식사에 영향을 받은 적이 있나요?",

"하루 대부분의 시간 동안 이 고민을 하고 있나요?"

];


let current=0;

let answers=[];

let chart=null;

let userWorry="";






function startTest(){


userWorry=
document
.getElementById("worry")
.value;



if(userWorry.trim()===""){

alert("고민을 입력해주세요.");

return;

}



document
.getElementById("start")
.classList.add("hidden");



document
.getElementById("quiz")
.classList.remove("hidden");



showQuestion();

}





function showQuestion(){


document
.getElementById("number")
.innerText=
`${current+1} / 7`;



document
.getElementById("question")
.innerText=
questions[current];



document
.getElementById("progressBar")
.style.width=
`${current/7*100}%`;



document
.getElementById("backBtn")
.style.display=
current===0?
"none":
"block";


}






function answer(value){


answers[current]=value;


current++;



if(current<questions.length){

showQuestion();

}

else{

showResult();

}


}






function previousQuestion(){


if(current>0){

current--;

showQuestion();

}


}







function getScore(){


let count=
answers.filter(
x=>x===true
).length;



return Math.round(
(count/7)*14
)+1;


}







function showResult(){


document
.getElementById("quiz")
.classList.add("hidden");



document
.getElementById("result")
.classList.remove("hidden");



let score=getScore();



document
.getElementById("score")
.innerText=
score;



document
.getElementById("savedWorry")
.innerText=
userWorry;



drawGauge(score);



let level="";

let message="";



if(score<=5){

level="낮음";


message=
`
현재 상태는 고민의 영향이 낮은 단계입니다.

현재 고민이 일상에 큰 영향을 주고 있지는 않아 보입니다.

추천 방법

✓ 고민을 글로 정리하기
✓ 작은 해결 방법부터 시도하기
✓ 충분한 휴식 가지기
`;



}

else if(score<=10){


level="보통";


message=
`
현재 상태는 고민이 생활에 영향을 주기 시작한 단계입니다.

반복적으로 생각하거나 집중하는 데 영향을 줄 수 있습니다.

추천 방법

✓ 고민의 원인 기록하기
✓ 해결 가능한 부분 찾기
✓ 주변 사람과 이야기하기
`;



}

else{


level="높음";


message=
`
현재 상태는 고민이 생활에 큰 영향을 주고 있는 단계입니다.

오랜 고민으로 감정과 생활 패턴에도 영향을 줄 수 있습니다.

추천 방법

✓ 혼자 계속 고민하지 않기
✓ 믿을 수 있는 사람과 이야기하기
✓ 필요하다면 전문가 도움 고려하기
`;



}



document
.getElementById("level")
.innerText=
level;



document
.getElementById("message")
.innerText=
message;


}








function drawGauge(score){



if(chart){

chart.destroy();

}



let color;



if(score<=5){

color="#22c55e";

}

else if(score<=10){

color="#f59e0b";

}

else{

color="#ef4444";

}





chart=new Chart(

document.getElementById("gauge"),


{

type:"doughnut",


data:{


datasets:[{


data:[

score,

15-score

],



backgroundColor:[

color,

"#e5e7eb"

],


borderWidth:0,


borderRadius:15


}]


},



options:{


responsive:true,


maintainAspectRatio:false,


rotation:-90,


circumference:180,


cutout:"75%",



animation:{


duration:1500


},



plugins:{


legend:{display:false},


tooltip:{enabled:false}


}


}


}

);


}









function shareResult(){


let score=getScore();


let url=
"https://juwonly.github.io/worry-checker/";



let text=
`
🧠 고민 중요도 결과


나의 고민:

${userWorry}


중요도:

${score}/15



확인하기:

${url}

`;



if(navigator.share){


navigator.share({

title:"고민 중요도 결과",

text:text,

url:url

});


}

else{


navigator.clipboard.writeText(text);


alert("공유 내용이 복사되었습니다.");

}


}







function restart(){


current=0;

answers=[];


userWorry="";



document
.getElementById("result")
.classList.add("hidden");



document
.getElementById("start")
.classList.remove("hidden");


document
.getElementById("worry")
.value="";


}