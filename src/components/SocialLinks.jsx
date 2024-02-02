import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="flex flex-col top-[35] right-0 fixed">
      <ul>
        <li className="flex items-center justify-between w-40 h-14 px-4 bg-black ">
          <a href="" className="text-3xl text-white">
            <>
              LinkedIn <FaLinkedin size={25} className="ml-2" />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};
