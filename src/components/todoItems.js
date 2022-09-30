export default function TodoItem({ todoObject, setDisplayedTodos }) {
    const { id, task, complete } = todoObject;
    function handleDeletion(id) {
        // get an array of todos that do not have an id that is equal to the id passed as an argument
        setDisplayedTodos(prevValue => prevValue.filter(object => object.id !== id))
        fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
    }
    function handleToggle(id) {
        console.log(id);
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ "complete": complete === "complete" ? "incomplete" : "complete" })
        });

    }
    return (
        <li>{task}
            <button
                className="delete-btn"
                onClick={() => handleDeletion(id)}>Delete</button>
            <button onClick={() => handleToggle(id)}>Toggle</button>
        </li>)
}