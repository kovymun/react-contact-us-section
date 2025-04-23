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
        {hours.map(({ id, title, hour_content }) => (
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
              onClick={() => {
                const dialog = document.getElementById(
                  "medi-contact-modal"
                ) as HTMLDialogElement;
                dialog?.showModal();
              }}
              className="mt-4 bg-[#2c786c] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer uppercase"
            >
              Request an Appointment
            </button>
          </div>
        ))}

        {/* Location */}
        {location.map(({ id, title, loc_content }) => (
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
            {loc_content.map(({ centre_name, centre_address, centre_city }) => (
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
            {contact_content.map(({ phone, whatsapp, email }) => (
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

      {/* Appointment Request Modal */}
      <dialog
        id="medi-contact-modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white text-[#2e2e2e] max-w-content">
          <h3 className="font-bold text-lg text-center border-b-4 p-2">
            Appointment Request
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Please fill in your details and our team will get back to you within
            24 hours to confirm your appointment.
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            We'll reach out via phone or email to finalize your booking.
          </p>
          <p className="text-xs text-red-500 mt-2">
            *Note: Submitting this form does not guarantee an appointment slot.
          </p>

          <div className="modal-action">
            <div className="w-full">
              {" "}
              <form method="dialog" className="grid grid-cols-4 gap-2">
                {/* Patient Name */}
                <div className="col-span-4">
                  <label className="block mb-1 font-medium text-sm">Patient Name</label>
                  <div className="flex gap-2 bg-white">
                    <input
                      type="text"
                      placeholder="First"
                      className="block w-full px-4 py-2 text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                    />
                    <input
                      type="text"
                      placeholder="Last"
                      className="block w-full px-4 py-2 text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Patient Contact Info */}
                <div className="col-span-2 mt-2">
                  <label className="block mb-1 font-medium text-sm">
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="block w-full px-4 py-2 text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                  />
                </div>
                <div className="col-span-2 mt-2">
                  <label className="block mb-1 font-medium text-sm">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                  />
                </div>

                {/* <button className="">Close</button> */}
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ContactUs;
