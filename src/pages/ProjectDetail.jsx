// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "../components/ProjectsNew";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [fileDate, setFileDate] = useState(""); // Tila aikaleimalle

  const project = projects.find((p) => p.slug === slug);

  // Nollataan vieritys kun slug muuttuu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (project) {
      setLoading(true);
      fetch(`/content/${slug}.md`)
        .then((res) => {
          const contentType = res.headers.get("content-type");
          if (!res.ok || (contentType && contentType.includes("text/html"))) {
            throw new Error("No markdown writeup found");
          }

          // Luetaan palvelimen palauttama Last-Modified aikaleima
          const lastModified = res.headers.get("last-modified");
          if (lastModified) {
            const formattedDate = new Date(lastModified).toLocaleDateString(
              "fi-FI",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              },
            );
            setFileDate(formattedDate);
          }

          return res.text();
        })
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch(() => {
          setContent(
            "## Article Not Found\n\nNo detailed writeup available yet for this project.",
          );
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="container mx-auto py-20 text-center text-slate-800">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link
          to="/#projects"
          className="text-purple-600 underline mt-4 inline-block font-medium"
        >
          ← Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Full-width container with sharp borders and clean padding */}
      <article className="w-full border-y border-slate-200 bg-white px-4 sm:px-8 py-10 md:py-14">
        <div className="max-w-5xl mx-auto">
          {/* Navigation & Action Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <Link
              to="/#projects"
              className="text-purple-700 hover:text-purple-600 font-bold text-sm inline-flex items-center gap-1 transition-colors"
            >
              ← Back to Projects
            </Link>

            {/* Action buttons matching ProjectCard styling */}
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-200 shadow-md active:scale-95"
                >
                  <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 border border-emerald-400 rounded-xl transition-all duration-200 shadow-md hover:shadow-emerald-500/20 active:scale-95"
                >
                  <svg
                    className="w-4 h-4 text-emerald-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Site
                </a>
              )}
            </div>
          </div>

          {/* Header Block with Title Badge Styling */}
          <header className="mb-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gradient tracking-tight leading-tight mb-4">
              {project.title}
            </h1>

            {/* Julkaisuaika / Timestamp ja Tagit */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {fileDate && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <svg
                    className="w-3.5 h-3.5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Päivitetty: {fileDate}</span>
                </div>
              )}

              {/* Tech Stack Pills */}
              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-200 text-slate-800  px-3 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Hero Image Section */}
          {project.image && (
            <div className="relative w-full h-80 sm:h-[450px] overflow-hidden bg-slate-50 border border-slate-200 mb-10 shadow-sm">
              <img
                src={project.image}
                alt="blur background"
                className="absolute top-0 left-0 w-full h-full object-cover filter blur-xl scale-110 opacity-30"
                aria-hidden="true"
              />
              <img
                src={project.image}
                alt={project.title}
                className="relative w-full h-full object-contain p-4"
              />
            </div>
          )}

          <hr className="border-slate-200 mb-10" />

          {/* Markdown Content - Crisp Dark Text on White */}
          <main>
            {loading ? (
              <div className="text-center py-10 text-slate-500 font-medium">
                Loading case study...
              </div>
            ) : (
              <article
                className="prose prose-slate max-w-none font-serif
                prose-h2:font-sans prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:text-slate-900 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3 prose-h2:mt-10 prose-h2:mb-4
                prose-h3:font-sans prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-bold prose-h3:text-purple-800 prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-slate-800 prose-p:text-lg sm:prose-p:text-[19px] prose-p:leading-[1.85] prose-p:font-normal prose-p:my-5
                prose-li:text-slate-800 prose-li:text-lg prose-li:leading-relaxed prose-li:my-2
                prose-strong:text-slate-950 prose-strong:font-bold
                prose-table:font-sans prose-table:w-full prose-table:my-8 prose-th:text-slate-900 prose-th:bg-slate-100 prose-th:p-3 prose-th:border-b-2 prose-th:border-slate-300 prose-td:border-b prose-td:border-slate-200 prose-td:p-3"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </article>
            )}
          </main>
        </div>
      </article>
    </div>
  );
}
