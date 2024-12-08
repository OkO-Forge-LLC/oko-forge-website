import Navbar from "../components/Navbar";
import okoforge from "../assets/OkO Forge LLC.png";

export default function Home() {
    return (
        <div className="bg-[#1A1A1A] text-white min-h-screen">
            <Navbar />
            <div className="pt-24 text-center px-6">
                <h1 className="text-5xl font-bold text-[#FF8C00] animate-fade-in">
                    Welcome to OkO FORGE
                </h1>
                <p className="mt-4 text-xl text-gray-300">
                    Web Development | Mentorship | Consultancy
                </p>
                <p className="mt-2 text-lg text-gray-400">
                    Modern full-stack solutions tailored for your business needs.
                </p>
                <div className="flex justify-center mt-8">
                    <img
                        src={okoforge}
                        alt="OkO Forge Logo"
                        className="w-1/2 md:w-1/3 transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-lg shadow-[#00FFCC]/50 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
