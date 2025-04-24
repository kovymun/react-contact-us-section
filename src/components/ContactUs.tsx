import { Clock, MapPin, Phone, MessageCircleMore } from "lucide-react";
import { MediCentreDB } from "../types/contact";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

// Step 1: Define props interface
interface ContactUsProps {
  data: MediCentreDB;
}

type AppointmentFormInputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  practitioner: string;
  preferredTime: string;
  reason: string;
};

function ContactUs({ data }: ContactUsProps) {
  // Destructuring data
  const { hours, location, contact } = data;

  // useForm hook
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormInputs>();

  const emailRegexPattern = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  );

  const mobileRegexPattern = new RegExp(/^[0-9]{10}$/);

  const reqAppointment = () => {
    reset();
    console.log("TEST");
  };

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
              className="mt-4 bg-[#2c786c] text-white px-4 py-2 font-semibold cursor-pointer tracking-wide uppercase"
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
        <div className="modal-box bg-white text-[#2e2e2e] max-w-content overflow-auto">
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
              <form
                method="dialog"
                onSubmit={handleSubmit(reqAppointment)}
                className="grid grid-cols-4 gap-2"
              >
                {/* Daisy UI btn */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>

                {/* Patient Name */}
                <div className="col-span-4">
                  <label
                    htmlFor="firstName"
                    className="block mb-1 font-medium text-sm"
                  >
                    Patient Name
                  </label>
                  <div className="flex gap-2 bg-white">
                    <input
                      type="text"
                      placeholder="First"
                      className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "Patient first name is required",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <p className="grid">{errors.firstName.message}</p>
                    )}
                    <input
                      type="text"
                      placeholder="Last"
                      className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Patient last name is required",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <p className="grid">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Patient Contact Info */}
                <div className="col-span-2 mt-2">
                  <label
                    htmlFor="number"
                    className="block mb-1 font-medium text-sm"
                  >
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                    maxLength={10}
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Mobile number is required",
                      },
                      pattern: {
                        value: mobileRegexPattern,
                        message: "Please enter a valid mobile number",
                      },
                      minLength: {
                        value: 10,
                        message: "Mobile number should be at least 10 digits",
                      },
                    })}
                  />
                  {errors.phone && <p className="">{errors.phone.message}</p>}
                </div>
                <div className="col-span-2 mt-2">
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-sm"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm focus:outline-none leading-relaxed"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email address is required",
                      },
                      pattern: {
                        value: emailRegexPattern,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && <p className="">{errors.email.message}</p>}
                </div>

                {/* Who to See */}
                <div className="md:col-span-4 bg-white mt-2">
                  <label className="block mb-1 font-medium text-sm">
                    Who do you need to see?
                  </label>
                  <select className="px-4 py-2 w-full border border-gray-300 text-sm mt-1" defaultValue="Select a practitioner">
                    <option className="text-gray-400 text-sm" disabled>
                      Select a practitioner
                    </option>

                    <option className="text-[#2e2e2e]">
                      General Practitioner- Dr. Ayesha Khan
                    </option>
                    <option className="text-[#2e2e2e]">
                      Pediatrician - Dr. Sipho Dlamini
                    </option>
                    <option className="text-[#2e2e2e]">
                      Dentist - Dr. Thandi Mokoena
                    </option>
                    <option className="text-[#2e2e2e]">
                      Physiotherapist - Dr. Pieter van der Merwe
                    </option>
                    <option className="text-[#2e2e2e]">
                      Biokineticist - Dr. Candice Naidoo
                    </option>
                  </select>
                </div>

                {/* Preferred Time: Date + Time Picker */}
                <div className="md:col-span-4 text-sm mt-2">
                  <label className="block mb-1 font-medium text-sm">
                    Preferred Appointment Time
                  </label>
                  <input
                    type="datetime-local"
                    className="px-4 py-2 border border-gray-300 w-full text-sm"
                  />
                </div>

                {/* Reason for Visit */}
                <div className="md:col-span-4 text-sm mt-2">
                  <label className="block mb-1 font-medium my-1">
                    Reason for Visit
                  </label>
                  <textarea
                    className="border border-gray-300 w-full"
                    rows={3}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="col-span-4 mt-4 bg-[#2c786c] text-white px-4 py-2 font-semibold cursor-pointer tracking-wide uppercase"
                >
                  {isSubmitting
                    ? "Confirming Appointment..."
                    : "Request Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ContactUs;
