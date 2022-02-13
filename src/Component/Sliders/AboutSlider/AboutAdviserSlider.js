import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import tm1 from '../../../Assets/images/tm1.jpg'
import tm2 from '../../../Assets/images/tm2.jpg'
import tm3 from '../../../Assets/images/tm3.jpg'
import tm4 from '../../../Assets/images/tm4.jpg'
import tm5 from '../../../Assets/images/tm5.jpg'
import tm6 from '../../../Assets/images/tm6.jpg'
import me from '../../../Assets/images/me.jpeg'
export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: true,
    rtl: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
    ],
  }

  return (
    <Slider {...slickDefaults}>
      <div>
        <div class='item'>
          <div class='team-item'>
            <div class='team-box'>
              <div class='listing-effect'>
                <img alt='TravelRide' src={tm1} />
              </div>
              <div class='team-item-detail'>
                <div class='team-info'>
                  <h3 class='team-title'>Jamara Corliss</h3>
                  <div class='sub-title'>Founder</div>
                </div>
                <div class='social_icon'>
                  <ul>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fas fa-rss'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='team-item'>
            <div class='team-box'>
              <div class='listing-effect'>
                <img alt='TravelRide' src={tm2} />
              </div>
              <div class='team-item-detail'>
                <div class='team-info'>
                  <h3 class='team-title'>Jamara Corliss</h3>
                  <div class='sub-title'>Founder</div>
                </div>
                <div class='social_icon'>
                  <ul>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fas fa-rss'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='team-item'>
            <div class='team-box'>
              <div class='listing-effect'>
                <img alt='TravelRide' src={tm3} />
              </div>
              <div class='team-item-detail'>
                <div class='team-info'>
                  <h3 class='team-title'>Jamara Corliss</h3>
                  <div class='sub-title'>Founder</div>
                </div>
                <div class='social_icon'>
                  <ul>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fas fa-rss'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='team-item'>
            <div class='team-box'>
              <div class='listing-effect'>
                <img alt='TravelRide' src={tm4} />
              </div>
              <div class='team-item-detail'>
                <div class='team-info'>
                  <h3 class='team-title'>Jamara Corliss</h3>
                  <div class='sub-title'>Founder</div>
                </div>
                <div class='social_icon'>
                  <ul>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fas fa-rss'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='team-item'>
            <div class='team-box'>
              <div class='listing-effect'>
                <img alt='TravelRide' src={tm5} />
              </div>
              <div class='team-item-detail'>
                <div class='team-info'>
                  <h3 class='team-title'>Jamara Corliss</h3>
                  <div class='sub-title'>Founder</div>
                </div>
                <div class='social_icon'>
                  <ul>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fas fa-rss'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='team-item'>
            <div class='team-box'>
              <div class='listing-effect'>
                <img alt='TravelRide' src={me} />
              </div>
              <div class='team-item-detail'>
                <div class='team-info'>
                  <h3 class='team-title'>Jamara Corliss</h3>
                  <div class='sub-title'>Founder</div>
                </div>
                <div class='social_icon'>
                  <ul>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>
                        <i class='fas fa-rss'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
