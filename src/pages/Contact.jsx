import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function Contact() {
    return (
        <div
            className="coverImg-wrapper"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="cover-items px-4 sm:px-8">
                <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
                    Contact Us
                </h2>
                <form
                    action="https://formsubmit.co/menokoog@gmail.com"
                    method="POST"
                    className="space-y-6 w-full max-w-lg mx-auto card bg-black bg-opacity-60 p-6 rounded-lg"
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
