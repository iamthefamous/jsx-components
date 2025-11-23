import { useState } from "react";

export default function LivePreview() {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>You typed: {text || "nothing yet..."}</p>
        </div>
    );
}
