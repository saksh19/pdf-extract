import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = "http://localhost:4001";

function Form() {
  const [file, setFile] = useState(null);
  const [data,setData] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(`${BACKEND_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      const resultWithUppercaseKeys = {};
Object.keys(res.data).forEach(key => {
  resultWithUppercaseKeys[key.toUpperCase()] = res.data[key];
});
      setData(resultWithUppercaseKeys)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className='containeracc'>
        <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6">
            <form role="form text-left" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label>Name</label>
                <input
                  value={data.NAME}
                  aria-describedby="name-addon"
                  aria-label="Name"
                  placeholder="Name"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>E-Mail</label>
                <input
                value={data.EMAIL}
                  aria-describedby="email-addon"
                  aria-label="Email"
                  placeholder="Email"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label>Phone NO.</label>
                <input
                value={data.PHONE_NO}
                  aria-describedby="phone-addon"
                  aria-label="Phone"
                  placeholder="Phone no."
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Project</label>
                <input 
                  value={data.PROJECT}
                  aria-describedby="project-addon"
                  aria-label="Project"
                  placeholder="Project"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Internship</label>
                <input
                value={data.INTERNSHIP}
                  aria-describedby="internship-addon"
                  aria-label="Internship"
                  placeholder="Internship"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Programming Skills</label>
                <input
                value={data.PROGRAMMING_SKILL}
                  aria-describedby="programming-skills-addon"
                  aria-label="Programming skills"
                  placeholder="Programming skills"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Frontedend Development Skills</label>
                <input 
                value={data.FRONTEND_DEVELOPMENT_SKILLS }
                  aria-describedby="frontend-development-addon"
                  aria-label="Frontend Development"
                  placeholder="Frontend Development"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Backend development Skills</label>
                <input
                value={data.BACKEND_DEVELOPMENT_SKILL}
                  aria-describedby="backend-development-addon"
                  aria-label="Backend Development"
                  placeholder="Backend Development"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Database Skills</label>
                <input
                value={data.DATABASE_SKILLS}
                  aria-describedby="database-addon"
                  aria-label="Database"
                  placeholder="Database"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label>Other Skills</label>
                <input
                value={data.ADVANCE_LANGUAGE_PROCESSING}
                  aria-describedby="advance-language-processing-addon"
                  aria-label="Advance Language Processing"
                  placeholder="Advance Language Processing"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="file-addon"
                  aria-label="File"
                  placeholder="Upload file here"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="min-h-6 pl-7 mb-0.5 block"></div>
              <div className="text-center">
                <button
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

