export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  designationMarathi: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shri. Vitthal Ukirade",
    designation: "President",
    designationMarathi: "Adhyaksha",
    image: "/images/team/president.jpeg",
  },
  {
    id: 2,
    name: "Shri. Sharad Ukirade",
    designation: "Secretary",
    designationMarathi: "Sachiv",
    image: "/images/team/secretary.jpeg",
  },
  {
    id: 3,
    name: "Shri. Samarth Ukirade",
    designation: "Member",
    designationMarathi: "Sadasya",
    image: "/images/team/member-1.jpeg",
  },
  {
    id: 4,
    name: "Shri. Siddhant Ukirade",
    designation: "Member",
    designationMarathi: "Sadasya",
    image: "/images/team/member-2.jpeg",
  },
  {
    id: 5,
    name: "Shri. Ajinkya Ukirade",
    designation: "Member",
    designationMarathi: "Sadasya",
    image: "/images/team/member-3.jpeg",
  },
];
