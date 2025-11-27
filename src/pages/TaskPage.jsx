import { Link } from "react-router-dom";
import "./TaskPage.css";

export default function TaskPage({ title, description, children }) {
    return (
        <div className="task-page">
            <nav className="task-nav">
                <Link to="/" className="back-link">
                    ← Back to Home
                </Link>
            </nav>
            <header className="task-header">
                <h1>{title}</h1>
                <p>{description}</p>
            </header>
            <main className="task-content">{children}</main>
        </div>
    );
}
