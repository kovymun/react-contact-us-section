import { MediCentreDB } from "../types/contact";

// The main database object that stores information about the medical centre
export const mediCentreDB: MediCentreDB = {
  hours: [
    {
      id: "hours",
      title: "Our Hours",
      hour_content: [
        { id: "mon-thu", text: "Mon - Thu: 7h30 - 17h00" },
        { id: "fri", text: "Friday: 7h30 - 13h00" },
        { id: "sat", text: "Saturday: 8h00 - 12h00" },
      ],
    },
  ],
  location: [
    {
      id: "location",
      title: "Location",
      loc_content: [
        {
          id: "riverside-location",
          centre_name: "Riverside Medical Centre",
          centre_address: "102 Willowbend Road",
          centre_city: "Westwood, Cape Town 7700",
        },
      ],
    },
  ],
  contact: [
    {
      id: "contact",
      title: "Contact",
      contact_content: [
        {
          id: "main-contact",
          phone: "(021) 123 4568",
          whatsapp: "+27 82 123 4568",
          email: "info@riversidemed.co.za",
        },
      ],
    },
  ],
  practitioners: [
    {
      practice_id: "GP-AK-001",
      doctor: "Dr. Ayesha Khan",
      medicalField: "General Practitioner",
    },
    {
      practice_id: "PED-SD-002",
      doctor: "Dr. Sipho Dlamini",
      medicalField: "Pediatrician",
    },
    {
      practice_id: "DEN-TM-003",
      doctor: "Dr. Thandi Mokoena",
      medicalField: "Dentist",
    },
    {
      practice_id: "PHY-PVDM-004",
      doctor: "Dr. Pieter van der Merwe",
      medicalField: "Physiotherapist",
    },
    {
      practice_id: "BIO-CN-005",
      doctor: "Dr. Candice Naidoo",
      medicalField: "Biokineticist",
    },
  ],
};
