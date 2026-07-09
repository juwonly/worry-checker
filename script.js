const questions = [

"이 고민이 1주일 이상 계속되었나요?",

"하루에 여러 번 이 고민이 떠오르나요?",

"다른 일을 하고 있을 때도 이 고민이 계속 떠오르나요?",

"해결하려고 여러 번 시도했지만 해결되지 않았나요?",

"이 고민 때문에 해야 할 일을 미룬 적이 있나요?",

"이 고민 때문에 잠이나 식사에 영향을 받은 적이 있나요?",

"하루 대부분의 시간 동안 이 고민을 하고 있나요?"

];


let currentQuestion = 0;

let answers = [];

let worry = "";





function startTest(){


    worry =
    document.getElementById(
        "worryInput"
    ).value;


    if(worry.trim()===""){

        alert(
        "고민을 입력해주세요."
        );

        return;

    }


    document
    .getElementById("startScreen")
    .classList.add("d-none");


    document
    .getElementById("questionScreen")
    .classList.remove("d-none");


    showQuestion();

}





function showQuestion(){


    document
    .getElementById("questionNumber")
    .innerText =
    `${currentQuestion+1} / 7`;


    document
    .getElementById("questionText")
    .innerText =
    questions[currentQuestion];



    let progress =
    ((currentQuestion)/questions.length)*100;


    document
    .getElementById("progressBar")
    .style.width =
    progress+"%";


}





function answer(value){


    answers.push(value);


    currentQuestion++;


    if(currentQuestion < questions.length){

        showQuestion();

    }

    else{

        showResult();

    }


}





function calculateScore(){


    let yesCount =
    answers.filter(
        item=>item===true
    ).length;


    let importance =
    Math.round(
        yesCount / 7 * 14
    ) + 1;


    return importance;

}





function showResult(){


    document
    .getElementById("questionScreen")
    .classList.add("d-none");


    document
    .getElementById("resultScreen")
    .classList.remove("d-none");



    let score =
    calculateScore();



    document
    .getElementById("score")
    .innerText =
    `${score} / 15`;



    let message="";


    if(score<=5){

        message =
        "현재 고민이 큰 영향을 주고 있지는 않아 보입니다. 하지만 계속 신경 쓰인다면 기록하며 관찰해보세요.";

    }

    else if(score<=10){

        message =
        "고민이 생활에 영향을 주기 시작한 단계입니다. 주변 사람과 이야기하거나 해결 방법을 찾아보세요.";

    }

    else{


        message =
        "고민이 지속되고 일상에 영향을 주고 있습니다. 혼자 해결하려 하기보다 신뢰할 수 있는 사람과 이야기해보세요.";

    }



    document
    .getElementById("resultText")
    .innerText =
    message;


}






function shareResult(){


    let score =
    calculateScore();



    let text =
`나의 고민 중요도 결과

${score}/15 단계

고민 중요도 확인기`;



    if(navigator.share){


        navigator.share({

            title:"고민 중요도 결과",

            text:text

        });


    }

    else{


        navigator.clipboard.writeText(text);


        alert(
        "결과가 복사되었습니다."
        );


    }


}






function restart(){


    currentQuestion=0;

    answers=[];


    document
    .getElementById("resultScreen")
    .classList.add("d-none");


    document
    .getElementById("startScreen")
    .classList.remove("d-none");


    document
    .getElementById("worryInput")
    .value="";


}
