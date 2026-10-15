---
name: create-blog
description: Turn raw study or project notes into a carefully reviewed, accessible HTML blog section for this portfolio and prepare it for publishing. Use when asked to draft, add, revise, or publish-ready a portfolio blog post from notes.
---

# Create a portfolio blog post

Transform the user's raw study or project notes into an accurate, useful post and integrate it into this repository's portfolio. Treat the notes as evidence, not as a prompt to invent a more impressive story. The goal is a publish-ready draft and website section; do not deploy or publish externally unless the user explicitly asks.

## Workflow

1. **Read the source and the destination.**
   - Review the supplied notes and identify facts, outcomes, dates, names, tools, and claims they actually support.
   - Inspect the current `index.html`, `styles.css`, and relevant project guidance before editing. Follow the existing single-page structure, Bootstrap 5 conventions, violet/blue visual style, theme variables, responsive behavior, and accessibility patterns.
   - Check for existing blog or writing sections so new posts extend the current structure rather than duplicating it.

2. **Draft a clear post.**
   - Shape the notes into a concise title, opening, logical sections, and a closing reflection or takeaway. Preserve the author's first-person perspective when appropriate.
   - Explain the context, the work or learning process, decisions, challenges, and outcomes only when supported by the notes.
   - Keep technical language understandable to the portfolio's general audience; retain precise terms where they matter.
   - Do not fabricate metrics, results, quotations, collaborators, organizations, tools, dates, credentials, or lessons. Do not turn participation or learning into claims of expertise or completed outcomes.
   - If an important detail is ambiguous, contradictory, or absent (including publication date, public links, or permission to name people), ask a focused clarifying question before asserting it. Omit optional details rather than guessing.

3. **Critique the draft as a rubber duck.**
   - Use the rubber-duck reviewer persona: curious, constructive, and willing to challenge the draft's reasoning rather than simply praise or copyedit it.
   - Inspect the draft for unsupported claims, unexplained jumps, unclear terms, missing context, weak flow, repetition, audience relevance, and whether the takeaway follows from the described experience.
   - When the `rubber-duck` agent is available, give it only the notes and draft needed for this critique and request concise, actionable findings. Otherwise, perform the same skeptical review directly.
   - Report material concerns. Incorporate fixes that are clearly supported by the notes; ask the user about concerns that require new facts or a subjective decision. Do not silently resolve disputed facts.

4. **Integrate the HTML section.**
   - Add or extend a semantic blog section in `index.html`, placing it where it fits the current information architecture and before the contact section unless the user specifies otherwise.
   - Use a unique section ID, an accessible section heading, and an `<article>` for each post. Use a sensible heading hierarchy, paragraphs, lists, and `<time datetime="...">` only when a publication or event date is confirmed.
   - Make the post discoverable from navigation when appropriate, without breaking the responsive Bootstrap navbar or its existing behavior. Preserve unique IDs and working in-page links.
   - Match the site's existing design with focused additions to `styles.css`; use existing CSS variables and responsive patterns. Do not add a framework, dependencies, inline scripts, or unnecessary global style changes.
   - Escape text correctly in HTML. Use meaningful link text and safe link attributes. Only include images or external references provided or approved by the user; provide descriptive alt text for informative images and empty alt text for decorative ones.
   - Keep the post readable in both light and dark themes and on narrow screens. Respect reduced-motion preferences if adding animation; a blog post does not need animation by default.

5. **Prepare and verify for publishing.**
   - Check spelling, grammar, factual fidelity to the notes, heading order, HTML semantics, IDs, navigation links, responsive styling, and theme compatibility.
   - Run the smallest relevant checks available in the repository, such as `git diff --check`, JavaScript syntax checks if scripts changed, and available HTML or build validation. Do not claim a check passed unless it was run.
   - Prepare a concise publishing handoff containing the final title, a suggested slug, a short excerpt/meta description, and a checklist of any missing items. Use only confirmed details; label suggestions as suggestions and do not invent a publication date.
   - Do not deploy, post, or transmit content. Do not commit changes unless explicitly asked.

## Clarification and completion

Ask only focused questions that block an accurate or publish-ready result. If the user wants a draft without resolving optional details, mark those details as omitted or pending rather than guessing. If the user has not supplied notes, request the raw notes before drafting or editing the portfolio.

At completion, briefly report the critique's key changes, the files updated, verification performed, and the publishing handoff. Be explicit about unresolved questions or checks that could not be completed.
