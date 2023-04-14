export default function Exercise({ parts }) {
    return (
        <h5>
            This part has{' '}
            <b>{parts.reduce((sum, part) => (sum += part.exercises), 0)}</b> Exercises
        </h5>
    )
}
