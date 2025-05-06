import { FaCheck } from "react-icons/fa";
import BookingInputBox from "./BookingInputBox";

export default function MainSection({ imgUrl, heading, subheading, features }) {
    return (
        <div
            className="bg-center bg-no-repeat bg-cover h-[85vh] flex items-center justify-center"
            style={{ backgroundImage: `url(${imgUrl})`, opacity: 0.7 }}>
            <div className="text-center">
                {/* Heading */}
                <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-yellow-300 max-[650px]:hidden">
                    {heading}
                </h1>

                {/* Features */}
                <p className="max-[980px]:hidden flex justify-center gap-3.5 text-xl text-white font-bold pt-2.5">
                    {features.map((feature, index) => (
                        <span key={index} className="flex items-center "><FaCheck /> {feature.name}</span>
                    ))}
                </p>

                {/* Subheading */}
                <h4 className="text-white text-xl font-bold pt-2">
                    {subheading}
                </h4>

                {/* Booking Input Box */}
                <BookingInputBox/>
            </div>
        </div>
    );
}
