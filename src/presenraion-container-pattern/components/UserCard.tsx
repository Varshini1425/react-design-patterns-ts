// Presentation component


import React from 'react'

interface UserCardProps{
    name:string;
    email:string;
    onEdit : () => void;
}

const UserCard : React.FC<UserCardProps> = ({name, email, onEdit}) => {
  return (
    <div className='user-card' style={{ border: "1px solid #ddd", padding: "20px", margin: "20px" }}>
        <h2>{name || 'Loading....'}</h2>
        <p>{email || 'Loading....'}</p>
        <button onClick={onEdit}>Edit</button>
    </div>
  )
}

export default UserCard