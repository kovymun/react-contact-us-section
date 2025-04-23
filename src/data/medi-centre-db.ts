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
};
