import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <div className="bg-[#1A1A1A] text-white min-h-screen">

            <div className="pt-24 px-6 md:px-32">
                <h2 className="text-4xl font-bold text-[#FF8C00] mb-6">Contact Us</h2>
                <form
                    action="https://formsubmit.co/jefftkddan@gmail.com"
                    method="POST"
                    className="space-y-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded bg-gray-800 text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded bg-gray-800 text-white"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full p-3 rounded bg-gray-800 text-white"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#FF8C00] text-black py-2 px-4 rounded hover:bg-[#6200EA] transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
