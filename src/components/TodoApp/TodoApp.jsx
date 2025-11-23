import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        if (text.trim() === "") return;
        setTodos([...todos, text]);
    }

    function clearAll() {
        setTodos([]);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <TodoInput onAdd={addTodo} />
            <TodoList todos={todos} />
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
}
