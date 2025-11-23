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
        <div className="space-x-4">
          <Link
            href={"/login"}
            className="px-3 py-2 cursor-pointer rounded-sm border">
            Login
          </Link>
          <Link
            href={"/register"}
            className="px-3 py-2 cursor-pointer rounded-sm border">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
