import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Authcontext from "../myauth/Authcontext";

const Apply = () => {
    const {id} = useParams()
    const {user} = useContext(Authcontext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const githubUrl = form.githubUrl.value
        const linkedinUrl = form.linkedinUrl.value
        const resumeUrl = form.resumeUrl.value

        const jobapply = {
            jobid: id,
            applyemail: user.email,
            githubUrl,
            linkedinUrl,
            resumeUrl

        }

        fetch('')


        
    }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-lg mx-auto bg-white p-6 border border-gray-200 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Apply for the Job
      </h2>

      {/* GitHub URL */}
      <div className="mb-4">
        <label
          htmlFor="githubUrl"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          GitHub URL
        </label>
        <input
          type="url"
          id="githubUrl"
          name="githubUrl"
          placeholder="https://github.com/yourusername"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* LinkedIn URL */}
      <div className="mb-4">
        <label
          htmlFor="linkedinUrl"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          LinkedIn URL
        </label>
        <input
          type="url"
          id="linkedinUrl"
          name="linkedinUrl"
          
          placeholder="https://linkedin.com/in/yourusername"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Resume URL */}
      <div className="mb-4">
        <label
          htmlFor="resumeUrl"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Resume URL
        </label>
        <input
          type="url"
          id="resumeUrl"
          name="resumeUrl"
          placeholder="https://yourwebsite.com/resume.pdf"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Apply
      </button>
    </form>
  );
};

export default Apply;
