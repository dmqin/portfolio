import Link from "next/link";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="border-b border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Your Name
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Full-Stack Developer
          </p>
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <a href="mailto:you@example.com" className="hover:underline">
              you@example.com
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
            >
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {project.projectType}
              </p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50">
                {project.projectName}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
