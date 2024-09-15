"use client";

import React from "react";
import { Card, Button } from "flowbite-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Error from "@/components/Error";
import { DELETE_COURSE_MUTATION, GET_COURSE } from "@/lib/graphql/queries";
import CourseDetailItem from "@/components/CourseDetailsItem";
import { useQuery, useMutation } from "@apollo/client";
import {
  CourseQuery,
  CourseQueryVariables,
  DeleteCourseMutation,
  DeleteCourseMutationVariables,
} from "@/generated/graphql";

export default function CourseDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { loading, data, error } = useQuery<CourseQuery, CourseQueryVariables>(
    GET_COURSE,
    {
      variables: {
        id,
      },
      fetchPolicy: "network-only",
    }
  );

  const [deleteCourse] = useMutation<
    DeleteCourseMutation,
    DeleteCourseMutationVariables
  >(DELETE_COURSE_MUTATION);

  const course = data?.course;

  const handleDelete = async () => {
    await deleteCourse({
      variables: {
        id,
      },
    });
    router.push("/courses");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  if (!course) {
    return <div>No course details found</div>;
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-center px-10">
      <Card className="w-screen-xl h-full min-w-96">
        <h5 className="text-2xl font-bold tracking-tight text-center">
          Course Details
        </h5>
        <section className="flex flex-col gap-2">
          <CourseDetailItem key="title" itemKey="Title" value={course.title} />
          <CourseDetailItem
            key="description"
            itemKey="Description"
            value={course.description}
          />
          <CourseDetailItem
            key="price"
            itemKey="Price"
            value={`${course.price}€`}
          />
          <CourseDetailItem
            key="instructor"
            itemKey="Instructor"
            value={course.instructor.name}
          />
          <CourseDetailItem
            key="category"
            itemKey="Category"
            value={course.category}
          />
          <CourseDetailItem key="level" itemKey="Level" value={course.level} />
          <CourseDetailItem
            key="duration"
            itemKey="Duration"
            value={`${course.duration} hours`}
          />
        </section>
        <footer className="flex gap-2 items-center justify-center pt-4">
          <Link href={`/courses/${id}/edit`}>
            <Button color="blue" className="w-fit">
              Edit course
            </Button>
          </Link>
          <Button color="gray" className="w-fit" onClick={handleDelete}>
            Delete course
          </Button>
        </footer>
      </Card>
    </div>
  );
}
