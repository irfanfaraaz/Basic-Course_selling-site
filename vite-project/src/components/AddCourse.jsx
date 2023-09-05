import React from 'react'
import { TextField, Button, Card } from '@mui/material'

import { useState } from 'react' 
function AddCourse(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    return(
        <div style={{
            display:"flex", 
            justifyContent:"center",
            }}>
        <Card variant="outlined" style={{width:400, padding:20}}>
        <div>
            <TextField
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                fullWidth
                label="Title" 
                variant="outlined" 
                margin='dense'
            />
            <TextField
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                fullWidth
                label="Description" 
                variant="outlined" 
                margin='dense'
            />
            <TextField
                onChange={(e)=>{
                    setImageLink(e.target.value)
                }}
                fullWidth
                label="Image Link" 
                variant="outlined" 
                margin='dense'
            />
            <Button 
                        size='large'  
                        variant="contained"
                        onClick={() => {
                            function callback2(data) {
                                alert("Course added successfully")
                            }
                            function callback1(res) {
                                res.json().then(callback2)
                            }
                            fetch("http://localhost:3000/admin/courses", {
                                method: "POST",
                                body: JSON.stringify({
                                    title,
                                    description,
                                    imageLink: imageLink,
                                    published: true
                                }),
                                headers: {
                                    "Content-type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            })
                            .then(callback1)
                        }}
                        >
                            Add
                    </Button>
        </div>
        </Card>
        </div>
    )
}
export default AddCourse