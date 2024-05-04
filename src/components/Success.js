import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Success() {
    const [count, setCount] = useState(15);
    const navigate = useNavigate();
    useEffect(() => {
        setInterval(() => setCount((count) => count - 1), 1000)
        setTimeout(() => navigate('/'), 15000);
    }, [navigate])
    return (
        <h5 className='mt-5'>
            <div>Your order have been placed successfully. You will be redirected in {" "} {count} seconds.</div>
        </h5>
    )
}

export default Success