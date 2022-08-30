function Card (props){
    return (
      <>
        <div className="card_container">
          <img
            className="course_photo"
            alt="course pic"
            src={props.courseInfo.image}
          />
          <div className="course_title">{props.courseInfo.title}</div>
          <div className="course_description">{props.courseInfo.headline}</div>
          <div className="course_price">{props.courseInfo.price}</div>
        </div>
      </>
    );
}
export default Card