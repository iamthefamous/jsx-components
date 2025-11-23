export default function Menu({ links }) {
    return (
        <nav>
            <ul style={{ display: "flex", gap: "15px" }}>
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </nav>
    );
}
