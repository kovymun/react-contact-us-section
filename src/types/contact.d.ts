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

export interface MediCentreDB {
  hours: MediCentreHours[];
  location: MediCentreLocation[];
}
