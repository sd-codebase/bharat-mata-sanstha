export interface Branch {
  id: number;
  name: string;
  type: string;
  location: string;
  students: number;
  description: string;
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Matimand Residential School",
    type: "Special School",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 50,
    description:
      "A dedicated residential school providing specialized education and care for intellectually challenged children, fostering their growth and independence.",
  },
  {
    id: 2,
    name: "Mukobadhir Residential School",
    type: "Special School",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 50,
    description:
      "A residential school for hearing-impaired children, offering tailored educational programs with sign language support and vocational training.",
  },
  {
    id: 3,
    name: "Secondary School",
    type: "Secondary School",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 150,
    description:
      "A well-established secondary school offering quality education from 5th to 10th standard, nurturing rural students with a strong academic foundation.",
  },
  {
    id: 4,
    name: "Swami Samarth English Medium School",
    type: "English Medium",
    location: "Barshi, Dist. Solapur",
    students: 750,
    description:
      "Our flagship English medium school in Barshi town, providing modern education with excellent facilities from nursery to 10th standard. The largest center with 750+ students.",
  },
  {
    id: 5,
    name: "Swami Samarth Backward Class Boys Hostel",
    type: "Hostel",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 80,
    description:
      "A government-aided hostel for boys from backward classes, providing boarding and lodging facilities to support their education and overall development.",
  },
  {
    id: 6,
    name: "Swami Samarth Backward Class Boys Hostel",
    type: "Hostel",
    location: "Barshi, Dist. Solapur",
    students: 54,
    description:
      "A hostel facility in Barshi town supporting boys from backward classes with accommodation, meals, and a conducive environment for academic success.",
  },
  {
    id: 7,
    name: "Swami Samarth English Medium School",
    type: "English Medium",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 85,
    description:
      "An English medium school in the Agalgaon area, bringing quality English-language education closer to rural communities.",
  },
  {
    id: 8,
    name: "Swami Samarth Balkashram Child Care Center",
    type: "Child Care",
    location: "Barshi, Dist. Solapur",
    students: 200,
    description:
      "A child care and welfare center providing shelter, nutrition, education, and emotional support to orphaned and underprivileged children.",
  },
  {
    id: 9,
    name: "Swami Samarth Nursing School",
    type: "Nursing School",
    location: "Barshi, Dist. Solapur",
    students: 50,
    description:
      "A professional nursing school offering ANM and GNM courses, training the next generation of healthcare professionals to serve rural communities.",
  },
  {
    id: 10,
    name: "Swami Samarth Semi-English School",
    type: "Semi-English",
    location: "Barshi, Dist. Solapur",
    students: 356,
    description:
      "A semi-English medium school offering a bilingual approach, helping students transition smoothly while maintaining strong academic standards.",
  },
];
