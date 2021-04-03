# wooncloud javascript calculator

## Demo
[go to Demo](https://wooncloud.github.io/js_calculator/calculator/calculator)

## calculator image
![calculator image](https://github.com/wooncloud/js_calculator/blob/main/readme%20image/calculator%20image.png?raw=true)

## Test Case
|대분류|중분류|소분류      |테스트조건                  |실행순서                                 |Pass Result                |P/F|실행결과|비고 |
|---|---|---------|-----------------------|-------------------------------------|---------------------------|---|----|---|
|계산기|버튼 |버튼값 입력1  |1~9의 번호를 클릭            |화면에서 1~9까지 숫자를 클릭한다                  |버튼 클릭의 값이 console에 출력된다    |   |    |   |
|   |   |버튼값 입력2  |/, x, -, +, %, C, =, <-|화면에서 /, x, -, +, %, C, =, <- 숫자를 클릭한다|버튼 클릭의 값이 console에 출력된다    |   |    |   |
|   |연산 |연산누적     |버튼1과 버튼2를 클릭하여 조합      |연산의 문자를 만든다                          |결과가 console에 출력된다          |   |    |   |
|   |   |연산결과     |누적된 연산의 결과를 만들어 낸다     |연산의 결과를 만든다                          |결과가 console에 출력된다          |   |    |   |
|   |삭제 |한 단위 삭제  |<-를 사용할 경우 한 글자를 삭제한다  |연산을 작성하고 <- 버튼을 눌러 한 글자가 삭제되는지 확인    |한 글자가 삭제된 결과를 출력한다         |   |    |   |
|   |중복 |연산자 중복 배제|연산자가 중복될 경우            |연산을 중복하여 작성한다                        |중복된 연산자중 마지막에 입력된 연산자를 출력한다|   |    |   |
|   |출력 |연산출력     |연산중에 발생하는 연산을 보여준다     |버튼1과 버튼2를 통한 연산에 계속해서 보여진다           |연산자를 만들어내는 과정이 화면에 출력된다    |   |    |   |
|   |   |결과출력     |연산자중 =을 클릭한다           |연산자 =을 클릭하여 입력된 연산문장을 계산한다           |연산된 문장을 화면에 출력한다           |   |    |   |
|   |   |결과누적     |이전의 연산 히스토리를 누적한다      |이전엔 연산된 히스토리를 누적하여 화면에 출력한다          |연산된 히스토리를 화면에 출력한다         |   |    |   |

## ETC

### CSS
used [skeleton.css](http://getskeleton.com/)

### JS code
[calculator js code](https://github.com/wooncloud/js_calculator/blob/main/calculator/js/js_p01.js)

### role model
window basic calculator
