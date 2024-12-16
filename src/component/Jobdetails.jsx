import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Jobdetails = () => {

    const {_id,title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        company_logo} = useLoaderData()
    return (
        <div className="w-11/12 max-w-4xl mx-auto bg-lime-200 border border-gray-200 rounded-lg my-5 shadow-md p-6">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        {/* Company Logo */}
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-16 h-16 object-contain rounded-md border"
        />
        <div>
          {/* Job Title */}
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {/* Company Name */}
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="text-sm text-gray-600 mb-4">
        <p>📍 <span className="font-medium">{location}</span></p>
        <p>💼 <span className="font-medium">{jobType} - {category}</span></p>
        <p>📅 Apply by: <span className="font-medium">{applicationDeadline}</span></p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Requirements */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Salary */}
      <p className="text-sm font-medium text-gray-700 mb-4">
        💰 Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
      </p>

      {/* Apply Button */}
      <Link to={`/apply/${_id}`}>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Apply Now
      </button>
      </Link>
    </div>
    );
};

export default Jobdetails;