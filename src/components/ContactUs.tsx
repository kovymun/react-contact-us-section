function ContactUs() {
  return (
    <div className="max-w-content flex flex-col justify-center items-center">
      {/* Contact Us Section Intro */}
      <div
        id="contact-intro"
        className="max-w-content mb-8 text-center bg-[#81E7AF] p-6 text-[#2e2e2e] outline-2"
      >
        <h1 className="text-3xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          error?
        </p>
      </div>

      {/* Opening Hours */}
      <div
        id="hours"
        className="mb-8 text-center bg-[#81E7AF] p-6 text-[#2e2e2e] outline-2"
      >
        <h2 className="text-3xl font-extrabold">Our Hours</h2>
        <p className="mt-2 text-lg">
          <strong>Mon - Thu:</strong> 7:30 AM – 5:00 PM
        </p>
        <p className="mt-2 text-lg">
          <strong>Friday:</strong> 7:30 AM – 1:00 PM
        </p>
        <p className="mt-2 text-lg">
          <strong>Saturday:</strong> 8:00 AM – 12:00 PM
        </p>
        <button
          onClick={() => alert("Request Appointment")}
          className="mt-3 bg-[#2c786c] text-white px-4 py-2 rounded-lg font-semibold cursor-pointer"
        >
          Request an Appointment
        </button>
      </div>

      {/* Location */}
      <div
        id="location"
        className="mb-8 text-center bg-[#81E7AF] p-6 text-[#2e2e2e] outline-2"
      >
        <h2 className="text-3xl font-extrabold">Location</h2>
        <p className="mt-2 text-lg">Riverside Medical Centre</p>
        <p className="mt-2 text-lg">102 Willowbend Road</p>
        <p className="mt-2 text-lg">Westwood, Cape Town 7700</p>
      </div>

      {/* Contact Details */}

      <div
        id="contact"
        className="mb-8 text-center bg-[#81E7AF] p-6 text-[#2e2e2e] outline-2"
      >
        <h2 className="text-3xl font-extrabold">Contact</h2>
        <p className="mt-2 text-lg">
          <strong>Phone: </strong>(021) 123 4568
        </p>
        <p className="mt-2 text-lg">
          <strong>WhatsApp (Emergencies only): </strong>
          +27 82 123 4568
        </p>
        <p className="mt-2 text-lg">
          <strong>Email:</strong> info@riversidemed.co.za
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
