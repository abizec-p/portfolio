import image1 from "../assets/images/duotone.jpg"
import duotoneEffect from "../assets/images/duotone.jpg";
import responsivedesign from "../assets/images/responsivedesign.png";
import socialMediaMarketing from "../assets/images/socialmediamarketting.jpg";
import reactBeginners from "../assets/images/reactBeginners.jpeg";
import photographyLightShadows from "../assets/images/photographyLightShadows.jpeg";
import mindfulnessMeditation from "../assets/images/mindfulnessMeditation.png";
import { Link } from "react-router-dom";
export default function Mainblog() {
     const blogData = [
       {
         id: 1,
         title: "How to create a duotone effect in Photoshop",
         description: [
           "Hey, this is a tutorial on how to create a duotone effect in Photoshop with a step-by-step process. Hope this helps you guys.",
         ],
         image: [duotoneEffect],
         category: "Design",
       },
       {
         id: 2,
         title: "The Ultimate Guide to Responsive Web Design",
         description: [
           "In this guide, you'll learn how to make your websites look great on any device, from mobile to desktop, with responsive design techniques.",
         ],
         image: [responsivedesign],
         category: "Web Development",
       },
       {
         id: 3,
         title: "Top 5 Tips for Effective Social Media Marketing",
         description: [
           "Looking to improve your social media presence? Here are the top five tips to help you engage your audience and grow your followers.",
         ],
         image: [socialMediaMarketing],
         category: "Marketing",
       },
       {
         id: 4,
         title: "Getting Started with React for Beginners",
         description: [
           "This article covers the basics of React, including how to set up your first project and understand key concepts like components and hooks.",
         ],
         image: [reactBeginners],
         category: "Web Development",
       },
       {
         id: 5,
         title: "Mastering Light and Shadows in Photography",
         description: [
           "Learn how to take your photography skills to the next level by mastering light and shadow techniques for more dramatic and captivating photos.",
         ],
         image: [photographyLightShadows],
         category: "Photography",
       },
       {
         id: 6,
         title: "The Benefits of Mindfulness and Meditation",
         description: [
           "Discover the mental and physical health benefits of incorporating mindfulness and meditation into your daily routine.",
         ],
         image: [mindfulnessMeditation],
         category: "Health & Wellness",
       },
     ];


    return (
      <section className="main-content">
        <div className="blog-heading">
          <h1>
            {" "}
            <span className="cursive">Welcome to,</span>
            <br />
            Jake`s Wander Space
          </h1>
        </div>
        <div className="blog-main-title">
          <h1>Recent</h1>
        </div>
        <div className="blog-content">
          {blogData.map((blog) => (
            <Link to="singleBlog">
              <div className="blog-container" key={blog.id}>
                <img src={blog.image[0]} alt="dutone image" />
                <div className="blog-container-details">
                  <h1>{blog.title}</h1>
                  <p>{blog.description[0]}</p>
                  <div className="blog-container-tags">
                    <p>photoshop</p>
                    <p>Duotone</p>
                    <p>Image</p>
                  </div>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>
      </section>
    );
    
}