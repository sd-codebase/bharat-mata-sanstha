export interface Award {
  id: number;
  name: string;
  nameMarathi?: string;
  year: number;
  description: string;
  details: string;
}

export const awards: Award[] = [
  {
    id: 1,
    name: "Shahu-Phule-Ambedkar Award",
    nameMarathi: "शाहू-फुले-आंबेडकर पुरस्कार",
    year: 2019,
    description:
      "Awarded by the Department of Social Justice & Special Assistance, Government of Maharashtra.",
    details:
      "The organization was honored at an award distribution ceremony held in Nashik on 2 March 2019. This is a prestigious award instituted by the Government of Maharashtra, given to organizations that have done outstanding work in social service, education, welfare, empowerment, health, rehabilitation, or community development for vulnerable and backward sections of society.",
  },
  {
    id: 2,
    name: "Dalit Mitra Gaurav Puraskar",
    year: 2020,
    description:
      "Awarded to the organization's Secretary for outstanding contributions to the upliftment and welfare of underprivileged communities.",
    details:
      "The Dalit Mitra Gaurav Puraskar is given to individuals who have made outstanding contributions to the upliftment, social awareness, and welfare of the underprivileged and backward classes. The Maharashtra government has been awarding this since 1988. Formerly known as the Dr. Babasaheb Ambedkar Dalit Mitra Award, it is presented on the birth anniversary of Sahitya Ratna Lokshahir Annabhau Sathe.",
  },
];
