import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
    return (
        <div>
            {students.map((s) => (
                <StudentCard key={s.id} name={s.name} group={s.group} track="-" />
            ))}
        </div>
    );
}
