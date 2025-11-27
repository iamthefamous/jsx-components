import { Link } from "react-router-dom";
import "./Home.css";

const tasks = [
    {
        id: "a",
        title: "A. Warm-up: Simple Components",
        description: "Create basic React components like Hello and CourseInfo",
        exercises: ["Hello Component", "CourseInfo Component"],
    },
    {
        id: "b",
        title: "B. Props: Passing Data",
        description: "Learn how to pass data using props",
        exercises: ["StudentCard Component", "PrimaryButton with Label"],
    },
    {
        id: "c",
        title: "C. Composition & Children",
        description: "Use props.children and composition patterns",
        exercises: ["Card Wrapper", "Layout Component"],
    },
    {
        id: "d",
        title: "D. Lists & Repeating Components",
        description: "Render lists using .map()",
        exercises: ["StudentList from Array", "Menu Component"],
    },
    {
        id: "e",
        title: "E. State + Events",
        description: "Combine state and event handling",
        exercises: ["Counter", "Toggle Details", "Controlled Input"],
    },
    {
        id: "f",
        title: "F. Mini-Projects",
        description: "Build complete mini applications",
        exercises: ["TodoList", "StudentFilter"],
    },
];

export default function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>React Components Lab</h1>
                <p className="home-subtitle">
                    Asylbek Zhunusov
                </p>
            </header>

            <div className="tasks-grid">
                {tasks.map((task) => (
                    <Link key={task.id} to={`/task/${task.id}`} className="task-card">
                        <div className="task-card-header">
                            <span className="task-letter">{task.id.toUpperCase()}</span>
                        </div>
                        <div className="task-card-body">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <ul className="exercise-list">
                                {task.exercises.map((ex, idx) => (
                                    <li key={idx}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="task-card-footer">
                            <span className="view-link">View Exercises →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
