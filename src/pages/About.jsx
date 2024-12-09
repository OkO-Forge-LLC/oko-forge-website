import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function About() {
    const team = [
        {
            name: 'Zak "Oko-Kush" Ward',
            role: "JavaScript & TypeScript Full Stack Developer",
            description: `My greatest passion is helping others. Through my time as a professional firefighter, Army officer, 
      and business-owner, and most recently Web Development Sr. Instructor, I developed and honed my talents of leadership, 
      loyalty, and teamwork. Web Development allows me to use my high attention for detail and creativity to help build innovative 
      and pertinent web applications. My goal is to use my leadership skills and passion for education and coding to help others 
      realize and reach their potential in tech.`,
            linkedin: "https://www.linkedin.com/in/zakmward/",
            github: "https://github.com/zakward",
            portfolio: "https://freelance-portfolio-z858.onrender.com/",
        },
        {
            name: 'Lawrence "Menoko OG" Jefferson II',
            role: "JavaScript, TypeScript & Python Full Stack Developer",
            description: `I like to build stuff to help solve problems with software! Well-rounded professional with a strong 
      background in leadership, employing modern technology, and encouraging teams to achieve successful outcomes. Coming from a 
      family rooted in technology, I enjoy investigating and learning about applications and technology stacks so that I may 
      leverage them in my duties.`,
            linkedin: "https://www.linkedin.com/in/lawrence-jefferson-ii-46497075/",
            github: "https://github.com/MenokoOG",
            portfolio: "https://ljefferson-menoko-site.netlify.app/",
        },
        {
            name: 'Jordan "OkoGoblin" Burger',
            role: "JavaScript & TypeScript Full Stack Developer",
            description: `I am a dedicated web developer who thrives on problem-solving and continuous learning. With a passion for 
      backend development using Mongoose and Express, I have built and taught full stack MERN modules, sharing my knowledge 
      to empower new coders. My goal is to create impactful technology that improves people's lives. As an instructor, I stay 
      updated with the latest trends and pride myself on explaining complex concepts in an accessible way.`,
            linkedin: "https://www.linkedin.com/in/jordan-burger/",
            github: "https://github.com/jordanburger22",
            portfolio: "https://jordan-burger.netlify.app/",
        },
    ];

    return (
        <div
            className="coverImg-wrapper"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="content-container text-white">
                <h2 className="text-4xl font-bold text-[#FF8C00] mb-6 text-center">
                    About Us
                </h2>
                <p className="text-gray-300 leading-7 mb-6 text-center">
                    At OkO-Forge, we specialize in modern full-stack technologies, crafting tailored solutions
                    that meet your web development needs. Guided by our motto, <strong>LAHA – Love All Humans Always</strong>,
                    we focus on mentorship, innovation, and delivering solutions that inspire.
                </p>

                <h3 className="text-3xl font-semibold text-[#00FFCC] mb-4 text-center">
                    Meet the Team
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 text-center shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <h4 className="text-2xl font-semibold text-[#FF8C00] mb-2">
                                {member.name}
                            </h4>
                            <p className="text-gray-300 mb-4">{member.role}</p>
                            <p className="text-gray-200 text-sm mb-4">
                                {member.description}
                            </p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#00FFCC] hover:underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#FF8C00] hover:underline"
                                >
                                    LinkedIn
                                </a>
                                {member.portfolio && (
                                    <a
                                        href={member.portfolio}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#6200EA] hover:underline"
                                    >
                                        Portfolio
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
