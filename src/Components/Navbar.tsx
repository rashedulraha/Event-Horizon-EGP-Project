import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between container mx-auto px-4 py-3 sticky top-0 backdrop-blur-md ">
        <div>
          <span className="font-bold text-2xl">Event Horizon</span>
        </div>
        <div className="hidden md:flex items-center gap-6 ">
          <Link
            href="/"
            className="font-medium text-muted-foreground hover:text-foreground transition-colors text-base">
            Explore
          </Link>
          <Link
            href="/rooms"
            className=" font-medium text-muted-foreground hover:text-foreground transition-colors text-base">
            About
          </Link>
          <Link
            href="/dashboard/post-room"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link
            href="/how-it-works"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
        </div>
        <div className="space-x-5">
          <button className="px-3 py-1 cursor-pointer rounded-sm border">
            Login
          </button>
          <button className="px-3 py-1 cursor-pointer rounded-sm border">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
