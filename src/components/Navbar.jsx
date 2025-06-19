import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">Cricket Bat Co.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <Link to="/products" className="hover:text-amber-400 transition">Products</Link>
            <Link to="/how-we-build" className="hover:text-amber-400 transition">How We Build</Link>
            <Link to="/about" className="hover:text-amber-400 transition">About</Link>
            <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Home</Link>
          <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Products</Link>
          <Link to="/how-we-build" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">How We Build</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">About</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FiSun, FiMoon, FiShoppingCart, FiUser, FiX, FiMenu } from 'react-icons/fi';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return (
//         localStorage.getItem('darkMode') === 'true' ||
//         (!localStorage.getItem('darkMode') &&
//           window.matchMedia('(prefers-color-scheme: dark)').matches)
//       );
//     }
//     return false;
//   });

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', newMode.toString());
//   };

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
//             CricketPro
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             {['Home', 'Products', 'Craftsmanship', 'About Us', 'Contact'].map((text, i) => (
//               <Link
//                 key={i}
//                 to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
//               >
//                 {text}
//               </Link>
//             ))}

//             <button onClick={toggleDarkMode}>
//               {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
//             </button>

//             <Link to="/cart" className="relative">
//               <FiShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 3
//               </span>
//             </Link>

//             <Link to="/account">
//               <FiUser className="h-5 w-5" />
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-3">
//             <button onClick={toggleDarkMode}>
//               {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
//             </button>
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 border-t dark:border-gray-800 transition-all duration-300">
//           {['Home', 'Products', 'Craftsmanship', 'About Us', 'Contact'].map((text, i) => (
//             <Link
//               key={i}
//               to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
//               onClick={() => setIsOpen(false)}
//               className="block py-2 border-b dark:border-gray-700"
//             >
//               {text}
//             </Link>
//           ))}

//           <div className="flex items-center justify-start space-x-6 pt-3">
//             <Link to="/cart" className="relative">
//               <FiShoppingCart className="h-6 w-6" />
//               <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 3
//               </span>
//             </Link>

//             <Link to="/account">
//               <FiUser className="h-6 w-6" />
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







