import { MediCentreDB } from "../types/contact";

export const mediCentreDB: MediCentreDB = {
  hours: [
    {
      id: "hours",
      title: "Our Hours",
      hour_content: [
        "Mon - Thu: 7h30 - 17h00",
        "Friday: 7h30 - 13h00",
        "Saturday: 8h00 - 12h00",
      ],
    },
  ],
  location: [
    {
      id: "location",
      title: "Location",
      loc_content: [
        {
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
