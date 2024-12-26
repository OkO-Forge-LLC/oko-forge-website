import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function Consulting() {
    const cards = [
        {
            title: "Mentorship for Teams",
            content: "Guiding development teams with hands-on mentoring and leadership.",
        },
        {
            title: "Junior Developer Growth",
            content: "Empowering junior developers through training and real-world guidance.",
        },
        {
            title: "Collaborative Innovation",
            content: "Working alongside your team to foster creativity and problem-solving.",
        },
    ];

    return (
        <div
            className="coverImg-wrapper mt-16"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="cover-items text-center px-4">
                <h1 className="leading-tight mb-4">Consulting Services</h1>

                <div className="motto-card mx-auto mt-4 mb-8 p-4 rounded-lg shadow-lg">
                    <p className="text-lg sm:text-xl text-gray-100 font-semibold italic">
                        "Inspiring developers, empowering teams."
                    </p>
                </div>

                <div className="content-container mx-auto px-4 sm:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="team-card p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <h4 className="text-2xl font-semibold text-[#d1b074] mb-2">
                                    {card.title}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {card.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}