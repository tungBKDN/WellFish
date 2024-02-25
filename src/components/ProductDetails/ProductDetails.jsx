import React from 'react'
import Img1 from "../../assets/Hero/1.jpg";

const Data = [
  {
    id: 1,
    img: Img1,
    title: "Ethnic",
    descpirtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error, deleniti quia sint nobis adipisci aliquid maxime, doloremque placeat vero necessitatibus temporibus. Veritatis cum minima incidunt recusandae nulla, voluptatem fugiat dignissimos. Eos quo atque hic autem quos quis temporibus vitae debitis aut animi obcaecati doloremque vel veniam, id odio cumque? Temporibus vel deserunt incidunt perferendis quia in ipsa voluptate maiores, eaque esse? Voluptates ullam, qui minima reprehenderit repudiandae laudantium animi.",
    rating: 5.0,
    color: "White",
    aosDelay: "0"
  }
]

function ProductDetails(props) {

  const [isExpanded, setIsExpanded] = React.useState(false);
  const words = Data[0].descpirtion.split(" ");
  const isLongText = words.length > 10;
  const displayText = isExpanded ? Data[0].descpirtion : words.slice(0, 7).join(" ") + "...";

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  }
  const [quantity, setQuantity] = React.useState(1);

  function handleAddToCart() {
    console.log("Add to cart");
  }

  function updateQuantity(value, type) {
    if (type === "+") {
      setQuantity(value + 1);
    } else {
      if (value > 1) {
        setQuantity(value - 1);
      }
    }

  }



  return (

   
      <div className=" pt-24">
        <div className='flex items-center justify-center  '>
          <div className=''>
            <img src={Data[0].img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain" />
          </div>


          <div className='ml-4 w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain'>

            <div className='mb-4 justify-center'>

              <h1 className='text-2xl font-bold'>{Data[0].title}</h1>
              <p className='text-sm'>{displayText}</p>
              {isLongText && (
                <button onClick={handleReadMore}
                  className='text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}

              <p className='text-xl font-bold '>Price: $100</p>
            </div>

            <div className='mb-4'>
              <h1 className='text-2xl font-bold'>Select Size</h1>
              <div className='flex'>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-black hover:text-white'>S</button>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-black hover:text-white'>M</button>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-black hover:text-white'>L</button>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-black hover:text-white'>XL</button>
              </div>
            </div>

            <div className='mb-4'>
              <h1 className='text-2xl font-bold'>Select Color</h1>
              <div className='flex'>
                <button className='bg-gray-200 border  text-black px-4 py-2 hover:bg-black hover:text-white'>White</button>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-black hover:text-white'>Black</button>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-black hover:text-white'>Gray</button>
              </div>
            </div>

            <div className='mb-8	items-end'>
              <h1 className='text-2xl font-bold'>Quantity</h1>
              <div className='flex'>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-gray-400'
                  onClick={() => updateQuantity(quantity, '-')}>-</button>
                <button className='bg-gray-200 text-black px-4 py-2'>{quantity}</button>
                <button className='bg-gray-200 text-black px-4 py-2 hover:bg-gray-400'
                  onClick={() => updateQuantity(quantity, '+')}>+</button>
              </div>
            </div>

            <div className='pb-16'>
              <button className="bg-black text-white px-4 py-2 ">Add to Cart</button>
            </div>
          </div>
        </div>



      </div>
    
  )
}

export default ProductDetails