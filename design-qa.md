# Design QA — SAON landing page

## Comparison target

- **Source visual truth:**
  - `C:\Users\Carlos\.codex\generated_images\01a0589b-c7d6-7593-9dde-3a7342509571\exec-1dc8d600-c154-41c8-8f83-5c8283420934.png` — approved hero, including the four-step path.
  - `C:\Users\Carlos\AppData\Local\Temp\codex-clipboard-534bc85b-98a2-481e-b76f-10cc9e37c71b.png` — methodology and deliverables reference.
  - `C:\Users\Carlos\AppData\Local\Temp\codex-clipboard-db687862-de63-46b7-8699-bb1b73cf7767.png` — areas and closing CTA reference.
- **Implementation screenshot:** `C:\Dev\poc\websaon\implementation-browser.png`
- **Desktop viewport:** 1265 × 2693 px full-page capture; browser desktop default, 1× density.
- **Mobile check:** 390 × 844 CSS px, browser body width 375 px. No horizontal overflow was detected.
- **State:** default page state; CTA and `Entregables` navigation were also tested.

## Full-view comparison evidence

The source references and browser-rendered implementation were inspected together in the current design-review session. The implementation preserves the intended order and hierarchy: sparse executive hero, four-step method, evidence-led deliverables, four organizational audiences, then one dark closing CTA. The extended page deliberately uses the hero's restrained visual language rather than copying the reference screenshots' higher component density.

## Focused-region comparison evidence

- **Hero:** the browser rendering retains the two-column proportion, left-aligned executive message, one violet CTA, and a four-step vertical path. The source-approved labels and ordering are present: Entender, Conocer flujos, Priorizar, Implementar.
- **Method and deliverables:** the rendered sections preserve the source's centered section headings, violet outline icon language, light background separation, and two-column evidence list without adding decorative cards.
- **Closing area:** the implementation connects the four audience areas directly to one concise dark CTA band, matching the reference's information hierarchy while improving breathing room.

## Findings

No actionable P0, P1, or P2 findings.

### Required fidelity surfaces

- **Fonts and typography:** system Inter-style sans fallback creates a strong display/body hierarchy; no truncation or awkward desktop wrapping seen. Mobile method labels remain readable.
- **Spacing and layout rhythm:** section spacing is consistent and supports the requested executive, low-density reading pace. Desktop grid alignment is stable; mobile stacks the method cleanly.
- **Colors and visual tokens:** violet is reserved for CTA, markers, and icons; dark indigo is limited to the final conversion region and footer; warm-white and lavender surfaces preserve contrast and restraint.
- **Image quality and asset fidelity:** no raster imagery is required by the approved design. Brand wordmark is live text; the supplied/selected visual direction is recreated through typography, spacing, and an icon library rather than degraded screenshot crops.
- **Copy and content:** the four required actions and their supporting descriptions are correct, coherent, and consistent across hero and method sections.
- **Icons:** Phosphor line icons are consistently sized and weighted; no custom inline SVG or text-glyph substitutes are used.
- **Interactions and accessibility:** primary hero CTA scrolls to the contact section; the `Entregables` navigation link scrolls to its target. Buttons are semantic controls and links are native anchors. No browser console warnings or errors were recorded.

## Implementation checklist

- [x] Build the approved hero with its four actions.
- [x] Connect methodology, deliverables, audience areas, and closing CTA.
- [x] Verify desktop rendering and browser console.
- [x] Verify mobile width does not overflow horizontally.
- [x] Test the primary CTA and internal navigation.

## Follow-up polish

- [P3] If a final SAON brand font and logo asset are provided, replace the live wordmark and system font fallback with the approved brand resources.

## Resources section QA — 2026-08-31

- **Source visual truth:** `C:\Users\Carlos\AppData\Local\Temp\codex-clipboard-eb624b23-835f-4ee8-826c-4b3eaf59e7b8.png` (1140 × 734 px).
- **Desktop implementation screenshot:** `C:\Dev\poc\websaon\resources-desktop.png` (1152 × 900 px browser viewport capture, 1× density).
- **Mobile implementation screenshot:** `C:\Dev\poc\websaon\resources-mobile.png` (390 × 844 CSS px, 1× density).
- **State:** resources section in its default state; both course access controls are intentionally disabled because the official YouTube URLs were not present in the old site and could not be verified publicly.
- **Full-view comparison:** the implementation preserves the reference's two-course hierarchy, introductory copy, large bordered course surfaces and clear access-control placement while matching the new site's wider spacing and executive typography.
- **Focused comparison:** course labels, headings, topic lists, border treatment and CTA positions were inspected at desktop size; the mobile capture confirms a clean single-column stack with no horizontal overflow (`bodyWidth: 375`, `viewport: 390`).
- **Fonts and typography:** consistent with the current site; course headings and body copy remain readable at both breakpoints.
- **Spacing and layout rhythm:** desktop cards align and balance; mobile stacking preserves adequate separation.
- **Colors and tokens:** all colors use the existing SAON token palette.
- **Image quality and assets:** no raster imagery is required; the YouTube mark uses the installed Phosphor icon library.
- **Copy and content:** course outcomes are aligned with the supplied brief and the previous proposal.
- **Console:** no browser warnings or errors were recorded.

### Blocking finding

- [P1] Official YouTube destinations are missing.
  - Location: both `.resource-link-pending` controls in `#recursos`.
  - Evidence: the old site used `href="#"` for both courses, and public search did not identify authoritative SAON course URLs.
  - Impact: visitors cannot access the promised free resources yet.
  - Fix: provide the two official YouTube URLs; replace the disabled controls with external links and verify both destinations.

## Resources hierarchy revision — 2026-08-31

- **Previous implementation:** `C:\Dev\poc\websaon\resources-desktop.png`.
- **Revised desktop implementation:** `C:\Dev\poc\websaon\resources-compact-desktop.png`.
- **Revised mobile implementation:** `C:\Dev\poc\websaon\resources-compact-mobile.png`.
- **Viewport evidence:** desktop browser capture at 1152 × 900 px; mobile at 390 × 844 CSS px with `bodyWidth: 375` and no horizontal overflow.
- **Comparison result:** the large two-card presentation was replaced by a compact editorial section placed after the core service, deliverables and audience content. The revised section uses two lightweight rows, lower type scale, shorter copy, simple dividers and reduced vertical spacing.
- **Hierarchy:** resources now read as optional preparation material and the dark consultation CTA remains the strongest visual and conversion element.
- **Typography, spacing and color:** all use the existing SAON tokens and responsive scale; no clipping, overflow or awkward wrapping was found.
- **Assets:** the YouTube indicator continues to use the installed Phosphor icon library; no custom graphic substitutes were introduced.
- **Console:** no warnings or errors were recorded.
- **Design result:** passed; no actionable P0/P1/P2 visual findings.
- **Remaining functional blocker:** the two authoritative YouTube URLs are still missing, so the overall resources feature remains blocked for public access.

final result: blocked

## Mobile navigation QA — 2026-08-31

- **Problem reference:** `C:\Users\Carlos\AppData\Local\Temp\codex-clipboard-5cd48e98-0628-45ad-8561-a58a71fc0fd4.png`.
- **Implementation evidence:** `C:\Dev\poc\websaon\mobile-menu-open.png`, captured at 390 × 844 CSS px.
- **Closed state:** the previous isolated arrow was replaced with a 44 × 44 px labeled menu control. The desktop navigation and contact control remain hidden below 900 px.
- **Open state:** the accordion presents Enfoque, Entregables, Áreas clave, Recursos gratuitos and the executive-session CTA in one restrained panel below the wordmark.
- **Interaction:** `aria-expanded` changes from `false` to `true`; selecting Recursos gratuitos closes the panel and navigates to `#recursos`.
- **Responsive regression:** at 1280 px the mobile trigger is absent and the primary desktop navigation remains visible.
- **Visual result:** no actionable P0/P1/P2 issues in the mobile-navigation scope.
- **Unrelated existing dependency:** the missing official YouTube URLs documented above remains pending and is not caused by this navigation change.

final result: passed

## Resources page — 2026-08-31

- **Structural reference:** `C:\Dev\poc\websaon\resources-visual-source.png`, a 1280 × 720 CSS viewport capture of the approved `/entregables` page used for header, containment, hero hierarchy, two-column rhythm and section transitions.
- **Implementation evidence:** `C:\Dev\poc\websaon\resources-page-desktop.png` at the same 1280 × 720 CSS viewport; focused section evidence is in `resources-page-official.png` and `resources-page-saon.png`.
- **Mobile evidence:** `C:\Dev\poc\websaon\resources-page-mobile.png` at 390 × 844 CSS px.
- **Content grounding:** page copy was derived only from `Contexto Servicio.txt`, `Detalle de Etapas.xlsx`, `Presentacion LPD _M3.pptx`, and `Dto 662-2025 Sub Hacienda.pdf` in the project documentation folder.
- **Hierarchy:** the page leads with the decision value of training, then separates preparation, State sources and SAON tools through numbered section labels and alternating backgrounds.
- **Documents:** the two official documents and two SAON resources are each presented as concise editorial rows. All four unavailable destinations use non-interactive `Enlace próximamente` states; there are no empty anchors.
- **Desktop alignment:** both hero columns begin at y=214 px, matching the approved top-aligned page structure; the 1240 px `.section-shell` containment is preserved across every section.
- **Responsive evidence:** at 390 px the page switches to a single column, uses a 375 px body width and has no horizontal overflow. The mobile menu includes the `/recursos` route.
- **Interaction:** the primary hero control moves to `#documentos`; the executive-session CTA retains the established mail action.
- **Typography, color and icons:** reuse the existing SAON type hierarchy, CSS tokens and Phosphor icon library; no new visual language or asset substitutes were introduced.
- **Console:** no warnings or errors were recorded at desktop or mobile widths.
- **Remaining P0/P1/P2 findings:** none.

final result: passed

## Deliverables hero top alignment — 2026-08-31

- **Problem reference:** `C:\Users\Carlos\AppData\Local\Temp\codex-clipboard-c9dda2a8-68b9-44d4-9af4-a9c590be3403.png` (1523 × 861 px), showing the title block starting substantially below the regulatory summary.
- **Implementation evidence:** `C:\Dev\poc\websaon\deliverables-hero-aligned.png`, captured at the same 1523 × 861 CSS viewport and 1× density.
- **Earlier P2 finding:** `.deliverables-page-hero` used `align-items: end`, so the shorter title column was pushed down to match the bottom of the taller regulatory column.
- **Fix:** changed the hero grid alignment to `align-items: start`; content, typography, widths, gap and section margins remain unchanged.
- **Measured result:** the title and regulatory columns now both begin at y=214 px (`delta: 0 px`).
- **Responsive regression:** at 390 × 844 CSS px the hero remains single-column, uses a 375 px content width and has no horizontal overflow.
- **Console:** no warnings or errors were recorded at desktop or mobile widths.
- **Remaining P0/P1/P2 findings:** none in this adjustment's scope.

final result: passed

## Methodology container alignment — 2026-08-31

- **Source visual truth:** `C:\Users\Carlos\AppData\Local\Temp\codex-clipboard-d40defb2-024c-490e-8776-d245d2519811.png` (1837 × 998 px), showing the tinted second block escaping the home-page content margins.
- **Implementation screenshot:** `C:\Dev\poc\websaon\methodology-aligned-desktop-viewport.png` at a matching 1837 × 998 CSS viewport and 1× density; full-page evidence is in `C:\Dev\poc\websaon\methodology-aligned.png`.
- **Mobile evidence:** `C:\Dev\poc\websaon\methodology-aligned-mobile.png` at 390 × 844 CSS px and 1× density.
- **Earlier P2 finding:** the alignment and stages sections applied `.section-tinted` directly to `.section-shell`, whose global full-width override caused their content to exceed the hero and home-page containment.
- **Fix:** separated each full-bleed tinted background from an inner `.section-shell` content container and reset only the outer methodology band padding.
- **Post-fix evidence:** hero, normative alignment, connection and stages containers all measure 1240 px from x=291 to x=1531; their eyebrow labels share x=343 after the common 52 px internal padding.
- **Responsive evidence:** at 390 px, every major content container shares the same 375 px body width and 24 px internal padding; no horizontal overflow was detected.
- **Typography:** unchanged; existing hierarchy, weights, line heights and wrapping remain consistent with the home page.
- **Colors/tokens:** unchanged; the warm-white and tinted section backgrounds continue using the established palette.
- **Image quality:** no raster or representational assets are part of this page; existing Phosphor interface icons remain intact.
- **Copy/content:** unchanged; this iteration only corrects containment and alignment.
- **Console:** no warnings or errors were recorded.
- **Remaining P0/P1/P2 findings:** none.

final result: passed
