"use client";

import React, { useMemo, useState } from "react";
import { courses } from "../../../../mocks/courses";
import { useRouter, useParams } from "next/navigation";
import { Card, Button, Label, TextInput, Select } from "flowbite-react";

function EditCourse() {
  const params = useParams();
  const { id } = params;

  const courseDetails = useMemo(() => {
    return courses.find((course) => course.id === parseInt(id));
  }, [id]);

  const [form, setForm] = useState({
    title: courseDetails.title,
    description: courseDetails.description,
    instructor: courseDetails.instructor,
    duration: courseDetails.duration,
    level: courseDetails.level,
    price: courseDetails.price,
    category: courseDetails.category,
  });

  return (
    <Card className="min-h-screen">
      <section className="flex flex-col items-center">
        <h1 className="text-xl font-semibold w-fit">Edit course</h1>
        <form className="flex max-w-md flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              sizing="sm"
              value={form.title}
              onInput={(e) => {
                setForm({ ...form, title: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput
              id="description"
              type="text"
              sizing="lg"
              value={form.description}
              onInput={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="instructor" value="Instructor" />
            </div>
            <TextInput
              id="instructor"
              type="text"
              sizing="sm"
              value={form.instructor}
              onInput={(e) => {
                setForm({ ...form, instructor: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="duration" value="Duration in hours" />
            </div>
            <TextInput
              id="duration"
              type="number"
              sizing="sm"
              value={form.duration.split(" ")[0]}
              onInput={(e) => {
                setForm({ ...form, duration: e.target.value });
              }}
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="level" value="Level" />
            </div>
            <Select
              id="level"
              value={form.level}
              onChange={(e) => {
                setForm({ ...form, level: e.target.value });
              }}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select
              id="category"
              value={form.category}
              onChange={(e) => {
                setForm({ ...form, level: e.target.value });
              }}
            >
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
}

export default EditCourse;
