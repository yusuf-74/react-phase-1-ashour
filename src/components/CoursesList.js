import Card from "./CourseCard";
function CoursesList(props){
    const data = {courses: [
        {
          id: 394676,
          title: "Learn Python: The Complete Python Programming Course",
          headline:
            "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
          rating: 4.372561,
          image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
          author: 
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          
          price: 16.99,
          people: "(505)",
        },
        {
          id: 396876,
          title: "Learning Python for Data Analysis and Visualization",
          headline:
            "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
          rating: 4.3899083,
          image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
          author: 
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          
            price: 19.99,
          people: "(505)",
        },
        {
          id: 405878,
          title: "Python for Beginners - Learn Programming from scratch",
          headline:
            "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
          rating: 4.40372,
          image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
          author: 
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            }
            ,
          
          price: 14.99,
          people: "(505)",
        },
        {
          id: 426570,
          title: "Learn Python: Python for Beginners",
          headline:
            "Python introduction for beginners. Learn complete Python from scratch!",
          rating: 4.2765956,
          image: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 16.99,
          people: "(505)",
        },
        {
          id: 449532,
          title: "Python Beyond the Basics - Object-Oriented Programming",
          headline:
            "From Classes To Inheritance - OOP In-Depth For Python Programmers",
          rating: 4.3240743,
          image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 17.99,
          people: "(505)",
        },
        {
          id: 482754,
          title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
          headline:
            "2 courses in 1. Python and Selenium WebDriver from scratch for Automation Testing, SQL Crash Course, Framework Design",
          rating: 4.654122,
          image: "https://img-c.udemycdn.com/course/750x422/482754_7146_6.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 18.99,
          people: "(505)",
        },
        {
          id: 519554,
          title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
          headline:
            "Short, colorful apps and games you can use to teach and learn programming at any age! Chromebook, PC, Mac and Linux!",
          rating: 4.527941,
          image: "https://img-c.udemycdn.com/course/750x422/519554_da68_6.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 15.99,
          people: "(505)",
        },
        {
          id: 535622,
          title: "Python for Data Structures, Algorithms, and Interviews!",
          headline:
            "Get a kick start on your career and ace your coding interviews!",
          rating: 4.5323277,
          image: "https://img-c.udemycdn.com/course/750x422/535622_3bc0.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 19.99,
          people: "(505)",
        },
        {
          id: 543600,
          title: "Automate the Boring Stuff with Python Programming",
          headline:
            "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
          rating: 4.6973357,
          image: "https://img-c.udemycdn.com/course/750x422/543600_64d1_4.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 14.99,
          people: "(505)",
        },
        {
          id: 567828,
          title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
          headline:
            "Learn Python like a Professional  Start from the basics and go all the way to creating your own applications and games",
          rating: 4.6162734,
          image: "https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 34.99,
          people: "(505)",
        },
        {
          id: 577248,
          title: "Python for Beginners with Examples",
          headline:
            "A Python course for the busy ones to learn Python programming. Learn and practice Python by building two complete apps.",
          rating: 4.4764705,
          image: "https://img-c.udemycdn.com/course/750x422/577248_3b6f_13.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 16.99,
          people: "(505)",
        },
        {
          id: 622414,
          title: "Taming Big Data with Apache Spark and Python - Hands On!",
          headline:
            "PySpark tutorial with 20+  hands-on examples of analyzing large data sets on your desktop or on Hadoop with Python!",
          rating: 4.5037427,
          image: "https://img-c.udemycdn.com/course/750x422/622414_03f5_4.jpg",
          author: [
            {
              name: "ashour",
              jop: "600000+ Students | Wordwide Use 183 Countries | 190+ Courses",
              image:
                "https://img-c.udemycdn.com/user/100x100/254593_efe3_3.jpg",
            },
          ],
          price: 15.99,
          people: "(505)",
        },
      ],
    };
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