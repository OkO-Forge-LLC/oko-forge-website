import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function Consulting() {
    const cards = [
        {
            title: "Strategic Planning",
            content: "Navigate challenges with a clear roadmap to success.",
        },
        {
            title: "Operational Execution",
            content: "Efficient implementation of tailored strategies.",
        },
        {
            title: "Team Empowerment",
            content: "Mentorship and guidance to inspire your team.",
        },
    ];

    return (
        <div
            className="coverImg-wrapper mt-16" // Ensures space below the fixed header
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="cover-items text-center px-4">
                <h1 className="leading-tight mb-4">Consulting Services</h1>

                <div className="motto-card mx-auto mt-4 mb-8 p-4 rounded-lg shadow-lg">
                    <p className="text-lg sm:text-xl text-gray-100 font-semibold italic">
                        "Guidance That Drives Innovation and Growth."
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
