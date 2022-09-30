import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/todos'>Todos</Link>
        </>
    )
}