import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
        >
          &larr; Back to projects
        </Link>

        <p className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {project.projectType}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.projectName}
        </h1>

        <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Overview
        </h2>
        <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {project.overview}
        </p>

        <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Project Type
        </h2>
        <p className="mt-2 text-base text-zinc-700 dark:text-zinc-300">
          {project.projectType}
        </p>

        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Visit Project
        </a>
      </main>
    </div>
  );
}
