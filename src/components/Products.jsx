import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, rating, reviews, tag, imgSrc } = product;

  return (
    <div className="product">
      <div className="product_img relative">
        <img
          src={product.imgSrc}
          className="lazy-load w-full max-h-[265px] object-contain"
          alt={name}
        />
        {tag && (
          <button
            className={`hover:bg-[#151515] bg-[#fafafa] hover:text-white cursor-pointer h-[23px] w-[90px] border-[2px] border-[#151515] text-[#151515] text-[11px] font-bold absolute top-[10px] right-[10px] rounded-full`}
          >
            {tag}
          </button>
        )}
        <div className="hover_popup flex w-[calc(100%-30px)] left-[15px] bottom-[-25px] opacity-0 items-center bg-[#ffffffcf] p-[5px] rounded-full absolute gap-4 shadow-lg transition-all">
          <div>
            <img
              src="./img/review_person1.png"
              className="size-[54px] rounded-full object-cover"
              alt="Reviewer"
            />
          </div>
          <div>
            <p className="text-[14px] text-[#1b1f22] leading-[1] pb-2 whitespace-nowrap">
              “Ruikt super lekker!”
            </p>
            <img src="./img/5-stars.png" className="w-[60px]" alt="stars" />
          </div>
          <span className="absolute inline-block right-[45px] bottom-[-10px] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-r-[8px] before:border-t-[10px] before:border-l-transparent before:border-r-transparent before:border-t-white w-[15px] h-[10px]"></span>
        </div>
      </div>
      <div className="product_bottom px-3 flex justify-between items-center pt-5 gap-[15px]">
        <div className="product_bottom_left">
          <h5 className="text-[14px] font-bold text-[#001623] leading-[2]">
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
            <p className="text-[11px] text-[#444444] flex gap-[6px] items-center leading-[1]">
              {[...Array(rating)].map((_, index) => (
                <AiFillStar key={index} className="text-[#ffb400]" />
              ))}
              ({reviews})
            </p>
          </div>
        </div>
        <a
          href="#"
          className="product_button relative z-[999999] flex items-center justify-center border-[2px] border-[#ff6800] rounded-[10px] w-[55px] h-[40px]"
        >
          <span className="text-[30px] text-[#ff6800] font-light">+</span>
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
    },
    {
      name: "Oud Satin Mood",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      tag: "Nieuw",
      imgSrc: "/assets/oud-satin-mood-maison-francis-kurkdjian-product.png",
    },
    {
      name: "Lost Cherry",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      imgSrc: "/assets/lost-cherry-tom-ford-product.png",
    },
    {
      name: "Baccarat Rouge",
      price: "49,00",
      oldPrice: "256",
      rating: 5,
      reviews: 632,
      tag: "2 + 1 Gratis",
      imgSrc: "/assets/baccarat-rouge-540-product.png",
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
