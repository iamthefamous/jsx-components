import TaskPage from "./TaskPage";
import TodoApp from "../components/TodoApp/TodoApp";
import StudentFilter from "../components/StudentFilter";

export default function TaskF() {
    const students = [
        { id: 1, name: "Aida", group: "SE-101" },
        { id: 2, name: "Nurlan", group: "SE-102" },
        { id: 3, name: "Dastan", group: "SE-103" },
    ];

    return (
        <TaskPage
            title="F. Small Mini-Projects"
            description="Combine multiple concepts in complete applications"
        >
            <div className="section-card">
                <h3>12. Simple TodoList</h3>
                <p>Todo app with input, add button, list, and clear all.</p>
                <div style={{ marginTop: "1rem" }}>
                    <TodoApp />
                </div>
            </div>

            <div className="section-card">
                <h3>13. StudentFilter</h3>
                <p>Filter students by group with interactive buttons.</p>
                <div style={{ marginTop: "1rem" }}>
                    <StudentFilter students={students} />
                </div>
            </div>
        </TaskPage>
    );
}
