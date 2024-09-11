"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Card, Button } from "flowbite-react";
import { courses } from "../../../mocks/courses";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function CourseDetails() {
  const params = useParams();
  const { id } = params;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedCourse = courses.find(
        (course) => course.id === parseInt(id)
      );
      setCourse(selectedCourse);
    }
  }, [id]);

  const courseDetails = useMemo(() => {
    return (
      course && [
        { key: "Title", value: course.title },
        { key: "Description", value: course.description },
        { key: "Instructor", value: course.instructor },
        { key: "Duration", value: course.duration },
        { key: "Level", value: course.level },
        { key: "Price", value: `$${course.price}` },
        { key: "Category", value: course.category },
      ]
    );
  }, [course]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-4 flex flex-col">
      <Link href={`/courses/${id}/edit`} className="self-end  mr-10">
        <Button color="blue" className="w-fit">
          Edit course
        </Button>
      </Link>
      <div className="min-h-screen min-w-screen flex justify-center p-10">
        <Card className="w-screen-xl h-full">
          <h5 className="text-2xl font-bold tracking-tight ">Course Details</h5>
          <section className="flex flex-col gap-2">
            {courseDetails.map(({ key, value }) => (
              <div className="flex gap-4" key={key}>
                <p className="font-semibold text-gray-900">{key}</p>
                <p className="font-normal text-gray-700">{value}</p>
              </div>
            ))}
          </section>
        </Card>
      </div>
    </div>
  );
}
