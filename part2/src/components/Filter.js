export default function Filter({ search, handleSerchChange }) {
    return (
        <div>
            <h2>Filter Contacts By Name</h2>
            <form>
                Filter by <input value={search} onChange={handleSerchChange} />
            </form>
        </div>
    )
}
