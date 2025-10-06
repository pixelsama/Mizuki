# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mizuki is a modern, feature-rich static blog template built with Astro, featuring advanced functionality including multi-language support, animated UI transitions, and extensive customization options. The project emphasizes beautiful design with smooth animations powered by Swup, comprehensive Markdown extensions, and special feature pages (anime tracking, diary, friends, gallery).

## Development Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies (pnpm >= 9 required) |
| `pnpm dev` | Start development server at localhost:4321 |
| `pnpm build` | Build production site (includes Pagefind search index) |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run Astro type checking |
| `pnpm type-check` | Run TypeScript type checking with isolated declarations |
| `pnpm format` | Format code with Biome |
| `pnpm lint` | Lint and auto-fix code issues with Biome |
| `pnpm new-post <filename>` | Create new blog post with frontmatter template |

**Note**: This project enforces pnpm usage via preinstall hook. Node.js >= 20 required.

## Architecture & Code Structure

### Core Configuration (`src/config.ts`)

Central configuration file controlling all blog features. Key exports:

- **`siteConfig`**: Site metadata, language, theme colors, translation settings, banner configuration
- **`navBarConfig`**: Navigation links with support for nested dropdown menus
- **`profileConfig`**: User profile information and social links
- **`sidebarLayoutConfig`**: Comprehensive sidebar component system with ordering, animations, and responsive behavior
- **`commentConfig`**: Comment system integration (Twikoo/Giscus/Waline)
- **`announcementConfig`**, **`musicPlayerConfig`**: Widget configurations
- **`sakuraConfig`**: Cherry blossom animation effects
- **`pioConfig`**: Live2D character configuration

### Content Collections

Defined in `src/content/config.ts`:

- **`posts`**: Blog posts with schema including title, published date, tags, categories, encryption, series support
- **`spec`**: Special pages (friends, about) with flexible schema

Posts support:
- Draft mode (`draft: true`)
- Pinning to top (`pinned: true`)
- Page encryption (`encrypted: true`, `password: "..."`)
- Series grouping (`series: "series-name"`)
- Per-post language override (`lang: "..."`)

### Layouts

- **`Layout.astro`**: Base layout with head, scripts, global styles
- **`MainGridLayout.astro`**: Main content grid with configurable sidebar positioning (left/right)

Sidebar positioning is controlled via `sidebarLayoutConfig.position` - when set to "right", the TOC automatically moves to the left for better reading experience.

### Component System

**Key Components**:
- `Navbar.astro`: Main navigation with multi-level dropdown support
- `PostCard.astro`: Article preview cards
- `PostMeta.astro`: Article metadata display
- `Search.svelte`: Pagefind-powered search interface
- `MobileTOC.svelte`: Mobile table of contents
- `PasswordProtection.astro`: Post encryption functionality
- `ArchivePanel.svelte`: Timeline-based archive view
- `TypewriterText.astro`: Animated typewriter effect for banner subtitle

**Widget Components** (`src/components/widget/`):
- Profile, Categories, Series, Tags, TOC components
- Configurable via `sidebarLayoutConfig.components` array with ordering, animations, and responsive thresholds

### Markdown Processing Pipeline

**Remark Plugins** (processing Markdown):
1. `remarkMath` - LaTeX math syntax
2. `remarkReadingTime` - Calculate reading time
3. `remarkExcerpt` - Extract post excerpts
4. `remarkGithubAdmonitionsToDirectives` - Convert GitHub-style alerts
5. `remarkDirective` - Process custom directives
6. `remarkSectionize` - Wrap sections in containers
7. `parseDirectiveNode` - Custom directive parsing
8. `remarkMermaid` - Mermaid diagram support

**Rehype Plugins** (processing HTML):
1. `rehypeKatex` - Render math formulas
2. `rehypeSlug` - Add IDs to headings
3. `rehypeMermaid` - Render Mermaid diagrams
4. `rehypeComponents` - Custom components (GitHub cards, admonitions)
5. `rehypeAutolinkHeadings` - Add anchor links to headings

**Custom Components in Markdown**:
- `::github{repo="user/repo"}` - GitHub repository card
- `::note`, `::tip`, `::important`, `::caution`, `::warning` - Admonition blocks

### Expressive Code Configuration

Code blocks use Expressive Code with custom plugins:
- `pluginCollapsibleSections()` - Collapsible code sections
- `pluginLineNumbers()` - Line numbering
- `pluginLanguageBadge()` - Language badges
- `pluginCustomCopyButton()` - Custom copy button styling

Themes: `github-light` and `github-dark` with CSS variable-based styling.

### Path Aliases (tsconfig.json)

```
@components/* → src/components/*
@assets/* → src/assets/*
@constants/* → src/constants/*
@utils/* → src/utils/*
@i18n/* → src/i18n/*
@layouts/* → src/layouts/*
@/* → src/*
```

### Utilities (`src/utils/`)

- **`content-utils.ts`**: Post filtering, sorting (respects pinned status)
- **`language-utils.ts`**: i18n language mapping
- **`date-utils.ts`**: Date formatting
- **`navigation-utils.ts`**: Navigation state management
- **`animation-utils.ts`**: Swup animation helpers
- **`widget-manager.ts`**: Sidebar widget orchestration
- **`album-scanner.ts`**: Photo gallery indexing
- **`sakura-manager.ts`**: Cherry blossom animation management
- **`icon-loader.ts`**: Dynamic icon loading

### Internationalization (i18n)

- Translation powered by Edge Translate (client-side)
- Language files in `src/i18n/languages/`
- Auto-detection based on user browser preferences
- Support for 10+ languages
- Config-driven translation exclusions (`ignoreClasses`, `ignoreTags`)

### Special Features

**Banner System**:
- Supports desktop/mobile responsive images
- Carousel mode with configurable intervals
- Optional external image API integration (PicFlow API)
- Typewriter effect for subtitle animation
- Multiple transparency modes for navbar: "semi", "full", "semifull"

**Page Types**:
- **Anime Page** (`src/pages/anime.astro`): Bangumi API or local anime tracking
- **Diary Page** (`src/pages/diary.astro`): Social media-style moments
- **Friends Page** (`src/pages/friends.astro`): Friend link showcase
- **Gallery** (`src/pages/albums/`): Photo albums with pagination
- **Timeline** (`src/pages/timeline.astro`): Personal timeline
- **Projects/Skills** (`src/pages/projects.astro`, `skills.astro`): Portfolio pages

**Comment Systems**:
- Configured via `commentConfig.type` ("twikoo", "giscus", "waline")
- Each system has separate configuration object

### Styling

- **TailwindCSS** for utility classes
- **Stylus** for custom styles (`src/styles/`)
- CSS variables for theming (hue-based color system)
- Dark mode via `class` strategy
- Typography plugin for prose content
- Custom scrollbar via OverlayScrollbars

### Build Process

1. Astro build generates static HTML
2. Pagefind runs post-build to create search index
3. Images optimized via Sharp
4. OG images can be generated (disabled by default for performance)

### Page Encryption

Posts can be password-protected using frontmatter:
```yaml
encrypted: true
password: "your-password"
```
Handled by `PasswordProtection.astro` component using bcrypt for password hashing and crypto-js for content encryption.

## Important Notes

- **Base Path**: Configured in `astro.config.mjs` as `/Mizuki/` for GitHub Pages deployment
- **Site URL**: Update `site` in `astro.config.mjs` before deployment
- **Swup Integration**: Page transitions handled by Swup with special handling for anchor links
- **Responsive Sidebar**: Components support collapse thresholds to improve mobile UX
- **Widget System**: All sidebar components are configuration-driven via `sidebarLayoutConfig.components` array
- **Translation Service**: Uses Edge browser translation API, controlled by `siteConfig.translate`

## Creating New Posts

Use `pnpm new-post <filename>` to generate a post template in `src/content/posts/`. Script automatically:
- Adds `.md` extension if omitted
- Creates nested directories if path includes slashes
- Inserts frontmatter template with current date

## Testing & Quality

- Biome for linting and formatting (replaces ESLint/Prettier)
- TypeScript strict mode enabled
- Astro check for template validation
- Isolated declarations for better type checking
