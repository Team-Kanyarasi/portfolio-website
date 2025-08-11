# Project Overview

This is a personal portfolio website built with Next.js. It showcases various sections including:

- **Home Page**: The main landing page.
- **About Page**: Information about the author.
- **Blog**: A collection of blog posts, likely written in MDX.
- **Gallery**: A visual gallery section.
- **Work/Projects**: Details about various projects, also likely using MDX.
- **Team/Members**: Sections for team members or collaborators.

The project utilizes:
- Next.js for the React framework.
- MDX for content authoring (blog posts, project details).
- SCSS modules for styling.

## Project Structure

The key directories and their purposes are:

- `src/app/`: Contains the main application routes and pages.
    - `api/`: API routes for authentication, OG image generation, and RSS feed.
    - `blog/`: Blog pages and MDX content for posts.
    - `gallery/`: Gallery page.
    - `work/`: Work/Projects pages and MDX content for projects.
- `src/components/`: Reusable React components, often with associated SCSS modules.
- `src/content/`: MDX content files for members and team sections.
- `public/`: Static assets like images (avatar, gallery, project covers) and trademarks.
- `resources/`: Additional resources like content, custom CSS, icons, and configuration.
- `utils/`: Utility functions.
