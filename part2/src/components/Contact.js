import Button from "./Button"

export default function Contact({ persons, label, action }) {
    return (
        <ul>
            {persons.map(person => {
                return (
                    <li key={person.name}>
                        <h5>{person.name} : {person.number}</h5><Button label={label} action={() => action(person.id)} />

                    </li>
                )
            })}
        </ul>
    )
}
