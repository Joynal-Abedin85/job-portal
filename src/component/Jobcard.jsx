import React from "react";
import { Link } from "react-router-dom";

const Jobcard = ({ job }) => {
  const {
    _id,
    title,
    location,
    company_logo,
    requirements,
    company,
    description,
    salaryRange,
  } = job;
  return (
    <div className="w-11/12 mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6 m-4  ">
      {/* Company Logo */}
      <div className="flex justify-between items-center mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{company}</h2>

          {/* Location */}
          <p className="text-sm text-gray-500 mb-4">{location}</p>
        </div>
      </div>

      {/* Job Title */}

      {/* Company Name */}
      <p className="text-xl font-semibold text-gray-700 mb-4">{title}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Requirements */}
      <h3 className="text-sm font-bold text-gray-800 mb-2">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      {/* Salary Range */}
      <p className="text-gray-700 text-sm font-semibold">
        Salary: {salaryRange.min} - {salaryRange.max}{" "}
        {salaryRange.currency.toUpperCase()}
      </p>

      {/* Apply Button */}
      <Link to={`/jobs/${_id}`}>
      <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Apply Now
      </button>
      </Link>
    </div>
  );
};

export default Jobcard;
