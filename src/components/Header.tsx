import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex  items-center p-2 bg-black text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">GraphQL Academy</h1>
      </Link>
      <nav className="grow">
        <ul className="flex gap-4  ml-4">
          <li className="hover:underline">
            <Link href="/courses">Courses</Link>
          </li>
          <li className="hover:underline">
            <Link href="/instructors">Instructors</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button color="blue">Login</Button>
      </div>
    </div>
  );
};

export default Header;
