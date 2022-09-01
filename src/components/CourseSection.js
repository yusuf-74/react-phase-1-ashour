import Body from "./Body";
import CoursesList from "./CoursesList";
import Header from "./Header";
import { Info } from "./myData";
function Section(props) {
 
  return (
    <>
      <div className="courses_secondary_container">
        <article>
          <Header title={Info.sectionTitle} />
          <Body description={Info.courseDesc} />
          <div className="explore">Explore</div>
        </article>

        <CoursesList />
      </div>
    </>
  );
}
export default Section;
