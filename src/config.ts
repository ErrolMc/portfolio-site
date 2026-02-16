export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "Errol McFadden — Software Engineer";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "Errol McFadden — Software Engineer | Full-Stack & Cross-Platform Developer";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Portfolio of Errol McFadden, a software engineer building polished cross-platform experiences from cloud to client. Specializing in .NET, React, and real-time systems.";

const defaultBaseURL = "https://errolmc.dev";

const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  VERCEL_URL ||
  (globalThis.location && globalThis.location.origin) ||
  defaultBaseURL;
