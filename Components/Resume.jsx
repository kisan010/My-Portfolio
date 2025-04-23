import { Footer } from "./Footer";
import { Navsection } from "./Navsection";

const workExperience = [
  { period: "2023 MAY - 2024 OCT", title: "FrontEnd Developer", company: "Bitforce Private Software Solutions" },
  { period: "2024 OCT - Till Date", title: "Freelancer" },
];

const education = [
  { period: "2019 - 2021", title: "Msc Comp Sc.", score: "Secured 72.60%" },
  { period: "2016 - 2019", title: "Bsc Comp Sc.", score: "Secured 68.12%" },
  { period: "2014 - 2016", title: "12th", score: "Secured 64.50%" },
  { period: "2014", title: "10th", score: "Secured 75%" },
];

const skills = ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap", "Tailwind CSS","supaBase","fireBase"];

export const Resume = () => {
  return (
    <>
      <Navsection />
      <div style={{ margin: "5.5rem" }}>
        <h1 className="font-bold text-4xl">Resume</h1>
      </div>

      <div className="resume" style={{ marginLeft: "5rem" }}>
        {/* Work Experience */}
        <section className="container flex">
          <div className="w-1/2">
            <h1 className="font-semibold text-2xl">Work Experience</h1>
          </div>
          <div className="w-1/2">
            {workExperience.map((exp, index) => (
              <div key={index} style={{marginBlock:'10px'}}>
                <p>{exp.period}</p>
                <h1 className="font-semibold text-xl">{exp.title}</h1>
                {exp.company && <p>{exp.company}</p>}
              </div>
            ))}
          </div>
        </section>

        <hr className="my-8" />

        {/* Education */}
        <section className="container flex">
          <div className="w-1/2">
            <h1 className="font-semibold text-2xl">Education</h1>
          </div>
          <div className="w-1/2 mt-3">
            {education.map((edu, index) => (
              <div key={index}>
                <p>{edu.period}</p>
                <h1 className="font-semibold text-xl">{edu.title}</h1>
                <p>{edu.score}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-8" />

        {/* Skills & Expertise */}
        <section className="container flex">
          <div className="w-1/2">
            <h1 className="font-semibold text-2xl">Skills & Expertise</h1>
          </div>
          <div className="w-1/2 mt-3">
            <ul>
              {skills.map((skill, index) => (
                <li key={index} className="font-semibold text-xl list-disc">{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
