export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
}

export const team: TeamMember[] = [
  { name: 'Emilio Hurtado', role: 'Co-Founder & CEO', bio: 'Combines a background in AI & Neuroscience with hands-on feedlot experience to lead the vision for automated cattle care.', photo: '/team/emilio-3.jpeg' },
  { name: 'Chandra Suryadevara', role: 'Co-Founder & CTO', bio: 'Specializing in advanced computer science, software-hardware integration and innovative robotics solutions.', photo: '/team/chandra.jpg' },
  { name: 'Naveen Vadlamudi', role: 'Co-Founder & COO', bio: 'Experienced leader uniting technical vision with organizational management to optimize company performance.', photo: '/team/naveen.jpg' },
  { name: 'Brendon Penner', role: 'CFO', bio: 'Financial leader with Neuroengineering Hub management experience, delivering strategic guidance and operational excellence.', photo: '/team/brendon.png' },
  { name: 'Federico Barrera', role: 'Software Development Intern', bio: 'Incoming Computer Science student at Purdue University, contributing across front-end, back-end, and robotics software.', photo: '/team/fred.png' },
  { name: 'Stephen Haley', role: 'Software Developer', bio: 'Born and raised in Lethbridge, Alberta; currently a Computer Science student at the University of Lethbridge.', photo: '/team/stephen.png' },
]