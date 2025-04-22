import { Clock, MapPin, Phone, MessageCircleMore } from "lucide-react";

function ContactUs() {
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
        <div id="hours" className="bg-[#81E7AF] text-[#2e2e2e] p-10 border-r-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span>
              <Clock size={35} />
            </span>
            Our Hours
          </h2>
          <p className="mt-4 text-md">
            <strong>Mon - Thu:</strong> 7:40 AM – 5:00 PM
          </p>
          <p className="mt-3 text-md">
            <strong>Friday:</strong> 7:30 AM – 1:00 PM
          </p>
          <p className="mt-3 text-md">
            <strong>Saturday:</strong> 8:00 AM – 12:00 PM
          </p>
          <button
            onClick={() => alert("Request Appointment")}
            className="mt-4 bg-[#2c786c] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer"
          >
            Request an Appointment
          </button>
        </div>

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
