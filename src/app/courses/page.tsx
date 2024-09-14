"use client";

import { Button, ListGroup } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { courses } from "../../mocks/courses";

export default function Courses() {
  const router = useRouter();

  const handleClick = (courseId) => {
    router.push(`/courses/${courseId}`);
  };
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold mb-4 text-xl">Courses</h2>
        <Link href="/courses/create">
          <Button color="blue" className="flex">
            Add course
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <ListGroup className="w-full">
          {courses.map((course) => (
            <ListGroup.Item
              key={course.id}
              onClick={() => handleClick(course.id)}
            >
              <div className="flex flex-col py-4 items-start">
                <span>{course.title}</span>
                <span className="font-xs text-gray-500 font-normal">
                  {course.description}
                </span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
