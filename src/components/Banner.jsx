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
        autoplaySpeed : 4000
    }
    return ( 
        <div style={{height:'100px' , margin : "0 10px"}}>
        <Slider {...settings}>
          <div >
            <a href="https://ncov.kdca.go.kr/" target="_blank" ><img style={{width:"100%",  objectFit:'cover'}} src={require('../img/banner1.png')} alt="배너1" /></a>
          </div>
          <div >
            <a href="https://www.gov.kr/portal/rcvfvrSvc/main" target="_blank"><img style={{width:"100%",  objectFit:'cover'}} src={require('../img/banner2.png')} alt="배너2" /></a>
          </div>
          <div>
            <a href="https://helpline.kdca.go.kr/cdchelp/ph/ptlcontents/selectPtlConSent.do?schSno=110&menu=B0101" target="_blank"><img style={{width:"100%",  objectFit:'cover'}} src={require('../img/banner3.jpg')} alt="배너3" /></a>
          </div>
        </Slider>
      </div>
    );
}

export default Banner;