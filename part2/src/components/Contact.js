export default function Contact({ persons }) {
    return (
        <ul>
            {persons.map(person => {
                return (
                    <li key={person.name}>
                        <h5>{person.name}</h5>
                    </li>
                )
            })}
        </ul>
    )
}
