var calculator = {
    evt: {
        // 번호 버튼을 눌렀을 때
        numBtnClickEvt: function () {
            let numBtns = document.getElementsByClassName('btn-num');
            let numD = document.getElementById("numDisplay");
            let calD = document.getElementById("calDisplay");

            for (let btn of numBtns) {
                btn.onclick = function () {
                    if (calD.innerHTML.indexOf("=") != -1) {
                        calculator.clear.clearNum();
                    }

                    if (numD.innerHTML == 0) {
                        numD.innerHTML = '';
                    }
                    let value = btn.innerHTML;
                    numD.append(value);
                };
            }
        },
        // 연산자 버튼을 눌렀을 때
        operBtnClickEvt: function () {
            let calD = document.getElementById("calDisplay");
            let numD = document.getElementById("numDisplay");
            let operBtns = document.getElementsByClassName('btn-oper');
            const operChk = /[+\-*\/]$/;

            for (let b of operBtns) {
                b.onclick = function () {
                    let oper = b.dataset.oper;

                    if (calD.innerHTML.indexOf("=") != -1) {
                        calD.innerHTML = "";
                    }

                    if(operChk.test(calD.innerHTML) && Number(numD.innerHTML) == 0){
                        calD.innerHTML = calD.innerHTML.slice(0,-1);
                        calD.innerHTML += oper;
                    }
                    else if (calD.innerHTML == '') {
                        calD.innerHTML = numD.innerHTML + oper;
                    }
                    else {
                        // 연산하기
                        let temp = calD.innerHTML;
                        let result = calculator.cal.calSub(temp + numD.innerHTML);
                        calD.innerHTML = result + oper;
                    }

                    calculator.clear.clearEntry();
                };
            }
        }
    },
    cal: {
        calSub: function (text) {
            let result = eval(text);

            document.getElementById("numDisplay").innerHTML = result;

            let h = document.createElement("div");
            h.innerHTML = "<div>" + text + '=' + result + "</div>";

            let history = document.getElementById('history');
            history = history.appendChild(h);

            return result;
        },
        calResult: function () {
            let numD = document.getElementById("numDisplay");
            let calD = document.getElementById("calDisplay");

            let text = calD.innerHTML + numD.innerHTML;
            let result = eval(text);

            numD.innerHTML = result;
            calD.innerHTML = text + "=";

            let h = document.createElement("div");
            h.innerHTML = "<div>" + text + '=' + result + "</div>";

            let history = document.getElementById('history');
            history = history.appendChild(h);

            return result;
        }
    },
    clear: {
        clearNum: function () {
            document.getElementById("calDisplay").innerHTML = '';
            document.getElementById("numDisplay").innerHTML = '0';
        },
        clearEntry: function () {
            document.getElementById("numDisplay").innerHTML = 0;
        }
    },
    deleteNum: function () {
        let numD = document.getElementById("numDisplay");

        if (numD.innerHTML.length <= 1) {
            calculator.clear.clearEntry();
        }
        else {
            numD.innerHTML = numD.innerHTML.substr(0, numD.innerHTML.length - 1);
        }
    },
    percent: function () {
        let numD = document.getElementById("numDisplay");
        let calD = document.getElementById("calDisplay");

        if (calD.innerHTML.indexOf("=") != -1) {
            let num = Number(numD.innerHTML);
            num *= (num * 0.01);
            calculator.clear.clearNum();
            numD.innerHTML = num;
        }
        else if (calD.innerHTML == "") {
            calculator.clear.clearNum();
        }
        else {
            let preNum = Number(calD.innerHTML.substr(0, calD.innerHTML.length - 1));
            preNum *= (Number(numD.innerHTML) * 0.01);
            numD.innerHTML = preNum;
        }
    }
};

window.onload = function () {
    calculator.evt.numBtnClickEvt();
    calculator.evt.operBtnClickEvt();
}