import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false ,
        autoplay: true,
        autoplaySpeed : 3000
    }
    return ( 
        <div style={{height:'100px',border:"1px solid black" , margin : "0 10px"}}>
        <Slider {...settings}>
          <div>
            <img src="" alt="배너1" />
          </div>
          <div>
            <img src="" alt="배너2" />
          </div>
          <div>
            <img src="" alt="배너3" />
          </div>
         
        </Slider>
      </div>
     );
}
 
export default Banner;