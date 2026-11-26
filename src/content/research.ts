/**
 * All research content for the site lives here, drawn from the group's paper
 * "Assessing the Efficacy of Digital Learning Aids for Freshmen Computer
 * Engineering Students at Batangas State University – Alangilan Campus".
 * Edit this file to update copy, data, references, or the team roster.
 */

export const siteTitle =
  'Assessing the Efficacy of Digital Learning Aids for Freshmen Computer Engineering Students at Batangas State University – Alangilan Campus'

export const navItems = [
  { to: '/', label: 'Home', short: 'Home' },
  { to: '/introduction', label: 'Introduction & Background', short: 'Intro' },
  { to: '/discussion', label: 'Discussion', short: 'Discussion' },
  { to: '/significance', label: 'Significance', short: 'Significance' },
  { to: '/developers', label: 'Developers', short: 'Team' },
  { to: '/references', label: 'References', short: 'References' },
] as const

export type NavPath = (typeof navItems)[number]['to']

/** Images generated for this site, served through the Netlify Image CDN. */
export const images = {
  hero: '/img/hero-lab.png',
  desk: '/img/background-desk.png',
  classroom: '/img/significance-classroom.png',
}

export const aidTypes = [
  {
    id: 'coding',
    name: 'Online coding platforms',
    blurb: 'Write, run, and debug code in the browser with instant feedback.',
    use: 'Introductory programming labs and practice problems.',
  },
  {
    id: 'lms',
    name: 'Learning management systems',
    blurb: 'One place for modules, quizzes, submissions, and announcements.',
    use: 'Course delivery, assessments, and tracking progress.',
  },
  {
    id: 'emodules',
    name: 'E-modules',
    blurb: 'Self-paced digital lessons that can be reread any time.',
    use: 'Reviewing engineering mathematics and computing concepts.',
  },
  {
    id: 'video',
    name: 'Video tutorials',
    blurb: 'Step-by-step walkthroughs that can be paused and replayed.',
    use: 'Visualizing circuits, code, and abstract theory.',
  },
] as const

export const freshmanPath = [
  {
    step: '01',
    title: 'Arrival',
    body: 'Freshmen enter with uneven exposure to programming and technical fundamentals.',
  },
  {
    step: '02',
    title: 'Foundations',
    body: 'Introductory programming, engineering mathematics, and computing systems — all at once.',
  },
  {
    step: '03',
    title: 'Building blocks',
    body: 'These subjects underpin every upper-level hardware and software course.',
  },
  {
    step: '04',
    title: 'Advanced CpE',
    body: 'A strong first year makes later design, embedded, and systems courses manageable.',
  },
]

export const shift = {
  before: {
    label: 'Lecture-based delivery',
    points: [
      'Concepts explained once, in class',
      'Abstract theory shown on a board',
      'Practice limited to lab schedules',
      'Review depends on handwritten notes',
    ],
  },
  after: {
    label: 'Technology-enhanced learning',
    points: [
      'Lessons revisited at the student’s own pace',
      'Abstract theory visualized through simulations and video',
      'Code and circuits tested in real time',
      'Modules, quizzes, and feedback available any time',
    ],
  },
}

export const efficacyConditions = [
  {
    title: 'Instructional integration',
    body: 'How well the tool is aligned with the curriculum and the lesson.',
  },
  {
    title: 'Educator guidance',
    body: 'Whether faculty actively direct how and when the tool is used.',
  },
  {
    title: 'Student skill',
    body: 'How effectively students can navigate and use the tool.',
  },
]

/* ---------- Discussion: related studies ---------- */

/** Delos Reyes (2025), Table 1.1 — engagement before vs. after multimedia (scale 1–4). */
export const delosReyesEngagement = [
  { indicator: 'Actively participated in class discussions', before: 2.01, after: 3.91 },
  { indicator: 'Felt motivated to engage with course material', before: 2.26, after: 3.88 },
  { indicator: 'Asked questions to clarify concepts', before: 2.58, after: 3.9 },
  { indicator: 'Collaborated with peers on assignments', before: 2.65, after: 3.9 },
  { indicator: 'Completed homework on time and to the best of ability', before: 2.28, after: 3.9 },
]
export const delosReyesMean = { before: 2.38, after: 3.9 }
export const engagementScale = [
  { range: '3.26–4.00', label: 'To a great extent' },
  { range: '2.51–3.25', label: 'To a moderate extent' },
  { range: '1.76–2.50', label: 'To some extent' },
  { range: '1.00–1.75', label: 'Not at all' },
]

/** Tapio & Gapol (2025), Table 1 — factor summary and reliability. */
export const tapioFactors = [
  {
    factor: 'Digital Learning Support',
    description: 'Usefulness, efficiency, and reliability of digital tools for learning and task management',
    items: 15,
    alpha: 0.909,
  },
  {
    factor: 'Engagement and Motivation',
    description: 'Interest, attention, and motivation when digital tools are used during onsite classes',
    items: 15,
    alpha: 0.928,
  },
  {
    factor: 'Access and Confidence',
    description: 'Comfort in accessing and navigating digital tools in face-to-face learning',
    items: 6,
    alpha: 0.834,
  },
]

/** Siega (2025), Table 2 — digital learning aids used by CpE students (n = 218, 662 responses). */
export const siegaDevices = [
  { category: 'Smartphone', frequency: 182, percent: 27 },
  { category: 'Laptop', frequency: 132, percent: 20 },
  { category: 'Internet resources', frequency: 116, percent: 18 },
  { category: 'Learning management system', frequency: 96, percent: 15 },
  { category: 'Desktop computer', frequency: 76, percent: 11 },
  { category: 'Educational software', frequency: 36, percent: 5 },
  { category: 'Tablet', frequency: 20, percent: 3 },
  { category: 'Other', frequency: 4, percent: 1 },
]
export const siegaStats = {
  respondents: 218,
  responses: 662,
  frequentUse: 73,
  daily: 46,
  threeToFour: 27,
  gpa: 1.65,
  gpaPercent: 91.15,
  r: 0.145,
  p: 0.032,
}

/** Su et al. (2025) — benefits and concerns of digital tools in engineering education. */
export const suBenefits = [
  { title: 'Learn at your own pace', body: 'AI, AR/VR, and LMS make learning personalized and accessible.' },
  { title: 'Immediate feedback', body: 'Quizzes and simulations show students where they stand right away.' },
  { title: 'Engagement & collaboration', body: 'Online discussions, quizzes, and group activities keep students involved.' },
  { title: 'Safe virtual labs', body: 'Test designs and explore real-world scenarios without physical equipment.' },
]
export const suConcerns = [
  { title: 'Cost', body: 'Equipment and software licensing can be expensive.' },
  { title: 'Connectivity', body: 'Limited internet access and insufficient resources.' },
  { title: 'Educator training', body: 'Faculty need preparation to integrate tools well.' },
  { title: 'Privacy & reliability', body: 'Data privacy and trust in AI-based systems remain open questions.' },
]

/** Dancsa et al. (2023), Figure 1 — categories of digital learning aids (Education 4.0 tools). */
export const educationTools = [
  { id: 'lms', name: 'Learning Management System', body: 'Hosts modules, assignments, and grades so students can access materials anytime.', example: 'Course pages, module uploads, quiz scheduling' },
  { id: 'video', name: 'Video Conferencing Tools', body: 'Brings synchronous classes online. Overuse can cause fatigue and anxiety.', example: 'Live lectures, consultations, online defenses' },
  { id: 'exam', name: 'Digital Exam & Assessment', body: 'Delivers tests with immediate feedback and automatic scoring.', example: 'Timed quizzes, auto-graded problem sets' },
  { id: 'cloud', name: 'Data Exchange & Cloud Systems', body: 'Stores and shares files across devices and classmates.', example: 'Shared drives for lab reports and code' },
  { id: 'docs', name: 'Document Collaboration', body: 'Lets groups write and edit together in real time.', example: 'Group lab write-ups, project documentation' },
  { id: 'game', name: 'Game-Based Learning', body: 'Turns practice into play to sustain motivation.', example: 'Coding challenges, review quiz games' },
  { id: 'library', name: 'Digital Library & Databases', body: 'Gives access to journals, e-books, and research databases.', example: 'Finding sources for reports and research' },
  { id: 'lab', name: 'Virtual / Remote Lab & Simulation', body: 'Lets students run experiments through simulation.', example: 'Circuit simulators, logic design tools' },
  { id: 'board', name: 'Digital White-/Chalkboard', body: 'Interactive boards for sketching and solving problems live.', example: 'Working through derivations together' },
  { id: 'grade', name: 'Digital Gradebook', body: 'Tracks scores and progress transparently.', example: 'Monitoring standing across the term' },
] as const

export const dancsaCompetencies = ['Technical', 'Methodological', 'Social', 'Personal']

export const synthesis = [
  { k: 'Engagement rises', v: 'Multimedia and digital tools consistently raise participation, motivation, and collaboration.' },
  { k: 'Performance links are real but modest', v: 'Technology use correlates with grades, yet usage alone does not guarantee success.' },
  { k: 'Context decides', v: 'Results depend on setting, integration, faculty guidance, and student access.' },
  { k: 'A local gap', v: 'Little evidence exists for CpE freshmen at BatStateU Alangilan — the focus of this study.' },
]

/* ---------- Significance ---------- */

export const beneficiaries = [
  {
    id: 'students',
    who: 'Freshmen CpE students',
    headline: 'Study smarter, not longer.',
    body: 'Identifies which online coding platforms, interactive modules, and simulation software best strengthen understanding of fundamental engineering and programming concepts.',
    gains: ['Build more effective study habits', 'Stop wasting time on tools that don’t help', 'Focus on resources that are actually worthwhile'],
  },
  {
    id: 'faculty',
    who: 'CpE faculty & educators',
    headline: 'Choose tools with evidence.',
    body: 'Knowing the actual efficacy of each platform lets instructors select, integrate, and optimize digital tools within their curricula.',
    gains: ['Improve classroom engagement and teaching efficiency', 'See where students struggle with digital tools', 'Give guidance early in the school year'],
  },
  {
    id: 'admin',
    who: 'Administrators & curriculum developers',
    headline: 'Invest where it counts.',
    body: 'Empirical data supports decisions on educational technology for the College of Engineering.',
    gains: ['Software licensing decisions', 'Digital infrastructure investment', 'Curriculum alignment with technology'],
  },
  {
    id: 'researchers',
    who: 'Future researchers',
    headline: 'A starting point for local evidence.',
    body: 'Because local evidence on this topic is scarce, the results can serve as a reference for similar studies.',
    gains: ['Replicate across other campuses', 'Extend to other year levels', 'Compare across programs'],
  },
] as const

/* ---------- Developers ---------- */

/**
 * Replace these entries with your group members. Put photos in public/img/team/
 * and set `photo` to e.g. '/img/team/member-1.jpg'. Leave `photo` empty to show initials.
 */
export const team: Array<{
  name: string
  role: string
  contribution: string
  photo?: string
}> = [
  { name: 'Africa, Szan Lester P.', role: 'Project Lead & Researcher', contribution: 'Introduction and background research', photo: '/img/Africa.jpg' },
  { name: 'Carubio, Prince Andrew D.', role: 'Researcher & Writer', contribution: 'Introduction and Background', photo: '/img/Carubio.jpg' },
  { name: 'Magnaye, Matthew D.', role: 'Data & Infographics', contribution: 'Introduction and Background', photo: '/img/Magnaye.jpg' },
  { name: 'Magtibay, John Jayden T.', role: 'Web Designer', contribution: 'Introduction and Background', photo: '/img/Magtibay.jpg' },
  { name: 'Montalbo, Lhance Dominic D.', role: 'Web Developer', contribution: 'Building and publishing the website', photo: '/img/Montalbo.jpg' },
  { name: 'Pedriña, Carl Andrei G.', role: 'Data & Infographics', contribution: 'Tables, charts, and figures', photo: '/img/Pedrina.jpg' },
  { name: 'Renonos, John Timothy Q.', role: 'Web Designer', contribution: 'Layout, theme, and visual design', photo: '/img/2x2 formal.jpg' },
  { name: 'Salgado, Mart Jaybie P.', role: 'Web Designer', contribution: 'Introduction and Background', photo: '/img/Salgado.jpg' },
  { name: 'Ventocilla, Zoe Krizzia A.', role: 'Web Developer', contribution: 'Building and publishing the website', photo: '/img/Ventocilla.jpg' },
  { name: 'Villarez, Euiza Nhea B.', role: 'Web Developer', contribution: 'Building and publishing the website', photo: '/img/Villarez.jpg' },
]

export const course = {
  program: 'BS Computer Engineering',
  college: 'College of Engineering',
  campus: 'Batangas State University – Alangilan Campus',
  schoolYear: 'A.Y. 2026–2027',
}

/* ---------- References (APA 7th) ---------- */

export const references = [
  {
    id: 'alvarez-ariza-2026',
    inText: 'Ariza & Hernández Hernández, 2026',
    authors: 'Álvarez Ariza, J., & Hernández Hernández, C.',
    year: 2026,
    title: 'Investigating the impact of Education 4.0 and digital learning on students’ learning outcomes in engineering: A four-year multiple-case study',
    source: 'Informatics, 13(2), 18',
    url: 'https://doi.org/10.3390/informatics13020018',
    used: 'Introduction & Background',
  },
  {
    id: 'anwar-2025',
    inText: 'Anwar et al., 2025',
    authors: 'Anwar, S., Butt, A. A., & Menekse, M.',
    year: 2025,
    title: 'Utilizing an NLP-supported mobile reflection application to explore academic engagement, application engagement, and performance in engineering and physics courses',
    source: 'International Journal of STEM Education, 12, Article 41',
    url: 'https://doi.org/10.1186/s40594-025-00551-5',
    used: 'Introduction & Background',
  },
  {
    id: 'delos-reyes-2025',
    inText: 'Delos Reyes, 2025',
    authors: 'Delos Reyes, A.',
    year: 2025,
    title: 'The effects of multimedia resources on students’ engagement and performance in teaching college mathematics courses in Batangas State University',
    source: 'Psychology and Education: A Multidisciplinary Journal, 36(5), 570–579',
    url: 'https://doi.org/10.70838/pemj.360508',
    used: 'Discussion',
  },
  {
    id: 'tapio-2025',
    inText: 'Tapio & Gapol, 2025',
    authors: 'Tapio, R. P., & Gapol, J. Y.',
    year: 2025,
    title: 'Student perceptions of digital tools in general education courses: An exploratory factor analysis in a Philippine private university',
    source: 'Asian Journal of Education and Social Studies, 51(6), 1103–1111',
    url: 'https://doi.org/10.9734/ajess/2025/v51i62061',
    used: 'Discussion',
  },
  {
    id: 'siega-2025',
    inText: 'Siega, 2025',
    authors: 'Siega, B.',
    year: 2025,
    title: 'Analyzing the relationship between computer technology usage and CpE students’ academic performance at Makati Science Technological Institute of the Philippines',
    source: 'ResearchGate',
    url: 'https://doi.org/10.13140/RG.2.2.29362.11200',
    used: 'Discussion',
  },
  {
    id: 'su-2025',
    inText: 'Su et al., 2025',
    authors: 'Su, M., Ma, L., Zhang, D., Yunusa-Kaltungo, A., & Cheung, C.',
    year: 2025,
    title: 'Exploring benefits and concerns of incorporating digital tools into engineering education',
    source: 'European Journal of Education and Pedagogy, 6(1), 45–51',
    url: 'https://doi.org/10.24018/ejedu.2025.6.1.909',
    used: 'Discussion',
  },
  {
    id: 'dancsa-2023',
    inText: 'Dancsa et al., 2023',
    authors: 'Dancsa, D., Štempeľová, I., Takáč, O., & Annuš, N.',
    year: 2023,
    title: 'Digital tools in education',
    source: 'International Journal of Advanced Natural Sciences and Engineering Researches, 7(4), 289–294',
    url: 'https://doi.org/10.59287/ijanser.717',
    used: 'Discussion',
  },
  {
    id: 'fronda-2026',
    inText: 'Fronda, 2026',
    authors: 'Fronda, M. B.',
    year: 2026,
    title: 'Effects of digital learning tools on the academic performance of intermediate pupils',
    source: 'International Journal of Sustainability and Advanced Integrated Research (IJSAIR), 2(2), 254–261',
    url: 'https://ijsair.com/index.php/ijsair',
    used: 'Supplementary reading',
  },
  {
    id: 'zafeer-2025',
    inText: 'Zafeer et al., 2025',
    authors: 'Zafeer, H. M. I., Maqbool, S., Rong, Y., & Maqbool, S.',
    year: 2025,
    title: 'Impact of digital learning tools on student’s engagement and achievement in middle school science classes',
    source: 'International Journal of Technology in Education and Science (IJTES), 9(2), 177–196',
    url: 'https://ijtes.net/index.php/ijtes/article/view/1773',
    used: 'Supplementary reading',
  },
]

export function formatApa(r: (typeof references)[number]) {
  return `${r.authors} (${r.year}). ${r.title}. ${r.source}. ${r.url}`
}
