//storing all interface types

//Interface for the medi-centre DB
export interface MediCentreHours {
  id: string;
  title: string;
  hour_content: string[];
}

export interface MediCentreDB {
  hours: MediCentreHours[];
}
