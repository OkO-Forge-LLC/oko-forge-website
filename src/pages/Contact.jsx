import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function Contact() {
    return (
        <div
            className="coverImg-wrapper mt-16"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="cover-items text-center px-4">
                {/* Page Title */}
                <h2 className="leading-tight mb-4 text-[#d1b074] text-4xl font-semibold">
                    Contact Us
                </h2>

                {/* Motto Card */}
                <div className="motto-card mx-auto mt-4 mb-8 p-4 rounded-lg shadow-lg">
                    <p className="text-lg sm:text-xl text-gray-100 font-semibold italic">
                        "We’d Love to Hear From You!"
                    </p>
                </div>

                {/* Contact Form */}
                <form
                    action="https://formsubmit.co/menokoog@gmail.com"
                    method="POST"
                    className="card mx-auto space-y-6 max-w-md p-6 rounded-lg shadow-lg"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="input-field"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="input-field"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="input-field"
                    ></textarea>
                    <button type="submit" className="button w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
