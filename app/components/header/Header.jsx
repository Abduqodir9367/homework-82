import Link from "next/link";
import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between ">
          <img src="./logo.png" alt="logo" />
          <div className="nav-links flex gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Pages</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Projects</Link>
            <Link href={"/"}>News</Link>
          </div>
          <div className="nav-items flex items-center gap-8">
            <form className="flex items-center">
              <input type="search" placeholder="Search... " />
              <img src="./search.png" alt="" />
            </form>
            <button className=" flex items-center gap-5 justify-center">
              Cart <img src="./cart.png" alt="" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
