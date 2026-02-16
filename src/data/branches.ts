export interface Branch {
  id: number;
  name: string;
  type: string;
  location: string;
  students: number;
  description: string;
  detailedDescription?: string;
  established?: string;
  medium?: string;
  grades?: string;
  facilities?: string[];
  contact?: { phone?: string; email?: string };
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Matimand Nivasi Shala Agalgaon",
    type: "Special School",
    location: "Agalgaon, Belgaon Road, Tal. Barshi, Dist. Solapur",
    students: 50,
    description:
      "A dedicated residential school providing specialized education and care for intellectually challenged children, fostering their growth and independence.",
    detailedDescription:
      "Matimand Nivasi Shala Agalgaon is a prominent institution established in 1993 by the Bharatmata Bahuuddeshiya Sanstha, Barshi for the education, rehabilitation, and training of intellectually disabled children. The school provides Marathi-medium education, focusing on empowering special needs children through vocational training and specialized support in an inclusive environment. The school is a 9-time Solapur district general championship winner and also works on early intervention for detected special children.",
    established: "1993",
    medium: "Marathi",
    facilities: [
      "9 Classrooms",
      "Library",
      "Playground",
      "Residential boarding for 50 children",
      "Vocational training",
      "Early intervention programs",
    ],
    contact: {
      phone: "Office: 9921213103 | Hostel: 9421361855",
      email: "manishaagalgaon@gmail.com",
    },
  },
  {
    id: 2,
    name: "Mukbadhir Nivasi Shala Agalgaon",
    type: "Special School",
    location: "Agalgaon, Belgaon Road, Tal. Barshi, Dist. Solapur",
    students: 50,
    description:
      "A residential school for hearing-impaired children, offering tailored educational programs with sign language support and vocational training.",
    detailedDescription:
      "Established in 1993, this special co-educational school (Grades 1-8) serves hearing-impaired students. Managed by the Private Aided sector, it offers Marathi-medium instruction with specialized educational aids, speech training, therapy, audiometry, and skill development programs. The school is located in an urban area and provides a library and playground for students.",
    established: "1993",
    medium: "Marathi",
    grades: "1 to 8",
    facilities: [
      "8 Classrooms",
      "Library",
      "Playground",
      "Speech training & therapy",
      "Audiometry services",
      "Skill development programs",
    ],
  },
  {
    id: 3,
    name: "Madhyamik Vidyalay",
    type: "Secondary School",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 150,
    description:
      "A well-established secondary school offering quality education from 5th to 10th standard, nurturing rural students with a strong academic foundation.",
    detailedDescription:
      "A Pvt. Aided co-educational secondary school located in a rural area of Barshi block, Solapur district. The school offers Grades 5 to 10 with Marathi as the medium of instruction. Academic session starts in April. The school has a rented building with 5 classrooms in good condition, 2 non-teaching rooms, a separate Head Master room, barbed wire fencing, electric connection, hand pump drinking water, functional toilets, a playground, a library with 4,401 books, and 6 functional computers. Mid-day meals are provided on school premises.",
    medium: "Marathi",
    grades: "5 to 10",
    facilities: [
      "5 Classrooms",
      "Library with 4,401 books",
      "Playground",
      "6 Computers",
      "Mid-day meal program",
      "Separate Head Master room",
    ],
  },
  {
    id: 4,
    name: "Swami Samarth English Medium School",
    type: "English Medium",
    location: "Barshi, Dist. Solapur",
    students: 750,
    description:
      "Our flagship English medium school in Barshi town, providing modern education with excellent facilities from nursery to 10th standard. The largest center with 750+ students.",
    detailedDescription:
      "This School Of Scholars has been providing exceptional education to more than 750+ students in Barshi, Solapur, Maharashtra. The network of 2 Units near Barshi is committed to offering a safe and conducive learning environment that enables students to realize their full potential. Part of the Meghe Group established in 2015, it has been instrumental in shaping young learners' minds and empowering them to build a bright future. The comprehensive academic curriculum is complemented by various co-curricular and extracurricular activities that support the holistic development of students.",
    established: "2015",
    medium: "English",
    facilities: [
      "2 Units near Barshi",
      "CBSE curriculum",
      "Co-curricular activities",
      "Extracurricular programs",
      "Safe learning environment",
    ],
  },
  {
    id: 5,
    name: "Swami Samarth Magasvargiya Vidyarthi Vastigrah Agalgaon",
    type: "Hostel",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 80,
    description:
      "A government-aided hostel for boys from backward classes, providing boarding and lodging facilities to support their education and overall development.",
    detailedDescription:
      "The Backward Class Student Hostel Scheme is implemented by the Government of Maharashtra through the Social Justice & Special Assistance Department. It provides safe and affordable residential facilities to students from backward and socially disadvantaged communities so they can continue their education without financial hardship. Eligible categories include Scheduled Caste (SC), VJNT (Vimukta Jati & Nomadic Tribes), SBC (Special Backward Class), OBC (Other Backward Classes), and other eligible backward categories as per government rules.",
    facilities: [
      "Free or subsidized accommodation",
      "Meals as per hostel rules",
      "Study room facilities",
      "Basic amenities (water, sanitation, electricity)",
      "Stipend/maintenance allowance (in some cases)",
    ],
  },
  {
    id: 6,
    name: "Swami Samarth Magasvargiya Vidyarthi Vastigrah Barshi",
    type: "Hostel",
    location: "Barshi, Dist. Solapur",
    students: 54,
    description:
      "A hostel facility in Barshi town supporting boys from backward classes with accommodation, meals, and a conducive environment for academic success.",
    detailedDescription:
      "The Backward Class Student Hostel Scheme is implemented by the Government of Maharashtra through the Social Justice & Special Assistance Department. It provides safe and affordable residential facilities to students from backward and socially disadvantaged communities so they can continue their education without financial hardship. Eligible categories include Scheduled Caste (SC), VJNT (Vimukta Jati & Nomadic Tribes), SBC (Special Backward Class), OBC (Other Backward Classes), and other eligible backward categories as per government rules.",
    facilities: [
      "Free or subsidized accommodation",
      "Meals as per hostel rules",
      "Study room facilities",
      "Basic amenities (water, sanitation, electricity)",
      "Stipend/maintenance allowance (in some cases)",
    ],
  },
  {
    id: 7,
    name: "Swami Samarth English Medium School",
    type: "English Medium",
    location: "Agalgaon, Tal. Barshi, Dist. Solapur",
    students: 85,
    description:
      "An English medium school in the Agalgaon area, bringing quality English-language education closer to rural communities.",
    detailedDescription:
      "Established in 2014, this Pvt. Unaided co-educational school is located in a rural area of Barshi block, Solapur district. The school offers Grades 1 to 2 with an attached pre-primary section, with English as the medium of instruction. It has a rented building with 8 classrooms in good condition, 2 non-teaching rooms, a separate Head Master room, barbed wire fencing, electric connection, functional toilets, a playground, and 9 functional computers. Academic session starts in April.",
    established: "2014",
    medium: "English",
    grades: "Pre-primary to 2",
    facilities: [
      "8 Classrooms",
      "Playground",
      "9 Computers",
      "Pre-primary section",
      "Separate Head Master room",
    ],
  },
  {
    id: 8,
    name: "Swami Samarth Balkashram Balsangopan Kendra",
    type: "Child Care",
    location: "Barshi, Dist. Solapur",
    students: 200,
    description:
      "A child care and welfare center providing shelter, nutrition, education, and emotional support to orphaned and underprivileged children.",
    detailedDescription:
      "A Child Care Institution (CCI) officially known as Balakashram, functioning under the Juvenile Justice (Care and Protection of Children) Act, 2015, Women and Child Development Department, and CARA guidelines. The institution cares for orphan, abandoned, and street children, children of single parents, and those rescued from child labor, abuse, or trafficking. It serves children generally from 0 to 18 years of age.",
    facilities: [
      "Safe shelter and accommodation",
      "Nutritious food",
      "Formal education (schooling)",
      "Medical care",
      "Psychological counseling",
      "Vocational training",
      "Sports and recreational activities",
      "Rehabilitation and family restoration",
    ],
  },
  {
    id: 9,
    name: "Swami Samarth Nursing School",
    type: "Nursing School",
    location: "Barshi, Dist. Solapur",
    students: 50,
    description:
      "A professional nursing school offering ANM courses, training the next generation of healthcare professionals to serve rural communities.",
    detailedDescription:
      "The ANM (Auxiliary Nurse Midwife) program is a diploma-level nursing course focused on basic healthcare services, community health, maternal and child care. It prepares students to work as frontline healthcare providers in rural and urban health settings. The course duration is usually 2 years including classroom study and clinical training/internship. Graduates provide basic nursing care, support maternal and child health services, work in Primary Health Centres (PHCs) and community health units, and assist in health education, immunization, and first-aid care. 10+2 passed from a recognised board is required; Science stream with Biology is preferred, but Arts/any stream is also accepted.",
    medium: "English/Marathi",
    grades: "ANM Diploma (2 years)",
    facilities: [
      "Classroom study",
      "Clinical training/internship",
      "Maternal and child care training",
      "Community health education",
      "First-aid and immunization training",
    ],
  },
  {
    id: 10,
    name: "Swami Samarth Semi-English School",
    type: "Semi-English",
    location: "Irle/Agalgaon, Barshi, Dist. Solapur",
    students: 356,
    description:
      "A semi-English medium school offering a bilingual approach, helping students transition smoothly while maintaining strong academic standards.",
    detailedDescription:
      "Swami Samarth Semi English School in Barshi (Irle/Agalgaon area), Solapur, is a co-educational State Board school (Grades 1-12) offering education in English, Marathi, and Hindi. The school is noted for having good teachers and a positive environment.",
    medium: "English, Marathi, Hindi",
    grades: "1 to 12",
    facilities: [
      "8 Classrooms",
      "Playground",
      "9 Computers",
      "State Board curriculum",
      "Multilingual instruction",
    ],
    contact: { phone: "+919356001343" },
  },
];
