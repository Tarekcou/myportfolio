import React from "react";

const Qualifications = () => {
  return (
    <div className="mt-10">
      <h3 className="mb-4 font-semibold text-lg">Qualifications</h3>
      <table className="border-gray-300 border rounded-md w-full text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 font-semibold text-left">Degree</th>
            <th className="px-4 py-2 font-semibold text-left">Subject</th>
            <th className="px-4 py-2 font-semibold text-left">Institution</th>
            <th className="px-4 py-2 font-semibold text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">M.Sc.</td>
            <td className="px-4 py-2">
              Information & Communication Technology (ICT)
            </td>
            <td className="px-4 py-2">Comilla University</td>
            <td className="px-4 py-2">2019</td>
          </tr>
          <tr>
            <td className="px-4 py-2">B.Sc.</td>
            <td className="px-4 py-2">
              Information & Communication Technology (ICT)
            </td>
            <td className="px-4 py-2">Comilla University</td>
            <td className="px-4 py-2">2018</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Qualifications;
