
import { FiCheck, FiAward, FiUsers, FiGlobe, FiChevronRight } from 'react-icons/fi';
import CricketBatsCards from '../components/CricketBatsCards';

const Home = () => {
  return (
    <div className="font-sans">
     

      <section className="relative bg-gray-900 text-white min-h-[70vh] flex items-center">
  <div className="absolute inset-0 bg-black/40 z-0"></div>
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Left: Text Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-amber-400">XYZ</span> Premium Cricket Bats
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Handcrafted in Sialkot using Grade 1 English Willow
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded flex items-center transition duration-300 group">
            Shop Collection <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black text-white font-medium py-3 px-8 rounded transition duration-300">
            Our Craftsmanship
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <img 
          src="https://media.istockphoto.com/id/1479015492/photo/cricket-bats-on-shelving-rack.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJ3YkpNz4pCEAGE0sqGLwbp3XyF8yLokQZCUA1mgMmE=" 
          alt="Cricket Bat" 
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


      {/* Brand Trust Badge */}
      <div className="relative -mt-12 z-20 container mx-auto px-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-gray-900 rounded-full p-3 mr-4">
                <FiAward className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Official Supplier</h3>
                <p className="text-gray-600">To national cricket teams since 1995</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-700">Grade 1 English Willow</span>
              </div>
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-700">Handcrafted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🏏 Bat Cards Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Explore Our Latest Bats</h2>
      <p className="text-gray-600 mt-2">Crafted for champions, built to perform.</p>
    </div>
    <CricketBatsCards />
  </div>
</section>

      {/* Why Our Bats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl  font-bold text-gray-900 mb-4">Why Our Bats?</h2>
            <p className="text-gray-600">
              Precision engineering meets traditional craftsmanship for unmatched performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FiUsers className="h-8 w-8 text-amber-500" />,
                title: "Player-Endorsed",
                desc: "Designed with input from professional cricketers for optimal performance"
              },
              {
                icon: <FiGlobe className="h-8 w-8 text-amber-500" />,
                title: "Global Standards",
                desc: "Manufactured in Sialkot, Pakistan - the world's cricket equipment capital"
              },
              {
                icon: <FiAward className="h-8 w-8 text-amber-500" />,
                title: "Proven Quality",
                desc: "Trusted by club players and professionals alike for 25+ years"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 hover:shadow-lg transition duration-300 rounded-lg">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw2ebqODFjX8Ba7NSSlkcaAk9_aq8GQm0Ag&s" 
                alt="Crafting cricket bats"
                className="rounded-lg shadow-xl w-80"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Craftsmanship</h2>
              <p className="text-gray-600 mb-6">
                Each M8 Malik bat undergoes 147 meticulous steps from wood selection to final polish. Our master craftsmen with 20+ years experience shape every bat using time-honored techniques combined with modern performance insights.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded transition duration-300">
                How We Make Our Bats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-white">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-block mb-6">
        <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
          Our Mission
        </span>
      </div>
      <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
        Where <span className="font-medium">Tradition</span> Meets <span className="font-medium">Innovation</span>
      </h2>
      
      <div className="relative">
        <div className="absolute -inset-4">
          <div className="w-full h-full rotate-1 bg-gradient-to-r from-amber-400 to-amber-600 blur-md opacity-20 rounded-lg"></div>
        </div>
        <div className="relative bg-white p-10 rounded-lg shadow-xl border border-gray-100">
          <p className="text-xl md:text-2xl font-light text-gray-700 mb-8 leading-relaxed">
            "At XYZ, we honor centuries of bat-making heritage while embracing modern engineering to create cricket bats that offer the perfect balance of power, precision, and playability for professionals and enthusiasts alike."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex-shrink-0">
              <img 
                className="h-12 w-12 rounded-full border-2 border-amber-500" 
                src="/path-to-founder.jpg" 
                alt="Founder"
              />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">XYZ</p>
              <p className="text-sm text-amber-600">Founder & Master Craftsman</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: (
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: "Quality Commitment",
            description: "Only Grade 1 English willow, hand-selected for perfect grain structure"
          },
          {
            icon: (
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: "Performance Focus",
            description: "Scientifically balanced for optimal power transfer and control"
          },
          {
            icon: (
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M12 15l8-8m0 0l-8-8m8 8H4" />
              </svg>
            ),
            title: "Continuous Innovation",
            description: "Blending time-tested techniques with cutting-edge technology"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-300 group">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the XYZ Malik Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of players who trust our bats for their matches
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;