"use client";

import { CourseForm } from "@/components/CourseForm";
import { useParams } from "next/navigation";
import Error from "@/components/Error";
import { GET_COURSE } from "@/lib/graphql/queries";
import { useQuery } from "@apollo/client";
import { CourseQuery, CourseQueryVariables } from "@/generated/graphql";

function EditCourse() {
  const params = useParams();
  const id = params.id as string;

  const { data, loading, error } = useQuery<CourseQuery, CourseQueryVariables>(
    GET_COURSE,
    { variables: { id } }
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Error />;
  }

  return <CourseForm initialCourseDetails={data.course} />;
}

export default EditCourse;
