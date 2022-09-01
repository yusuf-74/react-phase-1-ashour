import React from "react";

function CourseNav() {
  return (
    <nav class="courses_nav">
      <ul class="specialization_list">
        <li>
          <button class="click py">Python</button>
        </li>
        <li>
          <button class="click excel">Excel</button>
        </li>
        <li>
          <button class="click web">Web Development</button>
        </li>
        <li>
          <button class="click java">JavaScript</button>
        </li>
        <li>
          <button class="click data">Data Analysis</button>
        </li>
        <li>
          <button class="click aws">AWS Certification</button>
        </li>
        <li>
          <button class="click draw">Drawing</button>
        </li>
      </ul>
    </nav>
  );
}
export default CourseNav;
