import { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentFilter({ students }) {
    const [group, setGroup] = useState("all");

    const filtered = group === "all"
        ? students
        : students.filter((s) => s.group === group);

    return (
        <div>
            <h3>Filter Students</h3>

            <button onClick={() => setGroup("all")}>All</button>
            <button onClick={() => setGroup("SE-101")}>SE-101</button>
            <button onClick={() => setGroup("SE-102")}>SE-102</button>
            <button onClick={() => setGroup("SE-103")}>SE-103</button>

            {filtered.map((s) => (
                <StudentCard
                    key={s.id}
                    name={s.name}
                    group={s.group}
                    track="-"
                />
            ))}
        </div>
    );
}
