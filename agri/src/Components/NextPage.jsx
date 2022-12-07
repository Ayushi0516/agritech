import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const NextPage = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.count);
    const previousPage = () => {
        navigate('/');
    }
  return (
    <div>
        Count value: { count }
        <button
        onClick={() => previousPage()}
        >Previous Page</button>
    </div>
  )
}

export default NextPage