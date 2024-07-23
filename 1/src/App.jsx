import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {

    console.log("렌더링");

    // State 정의
    const [num, setNum] = useState(0);

    // 버튼 클릭시 실행되는 함수
    const onClickButton = () => {
        //setNum(num + 1);
        //setNum(num + 1);
        //setNum(num + 1);
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
    };


    return (

    <>
        {console.log("TEST")}
        <h1 style={{color: "red"}}>안녕하세요!</h1>
        <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
        <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
        <button onClick={onClickButton}>버튼</button>
        <p>{num}</p>
        <TailwindCss/>
    </>
    );
};