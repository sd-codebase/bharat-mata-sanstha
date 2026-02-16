export interface BranchImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

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
  heroImage?: string;
  gallery?: BranchImage[];
  achievements?: Achievement[];
  activities?: string[];
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
    heroImage: "/images/branches/branch-1/trophies-display.jpeg",
    gallery: [
      {
        src: "/images/branches/branch-1/trophies-display.jpeg",
        alt: "Trophy collection at Matimand Nivasi Shala",
        caption: "9-time Solapur District General Championship trophies",
      },
      {
        src: "/images/branches/branch-1/s4ua-winners.jpeg",
        alt: "Students celebrating victory at S4UA Games",
        caption: "Students winning at Sports for Unique Athletes (S4UA) Games 2025-26",
      },
      {
        src: "/images/branches/branch-1/s4ua-team.jpeg",
        alt: "Team photo at S4UA Games",
        caption: "Matimand Nivasi Shala team at S4UA Games",
      },
      {
        src: "/images/branches/branch-1/special-olympics.jpeg",
        alt: "Special Olympics Maharashtra participation",
        caption: "Students at Special Olympics Maharashtra",
      },
      {
        src: "/images/branches/branch-1/students-activity.jpeg",
        alt: "Students participating in vocational activity",
        caption: "Students at a vocational training and exhibition event",
      },
      {
        src: "/images/branches/branch-1/outdoor-activity.jpeg",
        alt: "Outdoor activities at the school",
        caption: "Outdoor learning and play activities",
      },
      {
        src: "/images/branches/branch-1/awards-cabinet.jpeg",
        alt: "Awards and certificates display cabinet",
        caption: "Display cabinet showcasing years of achievements, medals, and certificates",
      },
      {
        src: "/images/branches/branch-1/commissioner-visit.jpeg",
        alt: "Commissioner's visit to the school",
        caption: "Visit by Commissioner Shri Nitin Patil to the school",
      },
      {
        src: "/images/branches/branch-1/flag-hoisting.jpeg",
        alt: "Flag hoisting ceremony at school campus",
        caption: "Independence Day flag hoisting ceremony",
      },
      {
        src: "/images/branches/branch-1/news-s4ua-2025.jpeg",
        alt: "Pudhari newspaper coverage of S4UA Games 2025",
        caption: "News coverage: S4UA Games sports success (Dec 2025)",
      },
      {
        src: "/images/branches/branch-1/news-state-sports.jpeg",
        alt: "Newspaper coverage of state level sports achievement",
        caption: "News coverage: State level sports achievement at Ramtek, Nagpur",
      },
      {
        src: "/images/branches/branch-1/news-special-olympics-bharat.jpeg",
        alt: "Newspaper coverage of Special Olympics Bharat success",
        caption: "News coverage: Special Olympics Bharat success at Nagpur",
      },
      {
        src: "/images/branches/branch-1/news-lokmat-championship.jpeg",
        alt: "Lokmat newspaper coverage of district championship",
        caption: "Lokmat News: 3rd consecutive year district championship",
      },
      {
        src: "/images/branches/branch-1/news-pudhari-championship.jpeg",
        alt: "Pudhari newspaper coverage of championship",
        caption: "Pudhari News: 4th consecutive year championship success",
      },
      {
        src: "/images/branches/branch-1/news-sports-district.jpeg",
        alt: "Newspaper coverage of district sports competition",
        caption: "News coverage: District level sports competition achievements",
      },
      {
        src: "/images/branches/branch-1/news-amravati-sports.jpeg",
        alt: "Newspaper coverage of state sports at Amravati",
        caption: "News coverage: State level sports success at Amravati",
      },
      {
        src: "/images/branches/branch-1/news-nagpur-olympics.jpeg",
        alt: "Newspaper coverage of Special Olympics at Nagpur",
        caption: "News coverage: Special Olympics Bharat success at Nagpur (Feb 2024)",
      },
    ],
    achievements: [
      {
        title: "9-Time Solapur District General Championship Winner",
        description:
          "The school has won the Solapur district general championship for special athletes an extraordinary 9 times, consistently dominating district-level sports competitions for differently-abled students.",
      },
      {
        title: "S4UA Games 2025-26 Championship",
        description:
          "Won the championship at the Sports for Unique Athletes (S4UA) Games 2025-26, with students excelling in multiple individual and team events supported by TTEC India Foundation.",
      },
      {
        title: "Special Olympics Bharat — State Level Success",
        description:
          "Students qualified for international Special Olympics after excelling at state-level competitions in Nagpur. Athletes won gold, silver, and bronze medals in 50m running, spot jump, long jump, shot put, and swimming events.",
      },
      {
        title: "20 Medals at District Sports Competition (75 Points)",
        description:
          "Won a total of 20 medals — 10 Gold, 5 Silver, and 5 Bronze — scoring 75 points to secure the overall district championship for the 3rd consecutive year.",
      },
      {
        title: "State Level Success at Amravati",
        description:
          "Students from the school participated in the state-level sports competition for differently-abled children at Amravati, winning multiple gold and silver medals and qualifying for national events.",
      },
      {
        title: "Recognition by District Administration",
        description:
          "Honored by District CEO Dr. Rajendra Bharud and Social Welfare officials for outstanding achievements in sports and inclusive education.",
      },
    ],
    activities: [
      "Early intervention for detected special children",
      "Vocational training and skill development",
      "Participation in Special Olympics Bharat",
      "District and state level sports competitions",
      "Cultural programs and exhibitions",
      "Community awareness campaigns for disability inclusion",
      "Independence Day and Republic Day celebrations",
      "Agricultural and gardening activities",
    ],
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
      "Established in 1993, this special co-educational school (Grades 1-8) serves hearing-impaired students. Managed by the Private Aided sector, it offers Marathi-medium instruction with specialized educational aids, speech training, therapy, audiometry, and skill development programs. The school is located in an urban area and provides a library and playground for students. The Bharatmata Bahuuddeshiya Sanstha also engages in broader community service, such as conducting First Aid & CPR training workshops for professionals.",
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
      "Residential capacity",
    ],
    heroImage: "/images/branches/branch-2/news-chicago-gift.jpeg",
    gallery: [
      {
        src: "/images/branches/branch-2/news-chicago-gift.jpeg",
        alt: "Newspaper coverage of swing gift from Chicago",
        caption:
          "Pudhari News: Mukbadhir school receives swing (jhula) donated from Chicago, USA by Aditya Vaidya",
      },
      {
        src: "/images/branches/branch-2/news-chicago-gift-detail.jpeg",
        alt: "Detailed newspaper coverage of Chicago donation",
        caption:
          "Detailed coverage: Indian-American scientist from Chicago donates recreational equipment for hearing-impaired students",
      },
    ],
    achievements: [
      {
        title: "International Support from Chicago, USA",
        description:
          "Aditya Vaidya, a senior scientist at a chemical biology innovation company in Chicago, recognized the needs of hearing-impaired students and donated a swing (jhula) for their recreation and entertainment. He connected with students online and arranged the donation through his compassion for community service.",
      },
      {
        title: "First Aid & CPR Training Workshops",
        description:
          "The school, as part of Bharatmata Bahuuddeshiya Sanstha, conducts First Aid & CPR training workshops for professionals, contributing to broader community welfare.",
      },
    ],
    activities: [
      "Speech training and therapy sessions",
      "Audiometry testing and hearing aid support",
      "Sign language education",
      "Skill development and vocational training",
      "Recreational activities for student well-being",
      "Community service events",
      "First Aid & CPR training workshops",
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
      "Barbed wire fencing boundary",
      "Hand pump drinking water",
      "Functional boys and girls toilets",
    ],
    heroImage: "/images/branches/branch-3/students-assembly.jpeg",
    gallery: [
      {
        src: "/images/branches/branch-3/students-assembly.jpeg",
        alt: "Students at an outdoor assembly",
        caption: "Students and teachers at an outdoor school assembly",
      },
    ],
    activities: [
      "Regular academic curriculum (Grades 5-10)",
      "Mid-day meal program for students",
      "Computer education with 6 functional computers",
      "Library access with 4,401 books",
      "Sports and outdoor activities",
      "Annual academic examinations",
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
      "This School Of Scholars has been providing exceptional education to more than 750+ students in Barshi, Solapur, Maharashtra. The network of 2 Units near Barshi is committed to offering a safe and conducive learning environment that enables students to realize their full potential. Part of the Meghe Group established in 2015, it has been instrumental in shaping young learners' minds and empowering them to build a bright future. The comprehensive academic curriculum is complemented by various co-curricular and extracurricular activities that support the holistic development of students. SOS has emerged as one of the best CBSE schools in Maharashtra.",
    established: "2015",
    medium: "English",
    facilities: [
      "2 Units near Barshi",
      "CBSE curriculum",
      "Co-curricular activities",
      "Extracurricular programs",
      "Safe learning environment",
      "Modern teaching infrastructure",
    ],
    heroImage: "/images/branches/branch-4/school-building.jpeg",
    gallery: [
      {
        src: "/images/branches/branch-4/school-building.jpeg",
        alt: "Swami Samarth English Medium School building at night",
        caption: "School building illuminated during a celebration event",
      },
    ],
    achievements: [
      {
        title: "One of the Best CBSE Schools in Maharashtra",
        description:
          "SOS (School Of Scholars), part of the Meghe Group, has emerged as one of the best CBSE schools in Maharashtra by shaping young minds into confident, compassionate, and capable individuals.",
      },
      {
        title: "750+ Student Community",
        description:
          "The largest center in the organization with over 750 students, operating across 2 units near Barshi, providing a comprehensive and holistic educational experience.",
      },
    ],
    activities: [
      "CBSE curriculum education (Nursery to 10th)",
      "Co-curricular activities",
      "Extracurricular programs",
      "Sports and physical education",
      "Cultural events and celebrations",
      "Holistic student development programs",
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
    activities: [
      "Residential support for backward class students",
      "Study room and academic support",
      "Nutritious meal programs",
      "Character development and life skills training",
      "Community bonding activities",
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
    activities: [
      "Residential support for backward class students",
      "Study room and academic support",
      "Nutritious meal programs",
      "Character development and life skills training",
      "Community bonding activities",
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
      "Barbed wire fencing boundary",
      "Functional boys and girls toilets",
    ],
    activities: [
      "English medium education (Pre-primary to Grade 2)",
      "Computer-aided learning with 9 computers",
      "Outdoor sports and playground activities",
      "Pre-primary education and early childhood development",
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
      "A Child Care Institution (CCI) officially known as Balakashram (बालकाश्रम), functioning under the Juvenile Justice (Care and Protection of Children) Act, 2015, Women and Child Development Department, and CARA (Central Adoption Resource Authority) guidelines. The institution cares for orphan, abandoned, and street children, children of single parents, and those rescued from child labor, abuse, or trafficking. It serves children generally from 0 to 18 years of age.",
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
    heroImage: "/images/branches/branch-8/news-events.jpeg",
    gallery: [
      {
        src: "/images/branches/branch-8/news-events.jpeg",
        alt: "Balkashram events and community support",
        caption:
          "Lions Club Barshi and community organizations supporting Balkashram children",
      },
    ],
    achievements: [
      {
        title: "Community Support and Partnerships",
        description:
          "The Balkashram receives active support from community organizations like Lions Club Barshi, Veershaiv Mahila Mandal, and other social groups who organize events and donate supplies for the children.",
      },
    ],
    activities: [
      "Round-the-clock residential care for children (0-18 years)",
      "Formal education and schooling support",
      "Nutritious meal programs",
      "Medical care and health check-ups",
      "Psychological counseling and emotional support",
      "Vocational training for older children",
      "Sports, recreation, and cultural activities",
      "Family restoration and rehabilitation programs",
      "Community partnership events (Lions Club, etc.)",
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
    heroImage: "/images/branches/branch-9/staff-photo.jpeg",
    gallery: [
      {
        src: "/images/branches/branch-9/staff-photo.jpeg",
        alt: "Nursing school staff and students",
        caption: "Nursing school staff and students on a special occasion",
      },
    ],
    activities: [
      "ANM diploma course (2 years)",
      "Classroom study and theory sessions",
      "Clinical training and hospital internship",
      "Maternal and child health care training",
      "Community health outreach programs",
      "First-aid and immunization training",
      "Health education and awareness campaigns",
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
    activities: [
      "State Board education (Grades 1-12)",
      "Multilingual instruction (English, Marathi, Hindi)",
      "Computer education with 9 computers",
      "Sports and playground activities",
      "Cultural and academic events",
    ],
  },
];
