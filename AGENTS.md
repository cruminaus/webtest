# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Current Design Decisions

- The public site is an executive consulting landing page for Ley 21.719 preparation, not a multi-service technology catalogue.
- The approved hero uses a quiet, warm-white two-column composition: executive message and CTA on the left; a four-step vertical path on the right.
- The required path is: Entender, Conocer flujos, Priorizar, Implementar.
- Follow the hero with methodology, deliverables, client areas, and one concise final CTA. Avoid dense card grids and decorative UI components.
- Include two free introductory YouTube courses as a pre-consulting resource. Connect their official video URLs when supplied; do not substitute third-party courses.
- At widths up to 900 px, replace the desktop navigation with an accessible accordion menu containing the section links and the executive-session CTA; close it after navigation.
- The `/metodologia` page explains the service through four concepts grounded only in project documentation: alignment with Ley 21.719 and its regulation; a technical baseline built from AEPD guidance, ISO/IEC 27001, 27002 and 27701, ISO 29134, and ITIL 4; connection from operational understanding to execution; and a concise seven-stage description.
- All `/metodologia` content sections, including full-bleed tinted bands, must place their content inside the same 1240 px `.section-shell` used by the home page so every heading and text block shares one alignment axis.
- The `/entregables` page uses the same 1240 px containment and explains three concepts sourced only from project documentation: minimum regulatory requirements, traceability from each requirement to delivered evidence, and seven concise deliverable groups.
- The `/entregables` hero includes a restrained official-source reference to the Contraloría regulation so visitors can independently verify the methodology and deliverables without weakening the primary conversion hierarchy.
- The `/entregables` introduction must explain that the regulation develops Article 49, was issued by the Ministry of Finance on 13 June 2025, and regulates implementation, certification, registration, and supervision before presenting the official Contraloría source link.
- The two columns of the `/entregables` hero must share the same top alignment axis; do not bottom-align them when the regulatory summary changes height.
- The `/recursos` page uses the same 1240 px containment and executive hierarchy as the approved pages. It separates preparation guidance, official State documents, and SAON tools into three clearly labeled editorial sections.
- Resource items without an approved destination must not use empty or placeholder hyperlinks. Show a non-interactive `Enlace próximamente` state until the official URL is supplied.
- The shared desktop and mobile navigation intentionally omit `Áreas clave`; the section remains available within Home but is not a menu destination.
- The policies page adapts the published SAON privacy policy and service terms into the site's executive editorial layout. Keep privacy and service terms as separate numbered sections and expose it as `Políticas` in the shared desktop and mobile navigation, using `/politicas.html`; retain `/politicas` as a compatible alias.
- Published Sites navigation uses hash-backed route URLs (`/#/...`) so private-access authentication cannot discard deep-page destinations; the app continues to accept the clean path aliases locally.
- Do not reintroduce the unresolved dispute-mechanism placeholder or the authoring note that appeared at the end of the legacy policy page.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
