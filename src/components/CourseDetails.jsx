import { useState } from "react";

export default function CourseDetails() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h3>React Course</h3>

            <button onClick={() => setShow(!show)}>
                {show ? "Hide details" : "Show details"}
            </button>

            {show && <p>This course teaches components, props, and state.</p>}
        </div>
    );
}
