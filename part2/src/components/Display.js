export default function Display({ parts }) {
    return (
        <>
            {parts.map(part => {
                return (
                    <li key={part.id}>
                        <h5>{part.name}</h5>

                        <h5>{part.exercises}</h5>
                    </li>
                )
            })}
        </>
    )
}
