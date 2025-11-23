import "./App.css";
import Hello from "./components/Hello";
import CourseInfo from "./components/CourseInfo";
import StudentCard from "./components/StudentCard";
import PrimaryButton from "./components/PrimaryButton";
import Card from "./components/Card";
import Layout from "./components/Layout";
import StudentList from "./components/StudentList";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import CourseDetails from "./components/CourseDetails";
import LivePreview from "./components/LivePreview";
import TodoApp from "./components/TodoApp/TodoApp";
import StudentFilter from "./components/StudentFilter";

function App() {
    const students = [
        { id: 1, name: "Aida", group: "SE-101" },
        { id: 2, name: "Nurlan", group: "SE-102" },
        { id: 3, name: "Dastan", group: "SE-103" },
    ];

    const links = ["Home", "Courses", "About", "Contact"];

    return (
        <div className="p-10 space-y-10">
            {/* Warm-Up */}
            <Hello />

            <CourseInfo />

            {/* Props */}
            <div className="grid grid-cols-3 gap-4">
                <StudentCard name="Aida" group="SE-101" track="Front-end" />
                <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
                <StudentCard name="Dastan" name2="SE-103" track="DevOps" />
            </div>

            <div className="space-x-4">
                <PrimaryButton label="Login" type="primary" />
                <PrimaryButton label="Register" type="primary" />
                <PrimaryButton label="Submit" type="secondary" />
            </div>

            {/* Card Wrapper */}
            <Card>
                <h3 className="font-bold text-xl">Important Notice</h3>
                <p>Classes are online this Friday.</p>
            </Card>

            {/* Layout */}
            <Layout>
                <h2 className="text-2xl font-bold">Welcome, students!</h2>
                <p>This is your dashboard.</p>
            </Layout>

            {/* Lists */}
            <Menu links={links} />

            <StudentList students={students} />

            {/* State */}
            <Counter />
            <CourseDetails />
            <LivePreview />

            {/* Mini Projects */}
            <TodoApp />
            <StudentFilter students={students} />
        </div>
    );
}

export default App;
