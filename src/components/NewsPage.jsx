import Header from "./Header";
import "../css/newsPage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function NewsPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="newsPage">
      <div>
        {/* <img src="/assits/Rectangle152.png" alt="photo" /> */}
        <Header />
        <p>TIN TỨC</p>
      </div>
      <div className="latestNews">
        <div>
          <p>TIN TỨC MỚI NHẤT VỀ</p>
          <select>
            <option value="1">Hungary</option>
            <option value="2">1 Noi nao do</option>
          </select>
        </div>
        <Carousel responsive={responsive}>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
          <div className="carouselItem">
            <p>TIN TỨC THỊ TRƯỜNG</p>
            <p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
            <button>Xem thêm</button>
            <img src="/assits/Rectangle175.png" alt="photo" />
          </div>
        </Carousel>
        ;
      </div>
       <div className="questions">
        <img src="/assits/test1.png" alt="photo" />
        <p>NHỮNG CÂU HỎI PHỔ BIẾN VỀ </p>
        <div>
          <select>
            <option>Quy trình - Thủ tục</option>
            <option disabled> Thông tin cần render</option>
          </select>
          <select>
            <option>Chi phí - Thuế</option>
            <option disabled> Thông tin cần render</option>
          </select>
          <select>
            <option>Dịch vụ từ Global Living</option>
            <option disabled> Thông tin cần render</option>
          </select>
          <select>
            <option>Câu hỏi chi tiết</option>
            <option disabled> Thông tin cần render</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
