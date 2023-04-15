export default function AddContacts({
    newName,
    handleNameChange,
    handlePhoneNumberChange,
    newPhoneNumber,
    handleNameSubmit
}) {
    return (
        <form onSubmit={handleNameSubmit}>
            <div>
                <h2>Add New Contact</h2>
                Name: <input onChange={handleNameChange} value={newName} />
                PhoneNumber:{' '}
                <input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}
