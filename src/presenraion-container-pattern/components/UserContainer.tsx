// Container Component


import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';


interface User{
    name : string;
    email : string;
}

const UserContainer: React.FC = () => {

const [user, setUser] = useState<User> ({name: "", email: ""});
const [currentIndex, setCurrentIndex] = useState<number>(1);
const [isFetching, setIsFetching] = useState<boolean>(true);

useEffect(()=>{
    if(!isFetching) return;


    const fetchData = async () =>{
        try{
            const response = await fetch (`https://jsonplaceholder.typicode.com/users/${currentIndex}`);
            if(!response.ok){
                throw new Error("user not found");
            }

            const data = await response.json();
            setUser({name:data.name, email: data.email});
            setCurrentIndex((prevIndex) => (prevIndex < 10 ? prevIndex + 1: 1));
        }
        catch (error){
            console.error("Error fetching user data", error);
        }
    };

    const intervalId = setInterval(fetchData,2000);

    return () => clearInterval(intervalId);
}, [isFetching, currentIndex]);

const handleEdit = () => {
    alert(`Edit the user`);
}


const toggleFetching = () => {
    setIsFetching((prev) => !prev);
}


  return (
    <>
    <UserCard name={user.name} email={user.email} onEdit={handleEdit} />
    <button onClick={toggleFetching}>
      {isFetching ? "Stop Fetching" : "Start Fetching"}
    </button>
    </>
    
  )
}

export default UserContainer