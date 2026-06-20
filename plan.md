# Seagull Mart Chocolate Shop — Catalog Site Plan

Status: pre-build. Two items below are unverified and block launch — see "Blockers" before anything goes live.

---

## 0. Blockers (resolve before publishing, not before building)

- [ ] **Phone number unverified**: `+94 76 409 5180` was scraped, not confirmed by the shop. Call/WhatsApp it yourself before wiring it into the CTA button or footer. If wrong, the WhatsApp deep link sends customers nowhere.
- [ ] **Operating hours unverified**: scraped table below is a best guess. Confirm with the owner before publishing — wrong hours sends a customer to a closed shop.
- [ ] **Card payment claim unverified**: don't state "we accept cards" until they confirm it.
- [ ] **No real product photos yet**: site ships with generic stock images, clearly fine for a mockup, not fine for the live version. Ask them for 5-10 shelf/product photos once they approve the direction.

---

## 1. Goal & audience

One job: convert a highway driver passing through Galle into a WhatsApp message or an in-store visit, in under 5 seconds of looking at a phone screen. Secondary job: rank for "imported chocolates Galle" / "imported sweets Galle" so people searching find them instead of a generic supermarket.

Audience: mobile-first, often glancing while in a car or tuk-tuk. Desktop is a non-issue — design mobile, let desktop just not break.

---

## 2. Verified vs unverified facts

**Verified (cross-referenced from Google reviews export + your own confirmation the domain is dead):**
- Address: 233 Colombo Main Rd, Galle 80000, Sri Lanka
- Positioning: imported/foreign chocolates, sweets, coffee, espresso, nuts, potato chips, dates
- Differentiator: sells bulk chocolate/toffee packets at wholesale-competitive prices
- Reputation: consistently praised for pricing and friendly/good customer service across ~30+ reviews
- Format: small physical space, well organized

**Unverified — placeholder until confirmed (see Blockers):**
- Phone: +94 76 409 5180
- Hours: Mon–Thu 10am–9pm, Fri 2pm–9pm, Sat–Sun 10am–9pm
- Card payments accepted in-store

Do not invent brand names, specific prices, or anything not in this list. If asked, say "pricing varies — message us on WhatsApp" rather than guessing a number.

---

## 3. Tech stack

| Layer | Choice | Reasoning |
|---|---|---|
| Framework | Next.js 14, App Router, `output: 'export'` (static export, no server) | Matches your existing Food Cabin/TravelNest workflow; static export = no hosting cost, no API routes needed for a page with zero backend logic |
| Styling | Tailwind CSS | Fast, consistent spacing/color tokens, mobile-first breakpoints by default |
| Hosting | Netlify | Same deploy flow you already know |
| Version control | GitHub → Netlify auto-deploy on push to `main` | Same as TravelNest |
| Images | Plain `<img>` tags, manually compressed (TinyPNG or Squoosh) | `next/image` optimization API doesn't work with static export — don't fight it |
| Fonts | Google Fonts via `next/font` | Self-hosted at build, no extra runtime request |
| Forms/checkout | None — WhatsApp deep link only: `https://wa.me/94764095180?text=...` (URL-encoded prefilled message) | No backend, matches their existing hybrid order-verification pattern |
| Maps | Google Maps iframe embed (no API key) | Free, zero JS weight |
| CMS | None for v1 | Content won't change often enough to justify it; revisit with Netlify/Decap CMS only if they ask to self-edit later |

---

## 4. Design tokens

**Color palette** (pink as accent only, not co-lead — see rationale: pink+yellow reads "candy store," this business is positioned as "imported/premium," so primary pairing is chocolate-brown + white, pink and gold as small accents)

| Token | Hex | Use |
|---|---|---|
| Background | `#FFFFFF` | Page background |
| Primary / CTA / headers | `#7A2E3A` (deep chocolate-rose) | Buttons, section headers, nav |
| Accent (sparingly) | `#D63E6B` (raspberry-pink) | Small highlights, hover states, category icons |
| Secondary accent | `#F2B705` (warm gold) | Badges only — "Bulk Deal," "Imported" tags |
| Text primary | `#2B1B17` (near-black-brown) | Body copy, headings |
| Text secondary | `#6B5B57` | Captions, metadata |
| WhatsApp CTA | `#25D366` (WhatsApp's own green) | Keep platform-recognized color for the main CTA button only — don't fight brand recognition |

**Typography**
- Headings: Poppins, weight 500/600
- Body: Inter, weight 400
- No script/cursive — must stay legible at a glance from a moving vehicle

**Layout**
- Single scrolling page, mobile-first, max content width 480px on mobile, centered with padding on desktop
- Border radius: 8px on cards/buttons (soft, approachable, not sharp/corporate)

---

## 5. Page structure (single page, in order)

1. **Hero**
   - Store name + one-line positioning: "Imported chocolates, sweets & snacks — Galle's go-to stop"
   - Primary WhatsApp CTA button, above the fold
   - This is the 3-second decision section — driver either pulls over or doesn't

2. **Category strip**
   - 4 cards: Imported Chocolates / Coffee & Espresso / Nuts & Dried Fruit / Bulk Packets
   - Tap → opens WhatsApp with prefilled message: "Hi, I'm interested in [category]"

3. **Bulk packets callout**
   - Dedicated section — this is their actual differentiator per the reviews
   - Gold "Bulk Deal" badge

4. **Why Seagull Mart**
   - 3 trust points, lifted directly from review themes: competitive pricing, friendly staff, wide imported selection
   - These are corroborated by 30+ independent reviews — safe to state as fact

5. **Visit / contact**
   - Address, hours table (placeholder until verified), phone (placeholder until verified)
   - Google Maps iframe embed
   - WhatsApp button repeated

6. **Sticky WhatsApp button**
   - Floating bottom-right, persistent on scroll — this is the highest-converting single element on the page, don't bury the CTA only at top/bottom

---

## 6. Copy guidelines

- Plain, active voice. "Message us on WhatsApp," not "Inquiries can be submitted via WhatsApp."
- No invented superlatives ("best chocolates in Sri Lanka") — stick to what reviews actually support (competitive pricing, good service, wide imported selection)
- No specific prices anywhere until they give you a price list
- Disclaimer line in footer: "Prices on imported items may vary due to market conditions — message us for current pricing."

---

## 7. SEO (carry over from Food Cabin playbook)

- JSON-LD `LocalBusiness` schema — address, phone (once verified), hours (once verified), priceRange
- `sitemap.xml`, canonical tags
- Meta title/description targeting "imported chocolates Galle," "imported sweets Galle," "bulk chocolate Galle"
- Open Graph tags with a real product/storefront photo once available (use a clean placeholder until then)

---

## 8. Image strategy

- v1 mockup: generic stock photos (Unsplash — chocolate shelves, imported snacks), nothing presented as their actual inventory
- Before going live: request 5–10 real photos — shelves, storefront, a few hero products, bulk packet display
- Compress everything through Squoosh/TinyPNG before commit — mobile load speed matters more than image fidelity here

---

## 9. Domain / deployment plan

- Build and deploy to a Netlify preview URL first — do not touch `seagullmart.lk` DNS until they've seen and approved the design
- Once approved: point `seagullmart.lk` DNS to Netlify (A record or CNAME depending on registrar — check what registrar `seagullmart.lk` is on first)
- Keep the old domain registration active under their name — don't let it lapse mid-transition

---

## 10. Build order

1. Scaffold Next.js + Tailwind, static export config
2. Build hero + category strip (the two sections that matter most for the demo)
3. Build remaining sections (bulk callout, trust, visit/contact)
4. Wire WhatsApp deep links with prefilled messages
5. Add Google Maps embed
6. Compress and drop in stock images
7. Deploy to Netlify preview URL
8. Send preview link to shop owner
9. Only after approval: verify phone/hours/card-payment facts directly with them, swap placeholders for real data, add real photos
10. SEO pass (schema, sitemap, meta tags)
11. DNS cutover

---

## 11. Open questions for the shop owner (ask before final launch, not before the demo)

- Confirm phone number for WhatsApp CTA
- Confirm hours
- Do they accept card payments in-store?
- Can they send 5-10 photos of the shop/products?
- Who controls the `seagullmart.lk` domain registrar login, for DNS changes?
