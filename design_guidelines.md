# Web Hosting Company Landing Page - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern hosting/SaaS leaders like Vercel, Netlify, and DigitalOcean. These companies excel at balancing technical credibility with approachable design, using clean layouts, strategic color, and trust-building elements.

**Core Principles**:
- Tech-forward minimalism with strategic color accents
- Trust and reliability conveyed through clean design
- Performance-focused aesthetic (fast, lightweight feel)
- Clear information hierarchy for easy plan comparison

## Color Palette

**Dark Mode Primary**:
- Background Base: 220 18% 8% (deep navy-blue)
- Surface: 220 15% 12% (elevated sections)
- Primary Brand: 195 100% 50% (electric cyan - conveys speed/tech)
- Text Primary: 0 0% 98%
- Text Secondary: 220 10% 65%

**Light Mode Primary**:
- Background Base: 0 0% 100%
- Surface: 220 20% 97%
- Primary Brand: 195 100% 45%
- Text Primary: 220 20% 15%
- Text Secondary: 220 10% 45%

**Accent Colors** (use sparingly):
- Success Green: 142 76% 45% (uptime indicators, checkmarks)
- Warning Amber: 38 92% 50% (limited offers, highlights)

## Typography

**Font Families** (via Google Fonts):
- Headings: 'Inter' - weights 700, 800
- Body: 'Inter' - weights 400, 500, 600
- Code/Technical: 'JetBrains Mono' - weight 400 (for server specs, code snippets)

**Scale**:
- Hero H1: text-6xl md:text-7xl font-bold
- Section H2: text-4xl md:text-5xl font-bold
- Card H3: text-2xl font-semibold
- Body: text-base md:text-lg
- Small: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Container: max-w-7xl mx-auto px-4 md:px-6

## Component Library

### Hero Section
- Full-width background gradient (cyan to blue subtle)
- Large hero headline + subheadline emphasizing reliability/speed
- Dual CTAs: primary "Get Started" + secondary "View Plans"
- Trust indicators below CTAs: "99.9% Uptime • 24/7 Support • 30-Day Guarantee"
- Hero image: Modern server visualization or abstract tech graphic (right side on desktop)

### Hosting Plans Section (Multi-Column)
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card design: elevated surface with hover lift effect
- "Popular" plan highlighted with primary brand border
- Each card: Plan name, price (large), billing cycle, feature list with checkmarks, CTA button
- Feature comparison toggle option

### Features Showcase (Multi-Column)
- 4-column grid for key features (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Icon + title + brief description format
- Icons from Heroicons (outline style)
- Features: Lightning-fast SSD, DDoS Protection, Free SSL, Auto Backups, 24/7 Support, 99.9% Uptime

### Performance Metrics Section
- 3-column stat display with large numbers
- Animated counters on scroll (subtle)
- Format: Big number + label (e.g., "99.9% Uptime", "< 200ms Response Time", "500K+ Sites Hosted")

### Technology Stack Section
- Grid of technology logos/badges (what's included)
- 6-8 icons in a grid: cPanel, WordPress, MySQL, PHP, Node.js, Python, etc.
- Grayscale logos with subtle hover color

### Testimonials (2-Column)
- 2-column testimonial cards on desktop
- Each card: quote, customer name, company, star rating
- Include customer photos (professional headshots)

### FAQ Section
- Single column accordion layout
- 6-8 common questions about hosting, migration, support
- Clean expand/collapse animations

### Footer
- Multi-column footer (4 columns on desktop)
- Columns: Products, Company, Resources, Contact
- Newsletter signup form with email input + subscribe button
- Social media icons
- Trust badges: SSL secured, payment methods, certifications
- Copyright and legal links

## Images

**Hero Section**: 
- Large hero image on right side (desktop) showing modern server racks, data center, or abstract cloud/network visualization
- Should convey speed, reliability, and modern infrastructure
- Consider animated subtle particles or glow effects overlay

**Trust Building**:
- Customer testimonial headshots (professional, diverse)
- Technology partner logos (actual logos of cPanel, WordPress, etc.)
- Optional: Team photo or data center facility photo in About/Trust section

**Icons**:
- Use Heroicons throughout for consistency
- Outline style for features, solid style for navigation/UI elements

## Animations
- Hero: Subtle fade-in on load
- Scroll-triggered: Fade-up for sections (gentle, not distracting)
- Cards: Subtle lift on hover (translate-y-1 transition)
- Stats: Count-up animation on scroll into view
- No complex or distracting animations - prioritize performance perception

## Critical Notes
- Each section should be substantial and well-designed - not minimal or sparse
- Use blur backdrop for outline buttons over images: backdrop-blur-sm bg-white/10
- Maintain 7-8 total sections for comprehensive landing page
- Emphasize trust through design: clean layouts, professional imagery, clear information
- Performance-focused aesthetic: fast loading feel, optimized visuals, clean code presentation