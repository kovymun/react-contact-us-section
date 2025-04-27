import { Clock, MapPin, Phone, MessageCircleMore } from "lucide-react";
import { MediCentreDB } from "../types/contact";
import { v4 as uuidv4 } from "uuid";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

// Step 1: Define props interface
interface ContactUsProps {
  data: MediCentreDB;
}

interface AppointmentFormInputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  practitioner: string;
  preferredTime: string;
  reason: string;
}

function ContactUs({ data }: ContactUsProps) {
  // Destructuring data
  const { hours, location, contact, practitioners } = data;

  // useForm hook
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormInputs>({
    defaultValues: {
      practitioner: "",
    },
  });

  //Regex pattern validations
  const emailRegexPattern = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  );
  const mobileRegexPattern = new RegExp(/^[0-9]{10}$/);

  //Functions to display toast notifications
  const notifySuccess = () =>
    toast.success("Appointment Scheduled Successfully!", {
      duration: 4000,
    });
  const notifyError = () =>
    toast.error("Something went wrong! Please try again.", {
      duration: 4000,
    });

  const reqAppointment = async (formData: AppointmentFormInputs) => {
    try {
      // We are delaying submission here (simulation)
      await new Promise<void>((resolve) => setTimeout(resolve, 3000));

      //Log the user input to the console
      console.log("Scheduled Appointment:", formData);

      // JSON conversion simulation
      const json = JSON.stringify(formData);
      console.log("JSON Payload to be sent to backend:", json);
      reset();
      (
        document.getElementById("medi-contact-modal") as HTMLDialogElement
      )?.close();
      notifySuccess();

      // Log error to the console / trigger toast notification
    } catch (error) {
      console.error("Failed to schedule appointment:", error);
      notifyError();
    }
  };

  // User Action - Close the Request Appointment Modal
  const handleModalClose = async () => {
    reset();
    (
      document.getElementById("medi-contact-modal") as HTMLDialogElement
    )?.close();
  };

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center font-sans">
      {/* Contact Us Section Intro */}
      <div
        id="contact-intro"
        className="flex flex-col items-center justify-center w-full bg-[#81E7AF] text-[#2e2e2e] sm:py-8 sm:px-20 border-b-2 border-[#2e2e2e]"
      >
        <div className="p-10 sm:p-0">
          <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase tracking-wide">
            <MessageCircleMore size={35} />
            Contact Us
          </h1>

          <p className="mt-4 max-w-2xl">
            We're here to help you feel your best. Whether you're booking an
            appointment, looking for directions, or have a question for our
            team,{" "}
            <span className="font-semibold">Riverside Medical Centre</span> is
            just a call or click away.
          </p>
        </div>
      </div>

      {/* Content-Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        {/* Opening Hours */}
        {hours.map(({ id, title, hour_content }) => (
          <div
            key={uuidv4()}
            id={id}
            className="flex flex-col items-center text-center sm:items-start sm:text-left bg-[#81E7AF] text-[#2e2e2e] px-4 py-8 sm:p-10 border-b-2 border-[#2e2e2e]"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>
                <Clock size={35} />
              </span>
              <span className="tracking-wide">{title}</span>
            </h2>
            <div className="mt-2">
              {hour_content.map((time) => (
                <p className="mt-2" key={uuidv4()}>
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
              className="mt-4 bg-[#2c786c] text-white text-sm px-4 py-2 font-semibold cursor-pointer tracking-wide uppercase"
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
            className="flex flex-col items-center text-center sm:items-start sm:text-left bg-[#81E7AF] text-[#2e2e2e] px-4 py-8 sm:p-10 border-b-2 sm:border-x-2 border-[#2e2e2e]"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2 tracking-wide">
              <span>
                <MapPin size={35} />
              </span>
              <span className="tracking-wide">{title}</span>
            </h2>
            {loc_content.map(({ centre_name, centre_address, centre_city }) => (
              <div key={uuidv4()} className="mt-2">
                <p className="mt-2 font-semibold">{centre_name}</p>
                <p className="mt-2">{centre_address}</p>
                <p className="mt-2">{centre_city}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Contact Details */}
        {contact.map(({ id, title, contact_content }) => (
          <div
            id={id}
            key={uuidv4()}
            className="flex flex-col items-center text-center sm:items-start sm:text-left bg-[#81E7AF] text-[#2e2e2e] px-4 py-8 sm:p-10 border-b-2 border-[#2e2e2e]"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>
                <Phone size={35} />
              </span>
              <span className="tracking-wide">{title}</span>
            </h2>
            {contact_content.map(({ phone, whatsapp, email }) => (
              <div key={uuidv4()} className="mt-2">
                <p className="mt-2">
                  <span className="font-semibold tracking-wide">Phone:</span>{" "}
                  {phone}
                </p>
                <p className="mt-2">
                  <span className="font-semibold tracking-wide">
                    WhatsApp (Emergencies only):
                  </span>{" "}
                  {whatsapp}
                </p>
                <p className="mt-2">
                  <span className="font-semibold tracking-wide">Email:</span>{" "}
                  {email}
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
          <p className="text-sm text-gray-600 mt-3">
            Please fill in your details and our team will get back to you within
            24 hours to confirm your appointment.
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            We'll reach out via phone or email to finalize your booking.
          </p>
          {/* Optional Note: TBD */}
          {/* <p className="text-xs text-red-500 mt-2">
            *Note: Submitting this form does not guarantee an appointment slot.
          </p> */}

          <div className="modal-action">
            <div className="w-full">
              {" "}
              <form
                method="dialog"
                onSubmit={handleSubmit(reqAppointment)}
                className="grid grid-cols-4 gap-2"
              >
                {/* Daisy UI btn */}
                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={handleModalClose}
                >
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
                    <div>
                      <input
                        type="text"
                        placeholder="First"
                        className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm leading-relaxed focus:outline-2 focus:outline-offset-1 focus:outline-[#81E7AF]"
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "Please enter the patient's first name",
                          },
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-2">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Last"
                        className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm leading-relaxed focus:outline-2 focus:outline-offset-1 focus:outline-[#81E7AF]"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Please enter the patient's last name",
                          },
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-2">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
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
                    className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm leading-relaxed focus:outline-2 focus:outline-offset-1 focus:outline-[#81E7AF]"
                    maxLength={10}
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please provide a mobile contact number",
                      },
                      pattern: {
                        value: mobileRegexPattern,
                        message: "Enter a valid mobile number (digits only)",
                      },
                      minLength: {
                        value: 10,
                        message: "Mobile number must be at least 10 digits",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-2">
                      {errors.phone.message}
                    </p>
                  )}
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
                    className="block w-full px-4 py-2 text-[#2e2e2e] bg-transparent border border-gray-300 placeholder-gray-400 placeholder:text-sm leading-relaxed focus:outline-2 focus:outline-offset-1 focus:outline-[#81E7AF]"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter an email address",
                      },
                      pattern: {
                        value: emailRegexPattern,
                        message: "Please provide a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Who to See */}
                <div className="md:col-span-4 bg-white mt-2">
                  <label className="block mb-1 font-medium text-sm">
                    Who do you need to see?
                  </label>

                  <Controller
                    name="practitioner"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Select a healthcare provider from the list",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <select
                          {...field}
                          className="px-4 py-2 w-full border border-gray-300 text-sm mt-1"
                        >
                          <option
                            className="text-gray-400 text-sm"
                            value=""
                            disabled
                          >
                            Select a practitioner
                          </option>

                          {practitioners.map(({ doctor, medicalField }) => (
                            <option
                              key={uuidv4()}
                              className="text-[#2e2e2e]"
                              value={`${doctor} - ${medicalField}`}
                            >
                              {medicalField} - {doctor}
                            </option>
                          ))}
                        </select>

                        {errors.practitioner && (
                          <p className="text-xs text-red-500 mt-2">
                            {errors.practitioner.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* Preferred Time: Date + Time Picker */}
                <div className="md:col-span-4 text-sm mt-2">
                  <label className="block mb-1 font-medium text-sm">
                    Preferred Appointment Time
                  </label>
                  <input
                    type="datetime-local"
                    className="px-4 py-2 border border-gray-300 w-full text-sm"
                    {...register("preferredTime", {
                      required: {
                        value: true,
                        message: "Please choose a preferred date and time",
                      },
                    })}
                  />
                  {errors.preferredTime && (
                    <p className="text-xs text-red-500 mt-2">
                      {errors.preferredTime.message}
                    </p>
                  )}
                </div>

                {/* Reason for Visit */}
                <div className="md:col-span-4 text-sm mt-2 text-[#]">
                  <label className="block mb-1 font-medium my-1">
                    Reason for Visit
                  </label>
                  <textarea
                    className="px-4 py-2 border border-gray-300 w-full text-[#2e2e2e] focus:outline-2 focus:outline-offset-1 focus:outline-[#81E7AF]"
                    rows={3}
                    {...register("reason", {
                      required: {
                        value: true,
                        message: "Let us know the reason for your visit",
                      },
                    })}
                  ></textarea>
                  {errors.reason && (
                    <p className="text-xs text-red-500 mt-2">
                      {errors.reason.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="col-span-4 mt-4 bg-[#2c786c] text-white px-4 py-2 font-semibold cursor-pointer tracking-wide uppercase"
                >
                  {isSubmitting
                    ? "Confirming Appointment..."
                    : "Schedule Appointment"}
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
