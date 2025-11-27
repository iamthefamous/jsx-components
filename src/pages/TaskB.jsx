import TaskPage from "./TaskPage";
import StudentCard from "../components/StudentCard";
import PrimaryButton from "../components/PrimaryButton";

export default function TaskB() {
    return (
        <TaskPage
            title="B. Props: Passing Data to Components"
            description="Learn how to pass and use props for dynamic data"
        >
            <div className="section-card">
                <h3>3. StudentCard Component</h3>
                <p>Uses props for name, group, and track.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                    <StudentCard name="Aida" group="SE-101" track="Front-end" />
                    <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
                    <StudentCard name="Dastan" group="SE-103" track="DevOps" />
                </div>
            </div>

            <div className="section-card">
                <h3>4. Button with Label Prop</h3>
                <p>Reusable button with label and type props.</p>
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                    <PrimaryButton label="Login" type="primary" />
                    <PrimaryButton label="Register" type="primary" />
                    <PrimaryButton label="Submit" type="secondary" />
                </div>
            </div>
        </TaskPage>
    );
}
