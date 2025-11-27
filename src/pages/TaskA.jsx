import TaskPage from "./TaskPage";
import Hello from "../components/Hello";
import CourseInfo from "../components/CourseInfo";

export default function TaskA() {
    return (
        <TaskPage
            title="A. Warm-up: Simple Components"
            description="Create your first React components with JSX"
        >
            <div className="section-card">
                <h3>1. Hello Component</h3>
                <p>Renders Hello, React! inside an h1 tag with name and group.</p>
                <div>
                    <Hello />
                </div>
            </div>

            <div className="section-card">
                <h3>2. CourseInfo Component</h3>
                <p>Shows course name, description, and learning outcomes.</p>
                <div>
                    <CourseInfo />
                </div>
            </div>
        </TaskPage>
    );
}
