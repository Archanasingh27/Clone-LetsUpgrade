import React from 'react';

const Navbar = () => (
  <nav className="w-full bg-white p-4 border-b border-gray-200 flex items-center justify-between">
    <div className="flex items-center">
      <img
      src="data:image/png;base64,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"         
       alt="LU" 
       className="mr-2 w-10 h-10" />
      <span className="text-2xl font-bold">LU</span>
    </div>
  </nav>
);

const Sidebar = () => (
  <aside className="w-1/4 bg-white p-6 border-r border-gray-200 flex flex-col">
    <nav className="space-y-4">
      {[
        { icon: 'fa-tachometer-alt', label: 'Dashboard' },
        { icon: 'fa-fire', label: 'Explore Programs' },
        { icon: 'fa-book', label: 'My Programs' },
        { icon: 'fa-certificate', label: 'Certificates' },
        { icon: 'fa-gift', label: 'Rewards' },
        { icon: 'fa-user-friends', label: 'Refer & Earn' },
        { icon: 'fa-coins', label: 'LU Coins' },
        { icon: 'fa-user-tie', label: 'Student Ambassador' },
        { icon: 'fa-users', label: 'Community' },
      ].map(({ icon, label }, index) => (
        <a
          key={index}
          href="#"
          className="flex items-center text-gray-700 hover:text-black"
        >
          <i className={`fas ${icon} mr-2`}></i> {label}
        </a>
      ))}
    </nav>
    <div className="mt-auto">
      <button className="w-full bg-black text-white py-2 rounded mt-6">
        Login
      </button>
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
          <a key={index} href="#" className="block">
            {link}
          </a>
        ))}
      </div>
      <div className="text-xs text-gray-400 mt-4">
        Copyright © 2024 LetsUpgrade EdTech Pvt. Ltd.
        <br />
        Version 2.0.3
      </div>
    </div>
  </aside>
);

const MainContent = () => (
  <main className="flex-1 overflow-y-auto h-[calc(100vh-0px)]">
    {/* About Us Navbar */}
    <div className="bg-white sticky top-0 z-10 shadow-md p-4 mb-6">
      <h1 className="text-xl font-bold">About Us</h1>
    </div>

    {/* About Section */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <img
         src="data:image/png;base64,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"         
       
          alt="About LetsUpgrade"
          className="mx-auto  mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">About</h2>
        <h3 className="italic text-3xl font-bold text-black-500 mb-2">LetsUpgrade</h3>
        <hr className="border-t-2 border-gray-300 mb-4" />
        <p className="italic text-gray-600 font-bold">
          Reimagine Online Upskilling Education
        </p>
      </div>

      <p className="text-gray-700 p-6 mb-4">
        <span className="text-orange-500 font-bold">LetsUpgrade.in</span> is India's largest
        higher education learning community for students enrolled in Indian degree programs. With
        1.5 million students and a 45% market share among BTech / BE students in India; LetsUpgrade
        EdTech offers many upskilling courses in Tech, Design, Management, Business, and Data.
      </p>
    </div>

    {/* The Beginning Section */}
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold text-center mb-2">The Beginning</h3>
      <p className="text-gray-700 text-center">
        Founded in 2020 as an experimental project by Nitin, Sai, Viral, and Prasad, LetsUpgrade took
        live learning to the next level on YouTube. Thousands of students quickly joined,
        recognizing its value, and now we offer various online programs for students pursuing higher
        education degrees across India and neighboring countries.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold text-center mb-2">Our Collective Vision</h3>
      <p className="text-gray-700 text-center">
      To create a space where students can acquire employable skills with fun, engagement, and a strong connection to real-world applications, ensuring high success rates.
      <br />
      To make LetsUpgrade the go-to platform for all higher education students seeking real-world skills, building a community of 10 million by 2027.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold text-center mb-2">Mission</h3>
      <p className="text-gray-700 text-center">
      Provide a wide range of employable tech and non-tech skill programs on LetsUpgrade, taught by industry experts.
<br />
Continuously iterate on curriculum for relevance and impact
<br />
Emphasize hands-on learning, real-life examples, and project-based activities.
<br />
Think outside the box, always keeping students at the center
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold text-center mb-2">Ambition</h3>
      <p className="text-gray-700 text-center">
      To become one of top 10 global EdTech platform where students can upskill and learn essential 21st-century skills by 2030
      </p>
    </div>
  </main>
);


const RightSidebar = () => (
  <aside className="w-1/4 p-6 bg-white shadow-md">
    <div className="space-y-4">
      {[
        { src: 'https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FBecome_Lets_Upgrade_Student_Ambassador_WB_1_1_64dda60973_9ac46afecc.webp&w=1920&q=75', alt: 'Become Student Ambassador' },
        { src: 'https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FPostman_Swags_98b3ec0ebf.jpg&w=1920&q=75', alt: 'Join Postman API Bootcamp' },
        { src: 'https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2Fsubscribe_to_YT_9dcb8a2543.gif&w=1920&q=75' },
      ].map(({ src, alt }, index) => (
        <img key={index} src={src} alt={alt} className="rounded-lg shadow-md" />
      ))}
    </div>
  </aside>
);


const AboutPage = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  </div>
);

export default AboutPage;
