import React from "react";

function Carousel(props) {
  return (
    <div>
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="https://www.goodfreephotos.com/albums/canada/alberta/jasper-national-park/fog-on-the-high-mountains-with-trees-in-jasper-national-park-alberta-canada.jpg"
              width="100%"
              height="300"
            />
            <div className="carousel-caption">
              <h3>Moutains Images</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae, iusto quia? Consequuntur voluptatem culpa officia
                cupiditate quasi minus assumenda, excepturi quis. Quae, repellat
                molestias? Optio laborum perspiciatis omnis sed vero veritatis
                iure illum adipisci iste, rem, tenetur ab est recusandae.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://th.bing.com/th/id/R.ea335a92212de2ba20f4431fc142e591?rik=jq1QW2AoKmrz0w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2funXHCFo.jpg&ehk=%2b%2buraQYm1sBpncE8EMO01vH6ISW250T6LyK4ScyUIjc%3d&risl=&pid=ImgRaw&r=0"
              width="100%"
              height="300"
            />
            <div className="carousel-caption">
              <h1>Ocean</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eius sit recusandae cum eum saepe quam voluptas qui
                maxime at.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://th.bing.com/th/id/OIP.y-zdNl42-VDyuaxn6XjtTQHaFQ?pid=ImgDet&rs=1"
              width="100%"
              height="450"
            />
            <div className="carousel-caption">
              <h3>Waterfall Image</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                numquam vel quo nemo voluptas ex nobis repellat esse ut quam
                rerum deleniti cumque perspiciatis voluptates, necessitatibus
                dignissimos illo officia! Qui!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#mycarousel"
          data-bs-slide="prev"
          type="button"
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
    </div>
  );
}

export default Carousel;
