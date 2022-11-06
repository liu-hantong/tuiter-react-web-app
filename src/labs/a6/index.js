import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import {useState} from "react";

const BZLCM = () => {
    const ewq = [28, 107, 26, 65, 95]
    return (
        <ul>
            {
                ewq.filter(asd => asd > 60)
                    .map(tre => <li>{tre}</li>)
            }
        </ul>
    )
}

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
}

export default Assignment6;