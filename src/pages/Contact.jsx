import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function Contact() {
    return (
        <div
            className="coverImg-wrapper"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="cover-items">
                <h2 className="text-4xl font-bold text-[#FF8C00] mb-6">Contact Us</h2>
                <form
                    action="https://formsubmit.co/jefftkddan@gmail.com"
                    method="POST"
                    className="space-y-6 w-full max-w-lg"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="input-field w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="input-field w-full"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="input-field w-full"
                    ></textarea>
                    <button type="submit" className="button w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
