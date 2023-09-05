import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
          <RecoilRoot>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/course/:courseId" element={<Course />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </Router>
          </RecoilRoot>
        </div>
    );
}

export default App;
