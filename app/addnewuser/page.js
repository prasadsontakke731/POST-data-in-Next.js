"use client"
import React, { useState } from 'react'

const AddNewUser = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const handleCLick = async () => {
        console.log(name, email, age);
        let response = await fetch("api/users", {
            method: "POST",
            body: JSON.stringify({ name, age, email })
        })
        response = await response.json()

        if (response.ok) {
            alert("User Successfully Created")
        } else {
            alert("Error Occured while creating new user")
        }
    }
    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            /> <br /><br />
            <input
                type="number"
                value={age}
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
            /> <br /><br />
            <input
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            /> <br /><br />
            <button onClick={handleCLick} className="border text-white p-1  bg-red-500">Add New User</button>
        </div>
    )
}

export default AddNewUser