# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevOtaku.com is a professional software development company website built with Next.js and the Once UI design system. The site showcases services, team profiles, case studies, and blog content for a Stockholm-based development studio specializing in web applications, AI agents, and custom software solutions.

## Development Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static site
npm run lint         # Run ESLint

# Content Management
# Add blog posts: src/app/blog/posts/*.mdx (supports multi-author)
# Add case studies: src/app/work/projects/*.mdx
# Update team members: src/resources/content.js (teamMembers array)
```

## Architecture & Key Files

### Configuration Files
- `src/resources/once-ui.config.js` - Main UI configuration (routes, theming, fonts)
- `src/resources/content.js` - Business content (company info, services, testimonials, team)
- `next.config.mjs` - Next.js config with MDX support and Sass options
- `biome.json` - Code formatting and linting configuration

### Content Management
- **Blog Posts**: `src/app/blog/posts/*.mdx` - Multi-author support, tags, featured posts
- **Case Studies**: `src/app/work/projects/*.mdx` - Client projects with results and testimonials
- **Team Profiles**: Individual pages at `/team/[slug]` with portfolios and skills
- **Services**: Defined in `src/resources/content.js` with pricing and features

### Routing & Pages
- **Homepage**: Professional services presentation with CTAs
- **Services**: `/services` - Service offerings with pricing
- **Team**: `/team` - Team overview, individual profiles at `/team/[slug]`
- **Work**: `/work` - Case studies and project portfolio
- **Blog**: `/blog` - Multi-author technical content
- **Contact**: `/contact` - Quote request form and business info
- **About**: `/about` - Company story and technical expertise

### Styling System
- Once UI design system with CSS custom properties
- Sass modules for component-specific styling
- Theme configuration in `once-ui.config.js` (neutral, brand, accent colors)
- Responsive breakpoints defined in `src/components/breakpoints.scss`

### Key Components
- `Header.tsx` - Navigation with Stockholm timezone display
- `ThemeToggle.tsx` - Dark/light mode switching
- `Mailchimp.tsx` - Newsletter signup integration
- Contact form with project type and budget selection
- Team member cards with social links and skills
- Service cards with pricing and feature lists

## Development Notes

- TypeScript paths configured with `@/*` aliasing to `src/*`
- MDX files support both `.md` and `.mdx` extensions
- Sass compiler set to "modern" with legacy deprecation silencing
- Images should be placed in `public/images/` with appropriate subfolders
- Social links auto-generate from `src/resources/content.js`

## Business Configuration

To update business information:
1. **Company Details**: Edit `company` object in `src/resources/content.js`
2. **Services**: Update `services.offerings` array with pricing and features
3. **Team Members**: Modify `teamMembers` array with skills and social links
4. **Testimonials**: Update `testimonials.reviews` for social proof
5. **Contact Info**: Update email, phone, and location in `contact` object
6. **Base URL**: Change domain in `src/resources/once-ui.config.js`

## Blog & Content Guidelines

- Blog posts support multiple authors via `author` and `coAuthors` frontmatter
- Case studies should include client results, technologies, and testimonials
- Use `featured: true` for important content on homepage
- Include relevant tags for content categorization
- Add client quotes and success metrics to project pages