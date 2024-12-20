import coverImg from "../assets/hammer.png";
import zakImg from "../assets/zak2.png";
import ljImg from "../assets/lj.jpg";
import jordanImg from "../assets/jordan.jpg";
import "../css/Home.css";

export default function About() {
    const team = [
        {
            name: "Zak Ward",
            role: "JavaScript & TypeScript Full Stack Developer",
            description: `My greatest passion is helping others. Through my time as a professional firefighter, Army officer, 
      and business-owner, and most recently Web Development Sr. Instructor, I developed and honed my talents of leadership, 
      loyalty, and teamwork.`,
            linkedin: "https://www.linkedin.com/in/zakmward/",
            github: "https://github.com/zakward",
            portfolio: "https://freelance-portfolio-z858.onrender.com/",
            image: zakImg,
        },
        {
            name: "Lawrence Jefferson II",
            role: "JavaScript, TypeScript & Python Full Stack Developer",
            description: `I like to build stuff to help solve problems with software! Well-rounded professional with a strong 
      background in leadership, employing modern technology, and encouraging teams to achieve successful outcomes.`,
            linkedin: "https://www.linkedin.com/in/lawrence-jefferson-ii-46497075/",
            github: "https://github.com/MenokoOG",
            portfolio: "https://ljefferson-menoko-site.netlify.app/",
            image: ljImg,
        },
        {
            name: "Jordan Burger",
            role: "JavaScript & TypeScript Full Stack Developer",
            description: `I am a dedicated web developer who thrives on problem-solving and continuous learning. With a passion for 
      backend development using Mongoose and Express, I have built and taught full stack MERN modules, sharing my knowledge.`,
            linkedin: "https://www.linkedin.com/in/jordan-burger/",
            github: "https://github.com/jordanburger22",
            portfolio: "https://jordan-burger.netlify.app/",
            image: jordanImg,
        },
    ];

    return (
        <div
            className="coverImg-wrapper mt-16" // Added margin under fixed header
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            {/* About Title */}
            <div className="cover-items text-center px-4">
                <h1 className="leading-tight mb-4 about-heading">About Us</h1>

                {/* About Motto */}
                <div className="motto-card mx-auto mt-4 mb-8 p-4 rounded-lg shadow-lg">
                    <p className="text-lg sm:text-xl text-gray-100 font-semibold italic">
                        "Crafting Tailored Solutions, Inspiring Innovation"
                    </p>
                </div>

                {/* Team Section */}
                <div className="content-container mx-auto px-4 sm:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="team-card p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-[#d1b074]"
                                />
                                <h4 className="text-2xl font-semibold text-[#d1b074] mb-2">
                                    {member.name}
                                </h4>
                                <p className="text-[#00FFCC] mb-4">{member.role}</p>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {member.description}
                                </p>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#00FFCC] hover:text-[#d1b074] transition-all duration-300"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#00FFCC] hover:text-[#d1b074] transition-all duration-300"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href={member.portfolio}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#00FFCC] hover:text-[#d1b074] transition-all duration-300"
                                    >
                                        Portfolio
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
