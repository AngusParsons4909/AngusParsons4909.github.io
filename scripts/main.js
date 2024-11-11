const Score1 = document.querySelector(".Score1");
const Score2 = document.querySelector(".Score2");
const OutputText = document.querySelector(".TextWords");
const OutputScore = document.querySelector(".TextScore");
const Player1 = document.getElementById("Player1");
const Player2 = document.getElementById("Player2");
const EndScore = document.getElementById("Input1");
const StartPlayer = document.getElementById("Input2");

let Button1 = document.querySelector(".Player1Button");
let Button2 = document.querySelector(".Player2Button");
let ConfirmButton = document.querySelector(".ConfirmButton")

Score1Value = 0;
Score2Value = 0;

CurrPoint = 0;
PrevPoint = StartPlayer.selectedIndex;
GamePoint = 0;

Button1.onclick = () => {
    if (StartPlayer.selectedIndex !== 0 && EndScore.value !== '' && !isNaN(Number(EndScore.value)) && Number(EndScore.value) > 0 && OutputScore.textContent != "Error: [Incomplete setup]") {
        if (Score1Value + 1 <= Number(EndScore.value) && Score2Value + 1 <= Number(EndScore.value)) {
            if (Number(Score1Value) + 1 === Number(EndScore.value) || Score2Value + 1 === Number(EndScore.value)) {
                if (Math.abs(Score1Value - Score2Value) >= 2 && (Score1Value === Number(EndScore.value) || Score2Value === Number(EndScore.value))) {
                } 
                if (Math.abs(Score1Value - Score2Value) === 0) {
                    EndScore.value = Number(EndScore.value) + 1;
                }
            }
            IncreaseScore1();
            GeneralButtonFunc();
        }
        if (Number(Score1Value) === Number(EndScore.value) || Score2Value === Number(EndScore.value)) {
            if (Score1Value > Score2Value){
            OutputText.textContent = (Player1.value || Player1.placeholder) + " Wins!";
            } else {
                OutputText.textContent = (Player2.value || Player2.placeholder) + " Wins!";
            }
        }
    }
};

Button2.onclick = () => {
    if (StartPlayer.selectedIndex !== 0 && EndScore.value !== '' && !isNaN(Number(EndScore.value)) && Number(EndScore.value) > 0 && OutputScore.textContent != "Error: [Incomplete setup]") {
        if (Score1Value + 1 <= Number(EndScore.value) && Score2Value + 1 <= Number(EndScore.value)) {
            if (Number(Score1Value) + 1 === Number(EndScore.value) || Score2Value + 1 === Number(EndScore.value)) {
                if (Math.abs(Score1Value - Score2Value) >= 2 && (Score1Value === Number(EndScore.value) || Score2Value === Number(EndScore.value))) {
                } 
                if (Math.abs(Score1Value - Score2Value) === 0) {
                    EndScore.value = Number(EndScore.value) + 1;
                }
            }
            IncreaseScore2();
            GeneralButtonFunc();
        }
        if (Number(Score1Value) === Number(EndScore.value) || Score2Value === Number(EndScore.value)) {
            if (Score1Value > Score2Value){
            OutputText.textContent = (Player1.value || Player1.placeholder) + " Wins!";
            } else {
                OutputText.textContent = (Player2.value || Player2.placeholder) + " Wins!";
            }
        }
    }
};

ConfirmButton.onclick = () => {
    if (Score1Value === 0 && Score2Value === 0) {
        if (StartPlayer.selectedIndex === 1) {
            OutputText.textContent = (Player1.value || Player1.placeholder) + " ball in hand, serve when ready."
        } else if (StartPlayer.selectedIndex === 2) {
            OutputText.textContent = (Player2.value || Player2.placeholder) + " ball in hand, serve when ready."
        } else if (StartPlayer.selectedIndex === 0 || EndScore.value === '') {
            OutputText.textContent = "Error: [Incomplete setup]"
        }
    }
}

function IncreaseScore1()
{
    if (PrevPoint === 0 && StartPlayer.selectedIndex === 2) {
        OutputText.textContent = "Handout " + (Player1.value || Player1.placeholder);
    }
    Score1.textContent = Number(Score1.textContent) + 1;
    CurrPoint = 1;
    Score1Value +=1;
}

function IncreaseScore2() {
    if (PrevPoint === 0 && StartPlayer.selectedIndex === 1) {
        OutputText.textContent = "Handout " + (Player2.value || Player2.placeholder);
    }
    Score2.textContent = Number(Score2.textContent) + 1;
    CurrPoint = 2;
    Score2Value +=1;
}

function GeneralButtonFunc() {
    if (PrevPoint === 1 && CurrPoint === 2) {
        OutputText.textContent = "Handout " + (Player2.value || Player2.placeholder);
    } else if (PrevPoint === 2 && CurrPoint === 1) {
        OutputText.textContent = "Handout " + (Player1.value || Player1.placeholder);
    } else {
        OutputText.textContent = ""
    }
    if (CurrPoint === 1) {
        OutputScore.textContent = Score1Value + " / " + Score2Value
    } else if (CurrPoint === 2) {
        OutputScore.textContent = Score2Value + " / " + Score1Value
    }
    if (Number(Score1Value) + 1 === Number(EndScore.value) || Number(Score2Value) + 1 === Number(EndScore.value)){
        if (Score1Value === Score2Value) {
            OutputScore.textContent = OutputScore.textContent + " win by two";
        } else {
            OutputScore.textContent = OutputScore.textContent + " game point";
        }
    }
    PrevPoint = CurrPoint;
}
