"use client";

import React, { useMemo } from "react";
import { Card, Button } from "flowbite-react";
import { courses } from "../../../mocks/courses";
import { useParams } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";

export default function CourseDetails() {
  const params = useParams();
  const { id } = params;
  const course = useMemo(() => {
    return courses.find((course) => course.id === parseInt(id.toString()));
  }, [id]);

  if (!course) {
    return <Error />;
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-center px-10">
      <Card className="w-screen-xl h-full">
        <h5 className="text-2xl font-bold tracking-tight text-center">
          Course Details
        </h5>
        <section className="flex flex-col gap-2">
          {Object.entries(course).map(([key, value]) => (
            <div className="flex gap-6 " key={key}>
              <p className="font-semibold w-1/4 text-gray-900">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
              <p className="font-normal text-gray-700 w-3/4 ">
                {value.toString()}
              </p>
            </div>
          ))}
        </section>
        <Link href={`/courses/${id}/edit`} className="pt-4 self-center">
          <Button color="blue" className="w-fit">
            Edit course
          </Button>
        </Link>
      </Card>
    </div>
  );
}
