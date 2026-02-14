export interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Tree Planting Drive",
    date: "2025-07-15",
    category: "Environment",
    description:
      "Join us for our annual tree planting initiative where students, staff, and community members come together to plant over 500 saplings across our campus and surrounding areas. This event promotes environmental awareness and our commitment to a greener future.",
  },
  {
    id: 2,
    title: "Inter-School Sports Competition",
    date: "2025-09-20",
    category: "Sports",
    description:
      "Our annual inter-school sports competition brings together students from all 10 centers to compete in athletics, cricket, kabaddi, kho-kho, and other traditional sports. A celebration of sportsmanship and physical fitness.",
  },
  {
    id: 3,
    title: "Free Health Check-up Camp",
    date: "2025-10-05",
    category: "Health",
    description:
      "A comprehensive free health camp organized in collaboration with local hospitals, providing general health check-ups, dental screenings, eye tests, and nutritional counseling for all students and community members.",
  },
  {
    id: 4,
    title: "Annual Day Celebration",
    date: "2025-12-20",
    category: "Cultural",
    description:
      "Our grand annual day celebration featuring cultural performances, prize distribution ceremonies, student exhibitions, and addresses by distinguished guests. A showcase of our students' talents and achievements throughout the year.",
  },
  {
    id: 5,
    title: "Education & Career Workshop",
    date: "2026-01-15",
    category: "Education",
    description:
      "A workshop designed to guide students on higher education opportunities, career paths, and skill development. Featuring sessions by education experts, alumni success stories, and hands-on activities for students from 8th to 10th standard.",
  },
];
