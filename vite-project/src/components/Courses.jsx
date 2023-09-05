import { Card, Typography } from "@mui/material";
import  { useState, useEffect } from "react";
function Courses() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(callback1);
    }, []);
    return (
        <div>
            Courses
            <div style={{ display: "flex", flexWrap: "wrap",  }}>
                {courses.map((course) => {
                    return <Course course={course} />;
                })}
            </div>
        </div>
    );
}

function Course(props) {
    return (
        <Card
            style={{
                border: "1px solid black",
                margin: 10,
                width: 200,
                minHeight: 200,
            }}
        >
            <Typography variant="h4" textAlign={"center"}>
                {" "}
                {props.course.title}
            </Typography>
            <br />
            <Typography textAlign={"center"}>
                {props.course.description}
            </Typography>
            <br />
            <img src={props.course.imageLink} style={{ width: 200 }} />
        </Card>
    );
}
export default Courses;

