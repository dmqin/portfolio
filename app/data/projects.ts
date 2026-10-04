export type Project = {
  slug: string;
  projectName: string;
  overview: string;
  projectType: string;
  projectLink: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    projectName: "Personal Portfolio",
    overview:
      "A responsive portfolio site built with Next.js and Tailwind CSS to showcase projects and contact information.",
    projectType: "Web Application",
    projectLink: "https://example.com/personal-portfolio",
    summary: "Portfolio site built with Next.js and Tailwind CSS.",
  },
  {
    slug: "task-manager",
    projectName: "Task Manager",
    overview:
      "A task management app with categories, due dates, and local persistence, designed for everyday productivity.",
    projectType: "Web Application",
    projectLink: "https://example.com/task-manager",
    summary: "Productivity app with categories and due dates.",
  },
  {
    slug: "weather-dashboard",
    projectName: "Weather Dashboard",
    overview:
      "A dashboard that fetches live weather data and displays forecasts with charts and location search.",
    projectType: "Dashboard",
    projectLink: "https://example.com/weather-dashboard",
    summary: "Live weather data with charts and search.",
  },
  {
    slug: "e-commerce-store",
    projectName: "E-Commerce Store",
    overview:
      "A small online store with product listings, a cart, and a checkout flow integrated with a payment API.",
    projectType: "E-Commerce",
    projectLink: "https://example.com/e-commerce-store",
    summary: "Online store with cart and checkout flow.",
  },
  {
    slug: "chat-application",
    projectName: "Chat Application",
    overview:
      "A real-time chat app supporting multiple rooms, message history, and user presence indicators.",
    projectType: "Real-time App",
    projectLink: "https://example.com/chat-application",
    summary: "Real-time chat with rooms and presence.",
  },
  {
    slug: "blog-platform",
    projectName: "Blog Platform",
    overview:
      "A blogging platform with markdown support, tags, and a simple content management interface.",
    projectType: "CMS",
    projectLink: "https://example.com/blog-platform",
    summary: "Markdown blogging with tags and CMS.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
