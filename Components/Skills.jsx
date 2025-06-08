
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaBootstrap,FaNodeJs   } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress,SiMongodb } from "react-icons/si";
{/*  */}
{/* <FaHtml5 /> */}
//  <FaCss3Alt />
{/* <FaJs /> */}
// FaReact 
{/*  */}
{/*  */}
{/*  */}
{/*  */}
const Skills=()=>{

let skills=[
    {
        "title":'HTML',
        "icon":<FaHtml5 />,
        "color":'orange'
    },
     {
        "title":'CSS',
        "icon":<FaCss3Alt />,
        "color":'#254BDD'
    },
     {
        "title":'JS',
        "icon":<FaJs />,
        "color":'#EFD81D'
    },
     {
        "title":'React',
        "icon":<FaReact />,
        "color":'#00D0F7'
        
    },
     {
        "title":'Bootstrap',
        "icon":<FaBootstrap />,
        "color":'#7710F1'
    },
     {
        "title":'Tailwind CSS',
        "icon":<RiTailwindCssFill />,
        "color":'#36B7F0'
    },
     {
        "title":'Node JS',
        "icon":<FaNodeJs />,
        "color":'#313131'
    },
     {
        "title":'EXpress JS',
        "icon":<SiExpress />
    },
     {
        "title":'Mongo DB',
        "icon":<SiMongodb />,
        "color":'#118D4D'
    },
    
]





    return(
        <>
         <section style={{ margin: "8.5rem" }} id="skills" data-aos="fade-up">
             <div className="title">
          <h1
            className="font-bold text-7xl text-center "
            style={{ marginBottom: "0.9rem" }}
          >
            Skills
          </h1>
          <p className="text-center">
            Technologies I used to build modern web applications
          </p>
        </div>
        <div className="skill-set flex align-middle justify-center flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap gap-10" style={{marginTop:'3rem',paddingInline:'15rem'}}>
          {
            skills.map((item,index)=>{
                return(
                    <>
                    <span className="flex justify-center align-middle  shadow-lg hover:scale-120" style={{padding:'10px'}}>
                        <span className={`text-${item.color}`}>{item.icon}</span>
                        <span>{item.title}</span>
                        </span>
                    </>
                )
            })
          }
        </div>
         </section>
        </>
    )
}

export default Skills;