import { useLocation } from 'react-router-dom';
import React from 'react';

function NewPage() {
    const location = useLocation();
    const data = location.state;

    return (
    <div>
        <h1>New Page</h1>
        {data && (
        <>
            <p>Message: {data.message}</p>
            <p>ID: {data.id}</p>
        </>
        )}
    </div>
    );
}
export default NewPage;