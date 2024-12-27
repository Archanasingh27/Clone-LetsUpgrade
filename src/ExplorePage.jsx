import React from 'react';
import { Link } from 'react-router-dom';

const ExplorePage = () => {
  const programs = [
    {
      title: "Cyber Security & Ethical Hacking",
      description: "Master in ethical hacking and secure systems.",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FCybersec_952ea6d5ec.webp&w=1920&q=75",
      enrolled: "12.5k Enrolled",
      date: "January 10, 2024",
      link: "/program/cyber-security-ethical-hacking",
    },
    {
      title: "React Bootcamp",
      description: "Learn React with real projects.",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FReact_de453a3f40.webp&w=1920&q=75",
      enrolled: "10.2k Enrolled",
      date: "January 15, 2024",
      link: "/program/react-bootcamp",
    },
    {
      title: "Java Programming",
      description: "Become proficient in Java and application.",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FJava_b85e8d7c37.webp&w=1920&q=75",
      enrolled: "8.9k Enrolled",
      date: "January 5, 2024",
      link: "/program/java-programming",
    },
    {
      title: "UI/UX Design with Figma",
      description: "Design stunning UI/UX with Figma.",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FFigma_511ed9fd89.webp&w=1920&q=75",
      enrolled: "7.4k Enrolled",
      date: "December 20, 2023",
      link: "/program/ui-ux-design-figma",
    },
    {
      title: "AI and Machine Learning",
      description: "Dive deep into AI and ML concepts and tools.",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2Fpieces_1_673300b5ab5de_950f6e1bff.webp&w=1920&q=75",
      enrolled: "9.8k Enrolled",
      date: "January 3, 2024",
      link: "/program/ai-machine-learning",
    },
    {
      title: "Data Science with Python",
      description: "Learn data analysis and visualization in Python.",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FData_Science_f129fc5817.webp&w=1920&q=75",
      enrolled: "5.3k Enrolled",
      date: "January 12, 2024",
      link: "/program/data-science-python",
    },
    {
      title: "Javascript Bootcamp",
      description: "Learn JavaScript from basic to advance",
      imgSrc: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FJava_Script_c8242fe5d9.webp&w=1920&q=75",
      enrolled: "15k Enrolled",
      date: "December 25, 2023",
      link: "/program/javascipt-development",
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Learn SEO, content marketing, and PPC strategies.",
      imgSrc: "data:image/jpeg;base64,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",
      enrolled: "11.2k Enrolled",
      date: "January 8, 2024",
      link: "/program/digital-marketing",
    },
    {
      title: "Blockchain Development",
      description: "Master blockchain technology and smart contract development.",
      imgSrc: "data:image/jpeg;base64,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",
      enrolled: "6.8k Enrolled",
      date: "January 2, 2024",
      link: "/program/blockchain-development",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
     
      <header className="w-full bg-white border-b border-gray-200 flex items-center justify-between p-4 shadow">
        <div className="flex items-center">
        <img 
            src="data:image/png;base64,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" 
            alt="LU Logo" 
            className="mr-2 w-10 h-10" 
          />
          <span className="text-2xl font-bold">LU</span>
        </div>
      </header>

      
      <div className="flex flex-1">
     
        <aside className="w-1/4 bg-white p-6 border-r border-gray-200 flex flex-col">
          <nav className="space-y-4">
            {[ 
              { icon: 'fa-tachometer-alt', label: 'Dashboard' },
              { icon: 'fa-fire', label: 'Explore Programs' },
              { icon: 'fa-book', label: 'My Programs' },
              { icon: 'fa-certificate', label: 'Certificates' },
              { icon: 'fa-gift', label: 'Rewards', extra: <span className="text-red-500 ml-1">•</span> },
              { icon: 'fa-user-friends', label: 'Refer & Earn' },
              { icon: 'fa-coins', label: 'LU Coins' },
              { icon: 'fa-user-tie', label: 'Student Ambassador' },
              { icon: 'fa-users', label: 'Community' },
            ].map(({ icon, label, extra }, index) => (
              <Link
                key={index}
                to="#"
                className="flex items-center text-gray-700 hover:text-black"
              >
                <i className={`fas ${icon} mr-2`}></i> {label} {extra}
              </Link>
            ))}
          </nav>
          {/* Footer */}
          <div className="mt-auto">
            <button className="w-full bg-black text-white py-2 rounded mt-6">Login</button>
            <div className="text-sm text-gray-500 mt-4 space-y-1">
              {[
                'Trainerpreneur Program',
                'Hire with LU',
                'Community Guidelines',
                'Verify Certificate',
                'About',
                'Contact',
                'Privacy',
                'Refunds',
                'Terms',
              ].map((link, index) => (
                <Link key={index} to="#" className="block">
                  {link}
                </Link>
              ))}
            </div>
            <div className="text-xs text-gray-400 mt-4">
              Copyright © 2024 LetsUpgrade EdTech Pvt. Ltd.
              <br />
              Version 2.0.3
            </div>
          </div>
        </aside>

        {/* Main Content Section */}
        <main className="flex-1 bg-gray-100 p-6">
          {/* Navbar with Title */}
          <div className="bg-white p-4 mb-6 shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">All Programs</h2>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex gap-6 mb-6">
            {/* Search Box */}
            <div className="flex-1 w-2/3">
              <input
                type="text"
                placeholder="Search all Programs"
                className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="w-1/7">
              <select className="px-4 py-2 border border-gray-300 rounded-lg w-full">
                <option value="">Filter</option>
                <option value="tech">Technology</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>

          {/* Programs Grid with Scrollable Section */}
          <div className="overflow-auto max-h-[700px] space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-gray-800 shadow-md rounded-lg p-4 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
                >
                  <Link to={program.link}>
                    <img
                      src={program.imgSrc}
                      alt={program.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  </Link>
                  
                  {/* Program Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{program.title}</h3>
                  
                  {/* Short Description Below Image */}
                  <p className="text-xs text-gray-600 mb-4">{program.description}</p>

                  {/* Program Enrollment Positioned Between Description and Date */}
                  <p className="text-sm text-gray-500 mb-4">{program.enrolled}</p>

                  {/* Date and Icon at the Bottom */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">{program.date}</span>
                    <Link to={program.link} className="text-xl text-gray-600 hover:text-black">
                      &gt;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

       {/* Right Sidebar Section */}
         <aside className="w-1/4 p-8">
           <div className="space-y-8">
             {[ // Right Sidebar Images
               { src: 'https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FBecome_Lets_Upgrade_Student_Ambassador_WB_1_1_64dda60973_9ac46afecc.webp&w=1920&q=75', alt: 'Become Student Ambassador' },
               { src: 'https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FPostman_Swags_98b3ec0ebf.jpg&w=1920&q=75', alt: 'Join Postman API Bootcamp' },
               { src: 'https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2Fsubscribe_to_YT_9dcb8a2543.gif&w=1920&q=75', alt: 'Subscibe' },
                ].map(({ src, alt }, index) => (
               <div key={index} className="pb-6"> {/* Added padding bottom for spacing */}
                 <Link to="#">
                   <img src={src} alt={alt} className="rounded-lg shadow-md w-md" />
                 </Link>
               </div>
              ))}
           </div>
         </aside>

      </div>
    </div>
  );
};

export default ExplorePage;
