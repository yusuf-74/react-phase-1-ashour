import Card from "./CourseCard";
import {data} from "./myData";
function CoursesList(props){
   
    return (
      <>
        <div className="courses_list">
          {data.courses.map((el, index) => {
            return <Card courseInfo={el} key={el.id} />;
          })}
        </div>
      </>
    );
}
export default CoursesList;