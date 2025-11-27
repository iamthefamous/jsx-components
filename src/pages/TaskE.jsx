import TaskPage from "./TaskPage";
import Counter from "../components/Counter";
import CourseDetails from "../components/CourseDetails";
import LivePreview from "../components/LivePreview";

export default function TaskE() {
    return (
        <TaskPage
            title="E. State + Events (Beginner Level)"
            description="Combine component state with event handling"
        >
            <div className="section-card">
                <h3>9. Counter Component</h3>
                <p>Uses useState to track count with +1 and Reset buttons.</p>
                <div style={{ marginTop: "1rem" }}>
                    <Counter />
                </div>
            </div>

            <div className="section-card">
                <h3>10. Toggle Details Component</h3>
                <p>Uses state to show/hide additional information.</p>
                <div style={{ marginTop: "1rem" }}>
                    <CourseDetails />
                </div>
            </div>

            <div className="section-card">
                <h3>11. Controlled Input Preview</h3>
                <p>Controlled input with live preview of typed text.</p>
                <div style={{ marginTop: "1rem" }}>
                    <LivePreview />
                </div>
            </div>
        </TaskPage>
    );
}
