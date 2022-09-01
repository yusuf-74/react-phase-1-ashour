import logo from "./logo.svg";
import "./App.css";
import "./styles/courses.css"
import Section from "./components/CourseSection";
import CourseNav from "./components/CourseNav";
function App() {
  return (
    <>
    <div className="main_content">
      <CourseNav/>
      <Section/>
    </div>
     
    </>
  );
}

export default App;
