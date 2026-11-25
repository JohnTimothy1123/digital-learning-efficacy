# Digital Learning Aids · BatStateU Alangilan CpE

A research website for the study **“Assessing the Efficacy of Digital Learning Aids for Freshmen Computer Engineering Students at Batangas State University – Alangilan Campus.”**

The site turns the group’s research paper into six short, visual sections:

| Page | Path | What it shows |
| --- | --- | --- |
| Home | `/` | The research question, four kinds of digital learning aids, a “Myth or fact?” quiz, and a section index |
| Introduction & Background | `/introduction` | Earlier findings, the “efficacy equation,” then-vs-now comparison, the freshman transition timeline, and the research gap |
| Discussion | `/discussion` | Five related studies with interactive charts (engagement dumbbell, reliability bars, device usage, correlation meter), benefits/concerns tabs, and an Education 4.0 tool wheel |
| Significance | `/significance` | An interactive selector for the four groups who benefit |
| Website Developers | `/developers` | Team roster and how the site was built |
| References | `/references` | Nine APA 7 references with DOI links, filters, copy buttons, and a download of the full paper |

## Tech

- TanStack Start (React 19, TanStack Router) on Vite
- Tailwind CSS 4 with theme variables in `src/styles.css`
- shadcn/ui components and lucide-react icons
- Netlify Image CDN for responsive WebP images
- Deployed on Netlify

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
# or, with Netlify emulation (Image CDN):
netlify dev
```

Images go through `/.netlify/images`, so use `netlify dev` to see them locally.

## Editing content

All text, data, references, and the team roster are in **`src/content/research.ts`**.

To add your group members, edit the `team` array. To add photos, put them in `public/img/team/` and set `photo: '/img/team/your-photo.jpg'`. Members without a photo show their initials.
