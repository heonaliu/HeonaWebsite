import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";

const blogsData = [
  {
    id: 1,
    title: "The Idea: Establishment",
    image: blog1,
    date: "August 25, 2025",
    summary: "Built from an idea and the persistance to fulfill it.",
    content: `The night before, my dad came in and told me about vibe coding. I was intrigued yet hesitant. I hadn't touched any kind of serious development programming since 7th grade and was constantly worried that, without relearning a whole new React course, I wouldn't be able to program anything again. This doubt held me back and made me believe that programming wasn't cut out for me. But there is so much unknown in the programming world that it is almost impossible for even the best developer to know everything.\n\nVibe coding was essentially talking out your ideas and then having an AI model translate them into executable code. As someone who struggled with writing code, this seemed like a win-win for me.\n\nThat night, the idea of vibe coding kept tossing around in my head. I really wanted to try it out. So the next morning, I took the next big step: I opened ChatGPT and ran my first npm command in 4 years.`,
  },
  {
    id: 2,
    title: "Launched!",
    image: blog2,
    date: "August 28, 2025",
    summary: "After several days of vibing and programming...",
    content:
      "After many, many hours of debugging, asking questions, and implementing ideas, I finally finished my own website. This was one of my goals for this summer, and I am actually impressed and extremely proud of myself for pushing far beyond what I thought I could. I truly never believed I could go this far. Looking at this website makes me smile because I managed to overcome my mental barriers.\n\n Just because of this one idea, if I hadn't taken the initiative to start, I wouldn't have known I could accomplish so much. Throughout this journey of building my website, I learned so much—about trial and error, creating a database with Google Firebase (for the like buttons and comments), how components work together, troubleshooting, commiting and pushing to Github and much more. Thank you so much for checking out my website.",
  },
];

export default blogsData;
