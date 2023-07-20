import React from "react";
import "./Carousel.css";

function CarouselComp(props) {
  return (
    <div
      className="carousel carousel-fade slide"
      id="mycarousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          data-bs-target="#mycarousel"
          className="active"
          data-bs-slide-to="0"
        ></button>
        <button data-bs-target="#mycarousel" data-bs-slide-to="1"></button>
        <button data-bs-target="#mycarousel" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src="https://ashokitech.com/uploads/banner/1378595783_1680867087.jpg"
            width="100%"
            height="350"
          />
          <div className="carousel-caption">
            <h3 className="text-danger">Java Real time Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nobis libero explicabo nisi possimus non porro hic. Soluta quam ut
              corporis labore, enim rerum distinctio, nesciunt est iste dicta
              ipsam?
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://ashokitech.com/uploads/banner/318849497_1680867115.jpg"
            width="100%"
            height="350"
          />
          <div className="carousel-caption">
            <h3 className="text-primary">DevOps With AWS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nobis libero explicabo nisi possimus non porro hic. Soluta quam ut
              corporis labore, enim rerum distinctio, nesciunt est iste dicta
              ipsam?
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img
            src="https://ashokitech.com/uploads/banner/1352080580_1680867036.jpg"
            width="100%"
            height="350"
          />
          <div className="carousel-caption">
            <h3 className="text-success">Java fullstack</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nobis libero explicabo nisi possimus non porro hic. Soluta quam ut
              corporis labore, enim rerum distinctio, nesciunt est iste dicta
              ipsam?
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-target="#mycarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-target="#mycarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default CarouselComp;
