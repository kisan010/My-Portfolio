import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { Navsection } from "./Navsection";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


export const Projects = () => {
  const cards = [
    {
      title: "Farming website",
      skills: ["React", "Express.js", "MongoDB", "Vanilla CSS", "JWT"],
      image: "./images/farm.png",
      alt: "farming website",
      link: "https://farming-website-three.vercel.app",
      git:'https://github.com/kisan010/Farming-website'
    },

    {
      title: "Portfolio",
      skills: ["React", "TailwindCss", "Firebase"],
      image: "./images/portfolio.png",
      alt: "portfolio ",
      link: "https://my-portfolio-beige-phi-36.vercel.app/",
      git:'https://github.com/kisan010/My-Portfolio'
    },
    {
      title: "Consultancy Website",
      skills: ["React", "Bootstrap", "Supabase"],
      image: "./images/Consultancy website.png",
      alt: "consultancy website",
      link: "https://mmconsultancycareer.com",
        git:''
    },
  ];

  return (
    <>
      <section style={{ margin: "5.5rem" }} id='projects' data-aos="fade-up">
        <div className="title">
          <h1
            className="font-bold text-2xl  sm:text-7xl text-center "
            style={{ marginBottom: "0.9rem" }}
          >
            Projects
          </h1>
          <p className="text-center">
            A showcase of my Web development journey
          </p>
        </div>
        <div
          className="flex flex-col align-middle items-center gap-[3rem] sm:flex-row sm:items-center sm:gap-[10rem]"
          style={{ paddingBlock: "5rem", paddingInline: "2rem" }}
        >
          {cards.map((item, index) => {
            return (
              <>
                <div className="card w-[230px] sm:w-[350px] h-[330px] border border-[#2ca6af] rounded-lg shadow-xl cursor-pointer hover:border-[#8bbec2] hover:scale-110 transition duration-150 ease-in-out ">
                  <div className=" w-full h-[180px]  ">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt={item.alt}
                    />
                  </div>
                  <div className="h-[150px] flex flex-col justify-between">
                    <div className="title flex items-center justify-center " style={{ padding: "10px" }}>
                      <h3 className="poppins-medium text-xl tracking-wide   flex gap-2">
                        {item.title} 
                         <a className="material-symbols-outlined shadow h-[15px] hover:scale-120 cursor-pointer" href={item.link}>visibility</a>
                         <a href={item.git}><FontAwesomeIcon icon={faGithub} className="shadow  sm:h-[10px] cursor-pointer hover:scale-120" /></a>
                      </h3>
                     
                    </div>
                    <div
                      className="techUsed flex flex-wrap gap-1"
                      style={{ padding: "15px" }}
                    >
                      {item?.skills.map((item) => {
                        return (
                          <>
                            <span
                              className="shadow-lg"
                              style={{ padding: "5px" }}
                            >
                              {item}
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex align-middle justify-center">
          <a type='button' href='https://github.com/kisan010'style={{padding:'10px'}} className="shadow-lg hover:border border-[#6bccd3]">View all projects<FontAwesomeIcon icon={faLink} style={{marginLeft:'5px'}} /></a>
        </div>
      </section>
    </>
  );
};
