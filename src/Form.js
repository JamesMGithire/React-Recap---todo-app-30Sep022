import { useRef } from "react";
export default function Form({ setDisplayedTodos }) {
    const newTask = useRef(null);

    function handlePost(e) {
        e.preventDefault();
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "task": `${newTask.current.value}`, "complete": "incomplete" })
        })
            .then(response => response.json())
            .then(result => setDisplayedTodos(prevVal => [...prevVal, result]))
        // setDisplayedTodos(prevVal=>[...prevVal,{ "task": `${newTask.current.value}`, "complete": `${false}` }])
    }
    return (
        <form id="newTask-form">
            <label>
                Task:<input type="text" ref={newTask} />
            </label>
            <button type="submit" onClick={handlePost}>Add a Task</button>
        </form>
    )
}