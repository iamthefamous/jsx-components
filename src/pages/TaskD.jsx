import TaskPage from "./TaskPage";
import StudentList from "../components/StudentList";
import Menu from "../components/Menu";

export default function TaskD() {
    const students = [
        { id: 1, name: "Aida", group: "SE-101" },
        { id: 2, name: "Nurlan", group: "SE-102" },
        { id: 3, name: "Dastan", group: "SE-103" },
    ];

    const links = ["Home", "Courses", "About", "Contact"];

    return (
        <TaskPage
            title="D. Lists & Repeating Components"
            description="Render lists using .map() with keys"
        >
            <div className="section-card">
                <h3>7. StudentList from Array</h3>
                <p>Uses .map() to render StudentCard for each student.</p>
                <div style={{ marginTop: "1rem" }}>
                    <StudentList students={students} />
                </div>
            </div>

            <div className="section-card">
                <h3>8. Simple Menu Component</h3>
                <p>Renders navigation links from an array prop.</p>
                <div style={{ marginTop: "1rem" }}>
                    <Menu links={links} />
                </div>
            </div>
        </TaskPage>
    );
}
