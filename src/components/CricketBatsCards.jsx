
import { FiShoppingCart, FiEye, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border border-gray-200 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative w-full h-72 bg-cover bg-center">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full shadow-sm z-10">
          <span className="font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through ml-1">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-amber-500 hover:text-white transition-colors shadow">
            <FiShoppingCart className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors shadow">
            <FiEye className="w-4 h-4" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2 z-10">
          {product.isNew && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < product.rating ? 'text-amber-400 fill-current' : 'text-gray-300 fill-current'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-amber-600 transition-colors">
          {product.name}
        </h3>

        <button className="w-full mt-auto py-2 bg-gray-900 hover:bg-amber-600 text-white font-medium rounded-md transition-colors flex items-center justify-center">
          View Details
          <FiChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Premium Cricket Bat Pro Edition",
      category: "Professional",
      imageUrls: [
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      price: 299,
      originalPrice: 349,
      rating: 4,
      isNew: true,
      discount: 15
    },
    {
      id: 2,
      name: "Elite Cricket Bat with Cover",
      category: "Club",
      imageUrls: [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      price: 249,
      rating: 5,
      isNew: false
    },
    {
      id: 3,
      name: "Junior Cricket Bat Lightweight",
      category: "Junior",
      imageUrls: [
        "https://images.unsplash.com/photo-1554357927-6e858b960c06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      price: 149,
      originalPrice: 179,
      rating: 4,
      isNew: true,
      discount: 20
    },
    {
      id: 4,
      name: "Professional Batting Gloves",
      category: "Accessories",
      imageUrls: [
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      price: 59,
      originalPrice: 79,
      rating: 4,
      isNew: false,
      discount: 25
    },
    {
      id: 5,
      name: "Cricket Helmet Pro",
      category: "Safety",
      imageUrls: [
        "https://images.unsplash.com/photo-1593111774242-9dc4850d62f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      price: 129,
      rating: 5,
      isNew: true
    },
    {
      id: 6,
      name: "Cricket Ball Leather",
      category: "Accessories",
      imageUrls: [
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      price: 29,
      originalPrice: 39,
      rating: 3,
      isNew: false,
      discount: 10
    }
  ];

  const slidesToShow = 3;
  const totalSlides = Math.ceil(products.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleProducts = products.slice(
    currentSlide * slidesToShow,
    currentSlide * slidesToShow + slidesToShow
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <FiChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <FiChevronRight className="w-5 h-5 text-gray-700" />
        </button>
        
        {/* Product Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Slider Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-amber-500' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;