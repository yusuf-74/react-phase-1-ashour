import Body from "./Body";
import CoursesList from "./CoursesList";
import Header from "./Header";
function Section(props) {
  const Info = {
    courseName: "Python",
    sectionTitle: "Expand your career opportunities with Python",
    courseDesc:
      "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ...",
  };
  return (
    <>
      <div className="courses_secondary_container">
        <article>
          <Header title={Info.sectionTitle} />
          <Body desc={Info.courseDesc} />
          <div className="explore">Explore</div>
        </article>

        <CoursesList />
      </div>
    </>
  );
}
export default Section;
