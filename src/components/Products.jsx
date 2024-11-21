import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, rating, reviews, tag, imgSrc, reviewPerson } =
    product;

  return (
    <div className="product">
      <div className="product_img relative group aspect-square">
        <img
          src={product.imgSrc}
          className="lazy-load w-full max-h-[265px] object-contain"
          alt={name}
        />
        {tag && (
          <button
            className={`${
              tag === "Nieuw"
                ? "hover:bg-[#FF6600] border-[#FF6600] text-[#FF6600] hover:text-white bg-[#fafafa]"
                : tag === "2 + 1 Gratis"
                ? "hover:bg-white border-[#3992ff] bg-[#3992ff] hover:text-[#3992ff] text-white"
                : "hover:bg-[#151515] border-[#151515] text-[#151515] hover:text-white bg-[#fafafa]"
            } cursor-pointer h-[21px] sm:h-[23px] sm:w-[90px] px-3 border-[2px] text-[10px] sm:text-[11px] font-bold absolute top-[10px] right-[10px] rounded-full transition`}
          >
            {tag}
          </button>
        )}
        <div className="hover_popup flex sm:flex-row flex-col w-[calc(100%-30px)] left-[15px] bottom-[-25px] opacity-0 items-center bg-[#ffffffcf] p-[5px] sm:rounded-full rounded-[20px] absolute sm:gap-4 gap-1 shadow-lg transition-all group-hover:opacity-100 group-hover:bottom-0">
          <div>
            <img
              src={reviewPerson}
              className="size-[40px] sm:size-[54px] rounded-full object-cover"
              alt="Reviewer"
            />
          </div>
          <div>
            <p className="sm:text-left text-center text-[14px] text-[#1b1f22] leading-[1] pb-2 sm:whitespace-nowrap">
              “Ruikt super lekker!”
            </p>
            <p className="text-[11px] text-[#444444] flex gap-[1px] items-center sm:justify-start justify-center leading-[1]">
              {[...Array(rating)].map((_, index) => (
                <FaStar key={index} className="text-[#ffb400]" />
              ))}
            </p>
          </div>
          <span className="absolute inline-block right-[45px] bottom-[-10px] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-r-[8px] before:border-t-[10px] before:border-l-transparent before:border-r-transparent before:border-t-white w-[15px] h-[10px]"></span>
        </div>
      </div>

      <div className="product_bottom px-3 flex justify-between items-center pt-5">
        <div className="product_bottom_left">
          <h5 className="text-[14px] font-bold text-[#001623] sm:leading-[2]">
            {name}
          </h5>
          <div className="flex items-center gap-2 flex-wrap pt-[5px] pb-[8px] relative">
            <div className="price flex items-center">
              <p className="font-medium text-[14px] text-[#323232]">€{price}</p>
              {oldPrice && (
                <p className="ml-1 font-medium text-[#b3b3b3] relative before:absolute before:h-[1px] before:bg-[#b3b3b3] before:w-full before:left-0 before:top-[50%] before:translate-y-[-50%]">
                  €{oldPrice}
                </p>
              )}
            </div>
            <p className="text-[11px] text-[#444444] flex gap-[1px] items-center leading-[1]">
              {[...Array(rating)].map((_, index) => (
                <FaStar key={index} className="text-[#ffb400]" />
              ))}
              ({reviews})
            </p>
          </div>
        </div>
        <a
          href="#"
          className="product_button relative z-[999999] hover:opacity-[0.8] opacity-1 flex items-center justify-center border-[2px] border-[#ff6800] rounded-[10px] sm:w-[55px] w-[42px] min-w-[35px] sm:h-[40px] h-[32px] min-h-[30px]"
        >
          <span className="text-[25px] sm:text-[30px] text-[#ff6800] font-light">
            +
          </span>
        </a>
      </div>
    </div>
  );
};

export default function Products() {
  const products = [
    {
      name: "Baccarat Rouge",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      tag: "Populair",
      imgSrc: "/assets/baccarat-rouge-540-product.png",
      reviewPerson: "/assets/review_person1.png",
    },
    {
      name: "Oud Satin Mood",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      tag: "Nieuw",
      imgSrc: "/assets/oud-satin-mood-maison-francis-kurkdjian-product.png",
      reviewPerson: "/assets/review_person2.png",
    },
    {
      name: "Lost Cherry",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      imgSrc: "/assets/lost-cherry-tom-ford-product.png",
      reviewPerson: "/assets/review_person1.png",
    },
    {
      name: "Baccarat Rouge",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      tag: "2 + 1 Gratis",
      imgSrc: "/assets/baccarat-rouge-540-product.png",
      reviewPerson: "/assets/review_person2.png",
    },
  ];

  return (
    <div className="product_area bg-[#fafafa] overflow-hidden">
      <div className="container pb-11 pt-4 grid lg:grid-cols-4 grid-cols-2 sm:px-5 p-0 gap-x-2 gap-y-7">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
