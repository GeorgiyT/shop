import React from 'react'

const clientsList = ({clients}) => {
    return (
        <ul className="clientsList">
            {clients.map((client) => (<li key={client.id}>{client.name}</li> ))}
        </ul>
    );
}

export default clientsList;