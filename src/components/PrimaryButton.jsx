export default function PrimaryButton({ label, type = "primary" }) {
    return <button className={type}>{label}</button>;
}
