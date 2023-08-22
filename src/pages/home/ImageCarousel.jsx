
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem1 from '../../assets/imagem1.png';
import imagem1p from '../../assets/imagem1p.png';
import imagem2 from '../../assets/imagem2.png';
import'./Home.css';


const images = [imagem1, imagem1p, imagem2]

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000, // Tempo de troca de imagem (4 segundos)
    autoplay: true,
    autoplaySpeed: 4000, // Tempo total do carrossel (4 segundos)
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  
    return (
        <div className="image-carousel">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      );
    }


export default ImageCarousel;