//storing all interface types

//Interface for the medi-centre DB
interface MediCentreHours {
  id: string;
  title: string;
  hour_content: string[];
}

interface MediCentreLocation {
  id: string;
  title: string;
  loc_content: MediCentreLocationDetails[];
}

interface MediCentreContact {
  id: string;
  title: string;
  contact_content: MediCentreContactDetails[];
}

export interface MediCentreDB {
  hours: MediCentreHours[];
  location: MediCentreLocation[];
  contact: MediCentreContact[];
}
