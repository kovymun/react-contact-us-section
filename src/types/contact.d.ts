// Storing all interface types for the MediCentre database

// Interface representing the hours of operation for the medical centre
interface MediCentreHours {
  id: string;
  title: string;
  hour_content: {
    id: string;
    text: string;
  }[];
}

// Interface representing the location information of the medical centre
interface MediCentreLocation {
  id: string;
  title: string;
  loc_content: MediCentreLocationDetails[];
}

// Interface representing the contact information of the medical centre
interface MediCentreContact {
  id: string;
  title: string;
  contact_content: MediCentreContactDetails[];
}

// Interface representing a list of practitioners at the medical centre
interface MediCentrePractitioners {
  practice_id: string;
  doctor: string;
  medicalField: string;
}

// Interface for the entire MediCentre database
export interface MediCentreDB {
  hours: MediCentreHours[];
  location: MediCentreLocation[];
  contact: MediCentreContact[];
  practitioners: MediCentrePractitioners[];
}
