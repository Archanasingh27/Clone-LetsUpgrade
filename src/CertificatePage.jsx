import React from "react";

const CertificatePage = () => {
  return (
    <div>
      <main className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-orange-500 text-lg font-semibold">CERTIFICATE PROGRAMS</h2>
          <h1 className="text-4xl font-bold mt-2">All From Basic To Advance</h1>
          <p className="mt-4">
            Earn certificate from LetsUpgrade, GDG MAD - Google Developer Group Mumbai, NSDC, and ITM Group of Institutions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {[
              {
                imgSrc: "https://store-images.s-microsoft.com/image/apps.29355.49e39246-7603-4df4-af38-57fd1df6d0e9.3b2e051e-d49e-42c8-8d4a-0f7090b4308c.6f1b683b-b69f-4f22-a102-08f098b0c36e.png",
                title: "Postman API Fundamentals Student Expert Certification",
                enrolled: "20.6k Enrolled · 13 JAN 25",
                originalPrice: "₹4999",
                currentPrice: "₹0",
              },
              {
                imgSrc: "https://seekvectors.com/files/download/d08147cfe906857857e934019e859d5f.jpg",
                title: "Figma Bootcamp",
                enrolled: "14.7k Enrolled · 02 JAN 25",
                originalPrice: "₹4999",
                currentPrice: "₹0",
              },
              {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Gl0_f_zrUvfXl_xpS2TwbiEthGY1DyuCN8hqSMQk6XjpMZjV7HCcJQAfWsnvo1WI3GM&usqp=CAU",
                title: "HTML & CSS Bootcamp",
                enrolled: "18.5k Enrolled · 06 JAN 25",
                originalPrice: "₹4999",
                currentPrice: "₹0",
              },
              {
                imgSrc: "https://img.freepik.com/premium-vector/artificial-intelligence-human-face-logo-design_375081-1103.jpg",
                title: "GenAI 101 with Pieces",
                enrolled: "17.5k Enrolled · 17 JAN 25",
                originalPrice: "₹4999",
                currentPrice: "₹0",
              },
              {
                imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
                title: "C++ Bootcamp",
                enrolled: "16.4k Enrolled · 09 JAN 25",
                originalPrice: "₹4999",
                currentPrice: "₹0",
              },
            ].map((program, index) => (
              <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6">
                <img
                  src={program.imgSrc}
                  alt={program.title}
                  className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" // Set size and rounded
                />
                <p className="text-gray-500">{program.enrolled}</p>
                <h3 className="text-lg font-semibold mt-2">{program.title}</h3>
                <button className="bg-black text-white w-full py-2 mt-4 rounded-full">Enroll Now</button>
                <p className="text-gray-500 mt-2 line-through">{program.originalPrice}</p>
                <p className="text-red-500">{program.currentPrice}</p>
              </div>
            ))}
          </div>

          <a href="#" className="text-orange-500 mt-8 inline-block">
            view all certificate programs &rarr;
          </a>
        </div>
      </main>
    </div>
  );
};

export default CertificatePage;
