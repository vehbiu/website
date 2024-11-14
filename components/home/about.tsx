import React from "react";
import { MotionDiv, MotionH2 } from "../motion";
import techStack from "@/data/tech-stack";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container px-6 mx-auto">
        <MotionH2
          className="mb-8 text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </MotionH2>
        <MotionDiv
          className="grid gap-12 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div>
            <p className="mb-4 text-lg">
              I'm a passionate self-taught developer currently in high school student, living near Chicago.
              My passion comes from seeing the result of something I created myself and helps encourage me.
            </p>
            <p className="text-lg">
              I'm constantly learning new things, and am open to learn more. Currently, I'm focusing refining my skills and learning new technologies.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack["📕Languages"].map((skill) => (
                <Link
                  key={skill.name}
                  href={skill.url}
                  className="p-3 text-center transition-all duration-200 bg-gray-700 rounded-lg hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
                >
                  {skill.name}
                </Link>
                // <div key={skill.name} className="p-3 text-center bg-gray-700 rounded-lg">
                //   {skill.name}
                // </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;