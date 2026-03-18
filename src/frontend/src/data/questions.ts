export interface Question {
  text: string;
  options: string[];
}

export interface Category {
  name: string;
  emoji: string;
  color: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    name: "Educational Likes & Dislikes",
    emoji: "📚",
    color: "purple",
    questions: [
      {
        text: "Which subject do you enjoy the most in school?",
        options: [
          "Mathematics",
          "Science",
          "English/Literature",
          "History/Geography",
          "Arts/Drawing",
          "Physical Education",
          "Commerce/Accounts",
          "I don't enjoy any subject",
        ],
      },
      {
        text: "How do you feel about reading books or articles?",
        options: [
          "Love it, I read all the time",
          "Read when needed for studies",
          "Prefer videos/podcasts",
          "Not a reader at all",
        ],
      },
      {
        text: "Which type of projects excite you most?",
        options: [
          "Experiments and research",
          "Creative writing or storytelling",
          "Building or designing things",
          "Group discussions and debates",
          "Analyzing numbers and data",
          "Drawing/painting/crafts",
        ],
      },
      {
        text: "How do you prefer to learn something new?",
        options: [
          "By watching and observing",
          "By reading and taking notes",
          "By doing it hands-on",
          "By listening to someone explain",
          "Through group activities",
        ],
      },
      {
        text: "What is your approach to exams?",
        options: [
          "Study hard and aim for top marks",
          "Study just enough to pass",
          "Focus on understanding, not marks",
          "Very stressed about exams",
          "I enjoy challenges and competitions",
        ],
      },
      {
        text: "Which school activity do you enjoy most?",
        options: [
          "Science labs / experiments",
          "Debates and elocution",
          "Art and craft sessions",
          "Sports and games",
          "Math olympiads or quizzes",
          "Drama and performances",
        ],
      },
      {
        text: "How do you feel about learning new languages?",
        options: [
          "Love it, I know multiple languages",
          "Okay with it if needed",
          "Prefer focusing on my main subjects",
          "Find it difficult",
        ],
      },
      {
        text: "Do you like working with numbers and calculations?",
        options: [
          "Yes, I'm very good at it",
          "It's okay, average at it",
          "I find it boring",
          "I completely avoid it",
        ],
      },
      {
        text: "Which career-related subject would you love to study more of?",
        options: [
          "Technology and computers",
          "Medicine and biology",
          "Law and justice",
          "Business and economics",
          "Art, music, and design",
          "Teaching and education",
          "Social work and psychology",
        ],
      },
      {
        text: "How do your teachers or parents describe your academic performance?",
        options: [
          "Excellent - always in top ranks",
          "Good - above average",
          "Average - can do better",
          "Below average - struggling",
          "My talent is outside academics",
        ],
      },
    ],
  },
  {
    name: "Talents & Natural Abilities",
    emoji: "⭐",
    color: "pink",
    questions: [
      {
        text: "What do people most often compliment you on?",
        options: [
          "Your intelligence and knowledge",
          "Your creativity and ideas",
          "Your leadership and confidence",
          "Your kindness and helping nature",
          "Your sports/physical skills",
          "Your communication and speaking ability",
          "Your technical problem-solving",
        ],
      },
      {
        text: "What activity makes you lose track of time?",
        options: [
          "Playing sports or physical activities",
          "Drawing, painting, or designing",
          "Coding or working with tech",
          "Writing stories, poems, or blogs",
          "Listening to or making music",
          "Helping and talking to people",
          "Solving puzzles or brain teasers",
        ],
      },
      {
        text: "If given a project with full freedom, what would you create?",
        options: [
          "A mobile app or website",
          "A painting or artwork",
          "A business plan",
          "A research paper",
          "A film or short video",
          "A music album",
          "A social awareness campaign",
        ],
      },
      {
        text: "How are your communication skills?",
        options: [
          "Excellent - very confident speaker",
          "Good - comfortable in small groups",
          "Average - prefer one-on-one",
          "I prefer writing over speaking",
          "Working on improving",
        ],
      },
      {
        text: "Are you good at leading a team or group?",
        options: [
          "Yes, I naturally take charge",
          "I can lead when asked",
          "I prefer to follow a good leader",
          "I work best alone",
        ],
      },
      {
        text: "How creative do you consider yourself?",
        options: [
          "Very creative - always full of ideas",
          "Moderately creative",
          "Creative only in specific areas",
          "Not particularly creative, more analytical",
        ],
      },
      {
        text: "Are you good at understanding people's emotions?",
        options: [
          "Yes, I'm very empathetic",
          "Somewhat, I try my best",
          "Not really, I'm more logical",
          "I find it difficult to read people",
        ],
      },
      {
        text: "How are your technical skills (computers, tools, gadgets)?",
        options: [
          "Excellent - I love tech",
          "Good - comfortable with basics",
          "Average - only basic usage",
          "I prefer non-tech activities",
        ],
      },
      {
        text: "Do you have any performing arts talent?",
        options: [
          "Yes - dancing, acting, or singing",
          "Yes - playing a musical instrument",
          "A little bit, nothing serious",
          "Not at all",
        ],
      },
      {
        text: "What kind of intelligence do you feel strongest in?",
        options: [
          "Logical-Mathematical",
          "Linguistic (language & writing)",
          "Visual-Spatial (design & art)",
          "Bodily-Kinesthetic (sports & movement)",
          "Musical",
          "Interpersonal (people skills)",
          "Intrapersonal (self-awareness)",
          "Naturalistic (nature & environment)",
        ],
      },
    ],
  },
  {
    name: "Skills & Future Learning",
    emoji: "🚀",
    color: "cyan",
    questions: [
      {
        text: "Which of these skills do you currently have?",
        options: [
          "Basic computer/MS Office skills",
          "Coding or programming",
          "Graphic design or video editing",
          "Public speaking or debate",
          "Sales or marketing",
          "A musical instrument",
          "Writing or content creation",
          "None of the above yet",
        ],
      },
      {
        text: "Which skill are you most excited to learn?",
        options: [
          "Artificial Intelligence / Machine Learning",
          "Digital Marketing",
          "Video production or filmmaking",
          "A foreign language",
          "Financial planning or investing",
          "Medical or health sciences",
          "Architecture or interior design",
          "Sports coaching or fitness training",
        ],
      },
      {
        text: "Do you have any freelancing or part-time experience?",
        options: [
          "Yes, I've earned money from a skill",
          "I've tried it casually",
          "No, but I want to",
          "No, I focus only on studies",
        ],
      },
      {
        text: "How comfortable are you with technology?",
        options: [
          "Very comfortable - I love gadgets and apps",
          "Comfortable - I use it daily",
          "Basic - only for studies",
          "Uncomfortable - prefer offline activities",
        ],
      },
      {
        text: "Would you like a career that uses creative software (Photoshop, video tools, etc.)?",
        options: [
          "Absolutely yes!",
          "Maybe, if it fits my career",
          "Not really my thing",
          "I don't know what these are",
        ],
      },
      {
        text: "Are you currently learning any skill outside school?",
        options: [
          "Yes - online courses/YouTube",
          "Yes - coaching classes",
          "Yes - from family or self-taught",
          "No, not yet",
        ],
      },
      {
        text: "How good are you at managing your time and tasks?",
        options: [
          "Excellent - very organized",
          "Good - mostly on track",
          "Average - sometimes struggle",
          "Poor - need to improve",
        ],
      },
      {
        text: "Would you be comfortable working with data and analysis?",
        options: [
          "Yes, I enjoy finding patterns in data",
          "Somewhat, if given training",
          "I prefer creative or people-oriented work",
          "Not at all",
        ],
      },
      {
        text: "How do you feel about public presentation or pitching ideas?",
        options: [
          "Love it, very confident",
          "Okay with preparation",
          "Nervous but willing to try",
          "Prefer to avoid it",
        ],
      },
      {
        text: "If you could master one skill in 6 months, what would it be?",
        options: [
          "Coding / app development",
          "Video editing and storytelling",
          "Business and entrepreneurship",
          "A foreign language",
          "Medical or scientific research skills",
          "Music, dance, or theatre",
          "Fitness and sports training",
          "Teaching and mentoring",
        ],
      },
    ],
  },
  {
    name: "Personality & Values",
    emoji: "💎",
    color: "lime",
    questions: [
      {
        text: "How would you describe yourself in one word?",
        options: [
          "Ambitious",
          "Creative",
          "Caring",
          "Analytical",
          "Adventurous",
          "Leader",
          "Curious",
          "Calm",
        ],
      },
      {
        text: "In a group, you usually...",
        options: [
          "Take charge and lead",
          "Come up with new ideas",
          "Support and help others",
          "Do the research and planning",
          "Motivate the group",
          "Follow instructions carefully",
        ],
      },
      {
        text: "What matters most to you in a future career?",
        options: [
          "High salary and financial security",
          "Making a difference in society",
          "Creativity and self-expression",
          "Growth and learning",
          "Recognition and fame",
          "Work-life balance",
          "Freedom and flexibility",
        ],
      },
      {
        text: "How do you handle pressure or stress?",
        options: [
          "Stay calm and find solutions",
          "Get motivated and work harder",
          "Ask for help from others",
          "Feel overwhelmed but push through",
          "Avoid it when possible",
        ],
      },
      {
        text: "What type of work environment excites you?",
        options: [
          "A fast-paced startup or business",
          "A structured corporate environment",
          "Working outdoors or in nature",
          "A creative studio or agency",
          "A hospital or social service setting",
          "Home/remote - self-employed",
          "Research lab or academic setting",
        ],
      },
      {
        text: "How important is helping others in your career choice?",
        options: [
          "Very important - it's my purpose",
          "Somewhat important",
          "Nice to have but not a priority",
          "I focus on personal success first",
        ],
      },
      {
        text: "Are you a risk-taker?",
        options: [
          "Yes, I love challenges and new ventures",
          "I take calculated risks",
          "I prefer stable and safe paths",
          "I avoid risks whenever possible",
        ],
      },
      {
        text: "How do you make important decisions?",
        options: [
          "By logic and research",
          "By following my gut/heart",
          "By asking trusted people",
          "By considering all pros and cons carefully",
          "I usually delay or avoid decisions",
        ],
      },
      {
        text: "What is your attitude towards money?",
        options: [
          "I want to be very wealthy",
          "I want enough to live comfortably",
          "Money is secondary to passion",
          "I want financial security above all",
          "I want to use money to help others",
        ],
      },
      {
        text: "What kind of impact do you want to make?",
        options: [
          "Change the world through innovation",
          "Build a successful business",
          "Help people live better lives",
          "Create art or culture",
          "Protect the environment",
          "Inspire the next generation",
          "Serve the country or community",
        ],
      },
    ],
  },
  {
    name: "Family & Financial Background",
    emoji: "🏡",
    color: "pink",
    questions: [
      {
        text: "What is your family's general financial condition?",
        options: [
          "Very comfortable - no financial stress",
          "Middle class - manageable",
          "Tight budget - limited resources",
          "Facing difficulties - need scholarship/support",
          "Prefer not to say",
        ],
      },
      {
        text: "Do your parents support your career choice?",
        options: [
          "Yes, fully supportive of any choice",
          "Supportive but want stable/traditional career",
          "Prefer I choose engineering/medicine/law",
          "Limited awareness, I decide on my own",
          "It's complicated",
        ],
      },
      {
        text: "Is higher education abroad a possibility for you?",
        options: [
          "Yes, planning for it",
          "Maybe, depends on finances and admission",
          "Not possible financially",
          "Not interested in going abroad",
          "Don't know yet",
        ],
      },
      {
        text: "Which higher education path does your family prefer?",
        options: [
          "Engineering / Technology",
          "Medicine / Healthcare",
          "Law / Civil Services",
          "Business / MBA",
          "Arts / Design / Media",
          "They support my choice",
          "We haven't discussed it",
        ],
      },
      {
        text: "Are you willing to take an education loan if needed?",
        options: [
          "Yes, definitely",
          "Maybe if the course is worth it",
          "Prefer to avoid debt",
          "Not needed, family will support",
          "Don't know",
        ],
      },
      {
        text: "Does your family have a business background?",
        options: [
          "Yes, and I may join it",
          "Yes, but I want to do something different",
          "No, all are in jobs/service",
          "Mixed background",
        ],
      },
      {
        text: "How many years of higher education can your family comfortably support?",
        options: [
          "Up to 2 years (diploma/certificate)",
          "3-4 years (graduation)",
          "5-6 years (professional degree)",
          "As many as needed for success",
          "Unsure / dependent on scholarships",
        ],
      },
      {
        text: "Do you have a sibling or relative in a career you admire?",
        options: [
          "Yes, and I want to follow their path",
          "Yes, but I want something different",
          "No, I'm the first in my field of interest",
          "I'm inspired by people outside my family",
        ],
      },
      {
        text: "How important is job security vs. entrepreneurship to you?",
        options: [
          "Very important - I want a stable job",
          "I want to start my own business eventually",
          "Open to both - see what works",
          "Entrepreneurship is my only goal",
        ],
      },
      {
        text: "Does your family expect you to start earning early?",
        options: [
          "Yes, within 2-3 years",
          "After graduation (4-5 years)",
          "After post-graduation (6+ years)",
          "No pressure, take your time",
          "Prefer not to say",
        ],
      },
    ],
  },
  {
    name: "Future Vision & Ambitions",
    emoji: "🌟",
    color: "cyan",
    questions: [
      {
        text: "Where do you see yourself in 10 years?",
        options: [
          "Running my own successful business",
          "Working in a top company or MNC",
          "Serving the nation (IAS/IPS/Military)",
          "Making an impact through social work/NGO",
          "Creating art, music, or content",
          "Researching and inventing something new",
          "Teaching and inspiring others",
          "Living abroad with a global career",
        ],
      },
      {
        text: "What is your dream lifestyle?",
        options: [
          "City high-rise, luxury life",
          "Peaceful life with meaningful work",
          "Travelling the world",
          "Living close to nature",
          "Fame and public recognition",
          "A balanced family and career life",
        ],
      },
      {
        text: "Which industry do you think will boom in the next 10 years?",
        options: [
          "Artificial Intelligence and Technology",
          "Healthcare and Biotechnology",
          "Renewable Energy and Environment",
          "Entertainment and Content Creation",
          "Space and Advanced Science",
          "E-commerce and Finance",
          "Education and EdTech",
          "Not sure",
        ],
      },
      {
        text: "Would you like to represent India on a global stage?",
        options: [
          "Yes, that's my dream!",
          "Maybe, if the opportunity comes",
          "I prefer to work within India",
          "Not particularly",
        ],
      },
      {
        text: "How do you feel about working long hours to achieve success?",
        options: [
          "Completely fine - I'm driven",
          "Okay for initial years, then balance",
          "I want work-life balance from start",
          "I prefer comfortable working hours",
        ],
      },
      {
        text: "Which achievement would make you feel most proud?",
        options: [
          "Starting a company that employs thousands",
          "Discovering or inventing something groundbreaking",
          "Winning a national/international award",
          "Being a respected teacher or mentor",
          "Building a happy and secure family",
          "Creating art that moves people",
          "Serving the country with honor",
        ],
      },
      {
        text: "How important is social media presence and personal branding to you?",
        options: [
          "Very important - I want to be an influencer/creator",
          "Important for my professional career",
          "Somewhat useful",
          "Not interested at all",
        ],
      },
      {
        text: "Are you open to careers that didn't exist 10 years ago?",
        options: [
          "Yes, I love new-age careers",
          "Yes, if they are stable",
          "Prefer traditional/established careers",
          "Not sure what those are",
        ],
      },
      {
        text: "What motivates you to wake up every morning?",
        options: [
          "The desire to achieve something big",
          "My family and their happiness",
          "A passion or hobby I'm pursuing",
          "Learning and growing every day",
          "Making friends and connecting with people",
          "No strong motivation yet - still figuring out",
        ],
      },
      {
        text: "If you could give one message to your future self, what would it be?",
        options: [
          "Keep hustling - success is coming",
          "Stay true to your values",
          "Take care of your mental health",
          "Don't forget to have fun",
          "Make your parents proud",
          "Change the world for the better",
        ],
      },
    ],
  },
];

export const TOTAL_QUESTIONS = categories.reduce(
  (sum, c) => sum + c.questions.length,
  0,
);
