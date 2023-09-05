import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Welcome to Vdemy. Sign up below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={() => {
                        // function callback2(data) {
                        //     localStorage.setItem("token", data.token);
                        //     window.location = "/"

                        // }
                        // function callback1(res) {
                        //     res.json().then(callback2)
                        // }
                        // fetch("http://localhost:3000/admin/signup", {
                        //     method: "POST",
                        //     body: JSON.stringify({
                        //         username: email,
                        //         password: password
                        //     }),
                        //     headers: {
                        //         "Content-type": "application/json"
                        //     }
                        // })
                        // .then(callback1)

                        function callback1(response) {
                            let data = response.data;
                            localStorage.setItem("token", data.token);
                            window.location = "/"
                        }
                        axios.post("http://localhost:3000/admin/signup", {
                            username: email,
                            password: password
                        }).then(callback1)
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
}

export default Signup;