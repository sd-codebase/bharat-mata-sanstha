export interface AwardImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Award {
  id: number;
  name: string;
  nameMarathi?: string;
  year: number;
  description: string;
  details: string;
  images: AwardImage[];
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
      "The organization was honored in an award distribution ceremony held in Nashik on 2 March 2019 by the Department of Social Justice & Special Assistance, Government of Maharashtra. This is a prestigious award instituted by the Government of Maharashtra, given to organizations that have done outstanding work in social service, education, welfare, empowerment, health, rehabilitation, or community development for vulnerable and backward sections of society. This award is often conferred during special state ceremonies with the presence of ministers and senior officials, and is one of the key awards in Maharashtra for social impact work.",
    images: [
      {
        src: "/images/branches/awards/shahu-phule-ambedkar-certificate.jpeg",
        alt: "Shahu-Phule-Ambedkar Award certificate",
        caption: "Official award certificate from the Government of Maharashtra",
      },
      {
        src: "/images/branches/awards/shahu-phule-ambedkar-trophy.jpeg",
        alt: "Shahu-Phule-Ambedkar Award trophy",
        caption: "Award trophy with plaque from the ceremony at Nashik",
      },
      {
        src: "/images/branches/awards/samaj-kalyan-certificate.jpeg",
        alt: "Samaj Kalyan Vibhag appreciation certificate",
        caption:
          "Appreciation certificate from Samaj Kalyan Vibhag, Zilla Parishad Solapur",
      },
    ],
  },
  {
    id: 2,
    name: "Dalit Mitra Gaurav Puraskar",
    year: 2020,
    description:
      "Awarded to the organization's Secretary, Shri. Sharad Ukirade, for outstanding contributions to the upliftment and welfare of underprivileged communities.",
    details:
      "Our organization Secretary was honored with The Dalit Mitra Gaurav Puraskar (Dalit Mitra Award) 2020, given to individuals who have made outstanding contributions to the upliftment, social awareness, and welfare of the underprivileged and backward classes. The Maharashtra government has been awarding this since 1988. Formerly known as the Dr. Babasaheb Ambedkar Dalit Mitra Award, it is also presented on the birth anniversary of Sahitya Ratna Lokshahir Annabhau Sathe.",
    images: [
      {
        src: "/images/branches/awards/dalit-mitra-trophy.jpeg",
        alt: "Dalit Mitra Gaurav Puraskar 2020 trophy",
        caption:
          "Dalit Mitra Gaurav Puraskar 2020 awarded to Secretary Shri. Sharad Ukirade",
      },
      {
        src: "/images/branches/general/event-dignitaries.jpeg",
        alt: "Award ceremony with dignitaries",
        caption:
          "Secretary Shri. Sharad Ukirade with dignitaries and officials at the award ceremony",
      },
    ],
  },
];
