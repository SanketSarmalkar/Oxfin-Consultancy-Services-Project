import React from "react";

const Footer = () => {
  const blocks = [
    [
      { title: "About Us", link: "/about" },
      { title: "Support & Help", link: "/support" },
      { title: "How it Works", link: "/how-it-works" },
      { title: "Blogs", link: "/blogs" },
    ],
    [
      { title: "Terms & Conditions", link: "/terms" },
      { title: "Privacy Policy", link: "/privacy" },
      { title: "Data Security", link: "/data-security" },
    ],
    [
      { title: "Cancellation and Refund Policy", link: "/cancellation" },
      { title: "Manual", link: "/manual" },
      { title: "User Agreement", link: "/user-agreement" },
      { title: "Consultant Agreement", link: "/consultant-agreement" },
    ],
    [
      {
        title: (
          <span>
            <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      rel="stylesheet"
    />
            <span className="fas fa-home pr-2" aria-hidden="true"></span>
            B 801, Suyog Leher, Kondhwa Road, Pune, Maharashtra, 411048
          </span>
        ),
        link: "/address",
      },
      {
        title: (
          <span>
            <span className="fas fa-envelope pr-2" aria-hidden="true"></span>
            support@companyemail.com
          </span>
        ),
        link: "mailto:support@companyemail.com",
      },
    ],
  ];

  const getBlockStyle = () => {
    const screenWidth = window.innerWidth;
    const isSingleColumn = screenWidth < 768;
    const numColumns = isSingleColumn ? 1 : 2;

    return {
      gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    };
  };

  const renderBlocks = () => {
    return blocks.map((block, index) => (
      <div key={index} className="mt-4  bg-gray-600 p-5">
        {block.map((item, itemIndex) => (
          <a key={itemIndex} href={item.link} className="block text-gray-600 mb-2 hover:text-blue-600">
            {item.title}
          </a>
        ))}
      </div>
    ));
  };

  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 p-3">
            <h4 className="text-lg font-bold mb-4">Company Name</h4>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {blocks.map((block, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4">
              {block.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.link}
                  className="block text-gray-900 mb-2 hover:text-blue-900 "
                >
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 text-gray-600 text-center">
          &copy; {new Date().getFullYear()} www.companysite.com, all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
