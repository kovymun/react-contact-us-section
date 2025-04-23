import { Clock, MapPin, Phone, MessageCircleMore } from "lucide-react";
import { MediCentreDB } from "../types/contact"; // 👈 import type
import { v4 as uuidv4 } from "uuid";

// Step 1: Define props interface
interface ContactUsProps {
  data: MediCentreDB;
}

function ContactUs({ data }: ContactUsProps) {
  // Destructuring data
  const { hours, location, contact } = data;
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
        {hours.map(({id, title, hour_content}) => (
          <div
            key={uuidv4()}
            id={id}
            className="bg-[#81E7AF] text-[#2e2e2e] p-10 border-r-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Clock size={35} />
              {title}
            </h2>
            <div className="mt-4 text-md">
              {hour_content.map((time) => (
                <p className="mt-3 text-md" key={uuidv4()}>
                  {time}
                </p>
              ))}
            </div>
            <button
              onClick={() => alert("Request Appointment")}
              className="mt-4 bg-[#2c786c] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer uppercase"
            >
              Request an Appointment
            </button>
          </div>
        ))}

        {/* Location */}
        {location.map(({id, title, loc_content}) => (
          <div
            key={uuidv4()}
            id={id}
            className="bg-[#81E7AF] text-[#2e2e2e] p-10 border-r-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span>
                <MapPin size={35} />
              </span>
              {title}
            </h2>
            {loc_content.map(({centre_name, centre_address, centre_city}) => (
              <div key={uuidv4()} className="mt-4 text-md">
                <p className="mt-4">{centre_name}</p>
                <p className="mt-4">{centre_address}</p>
                <p className="mt-4">{centre_city}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Contact Details */}
        {contact.map(({ id, title, contact_content }) => (
          <div
            id={id}
            key={uuidv4()}
            className="bg-[#81E7AF] text-[#2e2e2e] p-10"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span>
                <Phone size={35} />
              </span>
              {title}
            </h2>
            {contact_content.map(({phone, whatsapp, email}) => (
              <div key={uuidv4()}>
                <p className="mt-4 text-md">
                  <strong>Phone:</strong> {phone}
                </p>
                <p className="mt-3 text-md">
                  <strong>WhatsApp (Emergencies only):</strong> {whatsapp}
                </p>
                <p className="mt-3 text-md">
                  <strong>Email:</strong> {email}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
