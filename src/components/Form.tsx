import type { AppointmentFormInputs } from "../types/contact";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { mediCentreDB } from "../data/medi-centre-db";
import { User, CalendarClock, Lock, ChevronDown } from "lucide-react";

const Form = () => {
  // Destructuring medi-clinic data
  const { practitioners } = mediCentreDB;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormInputs>({
    defaultValues: {
      practitioner: "",
    },
  });

  // Validation Regex patterns
  const emailRegexPattern = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  );
  const mobileRegexPattern = new RegExp(/^[0-9]{10}$/);

  // Show success toast message
  const notifySuccess = () =>
    toast.success("Appointment Scheduled Successfully!", {
      duration: 4000,
    });

  // Show error toast message
  const notifyError = () =>
    toast.error("Something went wrong! Please try again.", {
      duration: 4000,
    });

  // Handling form submission
  const reqAppointment = async (formData: AppointmentFormInputs) => {
    try {
      // Simulate async delay
      await new Promise<void>((resolve) => setTimeout(resolve, 3000));

      //Log the submitted user input to the console
      console.log("Scheduled Appointment:", formData);

      // JSON conversion simulation
      const json = JSON.stringify(formData);
      console.log("JSON Payload to be sent to backend:", json);

      // Reset form and close modal
      reset();

      notifySuccess();

      // Log error to the console / trigger toast notification
    } catch (error) {
      console.error("Failed to schedule appointment:", error);
      notifyError();
    }
  };

  return (
    <div className="bg-white rounded-3xl p-10 shadow-[0_32px_64px_-12px_rgba(0,53,85,0.10)]">
      <div className="mb-8">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-4">
          Concierge Service
        </span>
        <h2 className="text-3xl font-extrabold text-blue-900 leading-tight">
          Appointment Request
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          Submit your details and we'll confirm your slot shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(reqAppointment)}
        noValidate
        className="space-y-5"
      >
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First"
              className="input-primary"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Please enter first name",
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
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last"
              className="input-primary"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Please enter last name",
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

        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+27 82 142 0809"
              className="input-primary"
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
          <div>
            <label
              htmlFor="email"
              className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="input-primary"
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
        </div>

        {/* Practitioner */}
        <div>
          <label
            htmlFor="practitioner"
            className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1"
          >
            Who do you need to see?
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              className="pl-10 appearance-none cursor-pointer input-primary"
              {...register("practitioner", {
                required: {
                  value: true,
                  message: "Medical Practitioner is required",
                },
              })}
            >
              <option value="" disabled>
                Select practitioner
              </option>
              {practitioners.map(({ practice_id, doctor, medicalField }) => (
                <option key={practice_id} value={`${doctor} - ${medicalField}`}>
                  {medicalField} - {doctor}
                </option>
              ))}
            </select>
            {errors.practitioner && (
              <p className="text-xs text-red-500 mt-2">
                {errors.practitioner.message}
              </p>
            )}
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Date/time */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1">
            Preferred Appointment Time
          </label>
          <div className="relative">
            <CalendarClock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="datetime-local"
              className="pl-10 cursor-pointer input-primary"
              {...register("appointmentTime", {
                required: {
                  value: true,
                  message: "Appointment Date is required",
                },
              })}
            />
            {errors.appointmentTime && (
              <p className="text-xs text-red-500 mt-2">
                {errors.appointmentTime.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-blue-900 to-blue-700 text-white py-4 rounded-2xl font-bold text-sm tracking-wide hover:shadow-[0_0_28px_rgba(0,53,85,0.35)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            {isSubmitting
              ? "CONFIRMING BOOKING..."
              : "Request Secure Appointment"}
          </button>
          <p className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            Your medical data is encrypted and private.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
