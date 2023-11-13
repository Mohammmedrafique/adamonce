// src/Dashboard.js


const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Your Logo</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-blue-500 text-white text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
          <p className="text-lg">
            A beautiful and responsive website crafted with React and Tailwind
            CSS.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur risus ut auctor dignissim.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>
                Building modern and responsive websites tailored to your needs.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p>
                Creating visually stunning graphics and illustrations for your
                brand.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p>
                Promoting your business through effective digital marketing
                strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Ready to start your project? Reach out to us for a consultation.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
