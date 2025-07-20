export interface Certificate {
  name: string;
  issuer: string;
  year?: string;
  level?: string;
  description?: string;
  link?: string;
  category: 'technical' | 'academic' | 'leadership' | 'achievement';
}

export const certificates: Certificate[] = [
  {
    name: "C Programming",
    issuer: "NPTEL",
    year: "2023",
    level: "Silver",
    description: "Advanced C programming concepts, data structures, and algorithm implementation",
    category: "technical"
  },
  {
    name: "Data Analytics Using Python",
    issuer: "NPTEL",
    year: "2023",
    level: "Silver",
    description: "Comprehensive data analysis, visualization, and machine learning with Python",
    category: "technical"
  },
  {
    name: "Python Basics",
    issuer: "HackerRank",
    year: "2023",
    description: "Fundamental Python programming skills and problem-solving techniques",
    category: "technical"
  },
  {
    name: "Android Development",
    issuer: "AICTE",
    year: "2024",
    description: "Mobile app development using Android Studio and Java/Kotlin",
    category: "technical"
  },
  {
    name: "Google AI/ML Program",
    issuer: "AICTE",
    year: "2024",
    description: "Machine learning fundamentals, TensorFlow, and AI model development",
    category: "technical"
  },
  {
    name: "Ethical Hacking",
    issuer: "AICTE",
    year: "2024",
    description: "Cybersecurity principles, penetration testing, and security assessment",
    category: "technical"
  },
  {
    name: "NCC 'B' Certificate",
    issuer: "National Cadet Corps",
    year: "2022",
    level: "A Grade",
    description: "Leadership, discipline, and national service through military training",
    category: "leadership"
  },
  {
    name: "NSS Volunteer Certificate",
    issuer: "National Service Scheme",
    year: "2023",
    description: "Community service and social development activities",
    category: "leadership"
  },
  {
    name: "IEEE Vice Chair",
    issuer: "IEEE Student Branch",
    year: "2024",
    description: "Leadership role in organizing technical events and coding competitions",
    category: "leadership"
  },
  {
    name: "HackerRank 5★ Python",
    issuer: "HackerRank",
    year: "2023",
    level: "5 Stars",
    description: "Advanced Python programming proficiency and problem-solving skills",
    category: "achievement"
  },
  {
    name: "HackerRank 3★ C",
    issuer: "HackerRank",
    year: "2023",
    level: "3 Stars",
    description: "Proficient C programming and algorithmic problem solving",
    category: "achievement"
  },
  {
    name: "Game Dev Hackathon",
    issuer: "ReneVerse (Unstop)",
    year: "2024",
    level: "4th Place",
    description: "Innovative game development project in competitive hackathon environment",
    category: "achievement"
  }
];