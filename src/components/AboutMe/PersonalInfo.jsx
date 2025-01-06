import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      {/* Description */}
      <h3 className="font-bold text-neutral text-xl md:text-2xl">
        React Developer
      </h3>
      <p className="text-base-content text-sm md:text-base">
        I am a React developer with 6 months of hands-on experience and a B.Sc.
        and M.Sc. in Information and Communication Technology which has provided
        me with a strong foundation in programming, problem-solving, and
        software development. I’m passionate about building responsive web
        applications and eager to learn and adopt new technologies. With a
        strong interest in AI/ML, I aim to combine my skills in front-end
        development with emerging intelligent systems. I’m committed to
        delivering quality solutions and continuously improving my expertise.
      </p>

      {/* Details */}

      <div className="mt-10">
        <table className="border-gray-300 border rounded-md w-full text-sm md:text-base">
          <tbody className="gap-x-4 grid grid-cols-2">
            {/* Column 1 */}
            <tr className="flex border-b">
              <td className="px-4 py-2 font-bold">👤 Name:</td>
              <td className="px-4 py-2">Md. Shoriful Islam</td>
            </tr>
            <tr className="flex border-b">
              <td className="px-4 py-2 font-bold">📞 Phone:</td>
              <td className="px-4 py-2">+880 1818424256</td>
            </tr>
            <tr className="flex border-b">
              <td className="px-4 py-2 font-bold">📧 Email:</td>
              <td className="px-4 py-2">sitarek77@email.com</td>
            </tr>
            {/* <div className="divider"></div> */}

            {/* Column 2 */}
            <tr className="flex border-b">
              <td className="px-4 py-2 font-bold">🎂 Birthday:</td>
              <td className="px-4 py-2">Born on 01 Nov, 1994</td>
            </tr>
            <tr className="flex border-b">
              <td className="px-4 py-2 font-bold">🎓 Education:</td>
              <td className="px-4 py-2">
                Master in Information and Communication Technology (ICT)
              </td>
            </tr>
            <tr className="flex">
              <td className="px-4 py-2 font-bold">🏠 Address:</td>
              <td className="px-4 py-2">Chittagong, Dhaka</td>
            </tr>
            <tr className="flex">
              <td className="px-4 py-2 font-bold">Language Skills:</td>
              <td className="px-4 py-2">Bangla, English</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalInfo;
