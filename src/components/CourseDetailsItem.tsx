import React from "react";

interface CourseDetailItemProps {
  itemKey: string;
  value: string;
}

const CourseDetailItem: React.FC<CourseDetailItemProps> = ({
  itemKey,
  value,
}) => {
  return (
    <div className="flex gap-6">
      <p className="font-semibold w-1/4 text-gray-900">{itemKey}</p>
      <p className="font-normal text-gray-700 w-3/4">{value}</p>
    </div>
  );
};

export default CourseDetailItem;
