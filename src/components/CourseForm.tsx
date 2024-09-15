"use client";

import {
  Button,
  Card,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useEffect, useMemo, useState } from "react";
import {
  ADD_COURSE_MUTATION,
  GET_INSTRUCTORS,
  UPDATE_COURSE_MUTATION,
} from "@/lib/graphql/queries";
import { Course } from "@/types/Course";
import { useRouter } from "next/navigation";
import { CourseFormType } from "@/types/CourseForm";
import { useMutation, useQuery } from "@apollo/client";

interface CourseFormProps {
  initialCourseDetails?: Course;
}

export const CourseForm = ({ initialCourseDetails }: CourseFormProps) => {
  const { data } = useQuery(GET_INSTRUCTORS);
  const [addCourse] = useMutation(ADD_COURSE_MUTATION);
  const [updateCourse] = useMutation(UPDATE_COURSE_MUTATION);

  const router = useRouter();

  const [form, setForm] = useState<CourseFormType>({
    title: initialCourseDetails.title,
    description: initialCourseDetails.description,
    instructorId: initialCourseDetails.instructor.id,
    duration: initialCourseDetails.duration,
    price: initialCourseDetails.price,
    level: initialCourseDetails.level,
    category: initialCourseDetails.category,
  });

  useEffect(() => {
    setForm({
      ...form,
      instructorId: form.instructorId || data?.instructors[0].id,
    });
  }, [data]);

  const instructorOptions = useMemo(() => {
    return data?.instructors.map((instructor) => ({
      value: instructor.id,
      label: instructor.name,
    }));
  }, [data]);

  const onChange = (e) => {
    const { id, value } = e.target;
    if (id === "duration" || id === "price") {
      setForm({ ...form, [id]: Number(e.target.value) });
      return;
    }

    setForm({ ...form, [id]: value });
  };

  const handleAddCourse = async () => {
    const { data } = await addCourse({
      variables: {
        input: form,
      },
    });
    router.push(`/courses/${data.course.id}`);
  };

  const handleEditCourse = async () => {
    const { data } = await updateCourse({
      variables: {
        id: initialCourseDetails.id,
        input: form,
      },
    });
    router.push(`/courses/${data.course.id}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (initialCourseDetails.id) {
      handleEditCourse();
      return;
    }
    handleAddCourse();
  };

  return (
    <Card className="min-h-screen">
      <h5 className="text-2xl font-bold tracking-tight text-center">
        {initialCourseDetails.id ? "Edit course" : "Create course"}
      </h5>
      <section className="flex flex-col items-center">
        <form
          className="flex max-w-md flex-col gap-4 w-full"
          onSubmit={onSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              value={form.title}
              onChange={onChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea
              id="description"
              value={form.description}
              onChange={onChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="instructor" value="Instructor" />
            </div>
            <Select
              id="instructorId"
              value={form.instructorId}
              onChange={onChange}
            >
              {instructorOptions?.map((instructor) => (
                <option key={instructor.value} value={instructor.value}>
                  {instructor.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="duration" value="Duration in hours" />
            </div>
            <TextInput
              id="duration"
              type="number"
              value={form.duration}
              onChange={onChange}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              type="number"
              value={form.price}
              onChange={onChange}
            />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="level" value="Level" />
            </div>
            <Select id="level" value={form.level} onChange={onChange}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Select>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select id="category" value={form.category} onChange={onChange}>
              <option>Programming</option>
              <option>Machine Learning</option>
              <option>Web Frameworks</option>
              <option>Cloud</option>
            </Select>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </section>
    </Card>
  );
};
