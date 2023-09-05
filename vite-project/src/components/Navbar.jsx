import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);
    useEffect(() => {
        function callback2(data) {
            if (data.username) {

                setUserEmail(data.username);
            }
        }

        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(callback1);
    }, []);
    if (userEmail) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 10,
                }}
            >
                <div>
                    <Typography variant="h6" component="div" gutterBottom>
                        Vdemy
                    </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        {userEmail}
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/signup");
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
            }}
        >
            <div>
                <Typography variant="h6" component="div" gutterBottom>
                    Vdemy
                </Typography>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/signin");
                        }}
                    >
                        Signin
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >
                        Signup
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
