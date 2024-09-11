"use client";

import { ListGroup } from "flowbite-react";
import { courses } from "../../mocks/courses";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Courses() {
  const router = useRouter();

  const handleClick = (courseId) => {
    router.push(`/courses/${courseId}`);
  };
  return (
    <main className="min-h-screen min-w-screen bg-white p-10">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold mb-4">Courses</h2>
        <Link href="/courses/create">
          <Button color="blue">Add course</Button>
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
    </main>
  );
}
