import "./Main.css";
import Image from "./Images";

function Main() {
  return (
    <div className="mainContainer">
      <div className="section1">
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/7247412/pexels-photo-7247412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            width="300"
            height="300"
          />
        </div>
        <div className="contentContainer">
          <h4>Hi there !!!</h4>
          <h2>I'm Sneha Reddy</h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            nulla nisi rerum sequi dolorum facilis deleniti fuga dolorem
            dignissimos tempora.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            nulla nisi rerum sequi dolorum facilis deleniti fuga dolorem
            dignissimos tempora. Lorem ipsum dolor sit, amet consectetur
          </p>
          <p>
            <b>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam nulla nisi rerum sequi dolorum facilis deleniti fuga
              dolorem dignissimos tempora.
            </b>
          </p>
        </div>
      </div>

      <div className="section2">
        <Image
          image="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="Profile"
        />
        <Image
          image="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="Resume"
        />
        <Image
          image="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="Project"
        />
        <Image
          image="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contact"
        />
      </div>
    </div>
  );
}

export default Main;
