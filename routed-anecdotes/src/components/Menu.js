import { Link } from "react-router-dom"

const Menu = () => {
    const padding = {
        paddingRight: 20
    }
    return (
        <div>
            <Link style={padding} to="/">anecdotes</Link>
            <Link style={padding} to="create-new">create new</Link>
            <Link style={padding} to="about">about</Link>
        </div>
    )
}


export default Menu