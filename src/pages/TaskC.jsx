import TaskPage from "./TaskPage";
import Card from "../components/Card";
import Layout from "../components/Layout";
import StudentCard from "../components/StudentCard";

export default function TaskC() {
    return (
        <TaskPage
            title="C. Composition & props.children"
            description="Use props.children for flexible component composition"
        >
            <div className="section-card">
                <h3>5. Card Wrapper</h3>
                <p>A Card component that wraps any children content.</p>
                <div style={{ marginTop: "1rem" }}>
                    <Card>
                        <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Important Notice</h4>
                        <p>Classes are online this Friday.</p>
                    </Card>
                    <div style={{ marginTop: "1rem" }}>
                        <p style={{ marginBottom: "0.5rem", fontStyle: "italic" }}>StudentCard wrapped in Card:</p>
                        <Card>
                            <StudentCard name="Aida" group="SE-101" track="Front-end" />
                        </Card>
                    </div>
                </div>
            </div>

            <div className="section-card">
                <h3>6. Layout Component</h3>
                <p>Composes Header, Footer, and children into a layout.</p>
                <div style={{ marginTop: "1rem", border: "1px dashed #667eea", borderRadius: "8px" }}>
                    <Layout>
                        <h4>Welcome, students!</h4>
                        <p>This is your dashboard.</p>
                    </Layout>
                </div>
            </div>
        </TaskPage>
    );
}
