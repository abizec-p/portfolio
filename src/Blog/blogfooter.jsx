 import { Link } from "react-router-dom";
export default function BlogFooter() {
    return (
      <>
        <section className="blog-footer">
          <div>
            <h1>Abishek pariyar</h1>
            <li>"+14376651393"</li>
            <li>pariyarabishek60@gmail.com</li>
            <li>Mississauga,ON, Canada</li>
                </div>
                <div><h1>I just wanted to make a blog site.</h1></div>
          <div>
            <h1>Links</h1>
            <ul>
              <li>
                <Link to="/">
                  <div>Back to portfolio</div>
                </Link>
              </li>
              <li>
                <Link to="/about-blog">About Blog</Link>
              </li>
              <li>
                <Link to="/about-blog">Popular</Link>
              </li>
              <li>
                <Link to="/about-blog">Contact</Link>
              </li>
            </ul>
                </div>
                
            </section>
            <p>created by abishekpariyar @2024</p>
      </>
    );
}