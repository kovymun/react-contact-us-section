import { Clock, MapPin, Phone, MessageCircleMore } from "lucide-react";
import { MediCentreDB } from "../types/contact"; // 👈 import type
import { v4 as uuidv4 } from "uuid";

// Step 1: Define props interface
interface ContactUsProps {
  data: MediCentreDB;
}

function ContactUs({ data }: ContactUsProps) {
  // Destructuring data
  const { hours } = data;
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-sans">
      {/* Contact Us Section Intro */}
      <div
        id="contact-intro"
        className="w-full text-center bg-[#81E7AF] text-[#2e2e2e] p-8 px-20 border-y-4"
      >
        <h1 className="flex items-center justify-center gap-2 text-3xl font-bold">
          <MessageCircleMore size={35} />
          Contact Us
        </h1>

        <p className="mt-4 text-md">
          We're here to help you feel your best. Whether you're booking an
          appointment, looking for directions, or have a question for our team,
          Riverside Medical Centre is just a call or click away.
        </p>
      </div>

      {/* Content-Grid */}
      <div className="w-full grid grid-cols-3 border-b-4">
        {/* Opening Hours */}
        {hours.map((timeInfo) => (
          <div
            key={uuidv4()}
            id={timeInfo.id}
            className="bg-[#81E7AF] text-[#2e2e2e] p-10 border-r-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Clock size={35} />
              {timeInfo.title}
            </h2>
            <div className="mt-4 text-md">
              {timeInfo.hour_content.map((line, index) => (
                <p className="mt-3 text-md" key={index}>
                  {line}
                </p>
              ))}
            </div>
            <button
              onClick={() => alert("Request Appointment")}
              className="mt-4 bg-[#2c786c] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer"
            >
              Request an Appointment
            </button>
          </div>
        ))}

        {/* Location */}
        <div
          id="location"
          className="bg-[#81E7AF] text-[#2e2e2e] p-10 border-r-4"
        >
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span>
              <MapPin size={35} />
            </span>
            Location
          </h2>
          <p className="mt-4 text-md">Riverside Medical Centre</p>
          <p className="mt-3 text-md">102 Willowbend Road</p>
          <p className="mt-3 text-md">Westwood, Cape Town 7700</p>
        </div>

        {/* Contact Details */}

        <div id="contact" className="bg-[#81E7AF] text-[#2e2e2e] p-10">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span>
              <Phone size={35} />
            </span>
            Contact
          </h2>
          <p className="mt-4 text-md">
            <strong>Phone: </strong>(021) 123 4568
          </p>
          <p className="mt-3 text-md">
            <strong>WhatsApp (Emergencies only): </strong>
            +27 82 123 4568
          </p>
          <p className="mt-3 text-md">
            <strong>Email:</strong> info@riversidemed.co.za
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
