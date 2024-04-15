import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      link: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/kjm9198/",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      link: (
        <>
          <FaGithub size={30} /> GitHub
        </>
      ),
      href: "https://github.com/kjm9198",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      link: (
        <>
          <HiOutlineMail size={30} /> E-Mail
        </>
      ),
      href: "mailto:vtd9198@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      link: (
        <>
          <BsFillPersonLinesFill size={30} /> Resume
        </>
      ),
      href: "/Michał Bożek CV (EN).pdf",
      style: "rounded-bl-md",
      download: true,
    },
  ];
  return (
      <div className="hidden lg:flex flex-col top-120 right-0 fixed">
        <ul>
          {links.map(({ id, link, href, style, download }) => (
              <li
                  key={id}
                  className={`flex justify-between items-center w-40 h-12 px-4 bg-white transform translate-x-25 hover:translate-x-1 hover:rounded-md duration-300 ${style}`}
              >
                <a
                    href={href}
                    className="flex justify-between items-center w-full "
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                >
                  {link}
                </a>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default SocialLinks;

