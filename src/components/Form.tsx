import { mediCentreDB } from "../data/medi-centre-db";
import { User, CalendarClock, Lock, ChevronDown } from "lucide-react";

const Form = () => {
  // Destructuring medi-clinic data
  const { practitioners } = mediCentreDB;
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

      <form noValidate className="space-y-5">
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First"
              className="input-primary"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 ml-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              className="input-primary"
            />
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
              name="phone"
              placeholder="+27 82 142 0809"
              className="input-primary"
            />
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
              name="email"
              placeholder="john@example.com"
              className="input-primary"
            />
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
              name="practitioner"
              className="pl-10 appearance-none cursor-pointer input-primary"
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
              name="appointmentTime"
              className="pl-10 cursor-pointer input-primary"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-900 to-blue-700 text-white py-4 rounded-2xl font-bold text-sm tracking-wide hover:shadow-[0_0_28px_rgba(0,53,85,0.35)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            Request Secure Appointment
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
