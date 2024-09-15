"use client";

import { getCourses } from "@/lib/graphql/queries";
import { Button, ListGroup } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Courses() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Data unavailable</div>;
  }

  const handleClick = (courseId) => {
    router.push(`/courses/${courseId}`);
  };
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold mb-4 text-xl">Courses </h2>
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
