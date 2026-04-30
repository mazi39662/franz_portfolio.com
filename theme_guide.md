# 🗞️ THE PORTFOLIO CHRONICLE: Design System Guide

This document outlines the core design philosophy, visual language, and technical specifications for the **Terence Franz Portfolio** (2025 Edition).

---

## 🎨 1. Design Philosophy: "Maximalist Brutalism"
The theme is a high-density digital magazine (Zine) style designed to eliminate "empty space" through information-rich clusters and chaotic but intentional layouts.

*   **Zero White Space**: Every pixel should serve a purpose (data, icon, sticker, or texture).
*   **Tactile Layers**: Elements should look like they are pasted, clipped, or taped onto the page.
*   **Dynamic Motion**: Use of infinite tickers and swapping elements to keep the "digital paper" alive.
*   **Brutal Contrast**: Sharp edges, thick borders, and high-contrast monochrome tones.

---

## 🔠 2. Typography
A curated mix of four distinct typefaces creates the "Editorial Chaos" look.

| Font Name | Role | Feel | CSS Usage |
| :--- | :--- | :--- | :--- |
| **Archivo Black** | Headlines / Badges | Loud, Industrial | `font-family: 'Archivo Black';` |
| **Space Grotesk** | UI / Body / Navigation | Modern, Technical | `font-family: 'Space Grotesk';` |
| **Playfair Display** | Accent Quotes / Manifesto | Elegant, Editorial | `font-family: 'Playfair Display';` |
| **UnifrakturMaguntia** | Gothic Accents | Historical, Edgy | `font-family: 'UnifrakturMaguntia';` |

---

## 🎨 3. Color Palette
A strict monochrome base with a singular high-energy accent.

| Color | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| **Paper White** | `#FFFFFF` | Backgrounds / Stickers | Main surfaces |
| **Ink Black** | `#000000` | Borders / Text / Buttons | Structure & readable text |
| **Editorial Gray** | `#666666` | Secondary Text / Meta | Sub-headings, dates |
| **Electric Cyan** | `#007BFF` | Interaction / Status | Buttons, hover, status dots |

---

## 📐 4. Structural Components

### A. The "Sticker" System
Elements like tech logos and status badges should use:
*   `background: #fff;`
*   `border: 2px solid #000;`
*   `box-shadow: 4px 4px 0 #000;`
*   `transform: rotate(random deg);` (e.g., `-3deg` to `+5deg`)

### B. The Grid Framework
The layout uses a 2-column or 3-column CSS Grid with **thick borders** (`3px solid black`) separating major blocks. The maximum container width is strictly **1200px**.
*   **Sticky Sidebar**: Primary navigation and profile blocks use `position: sticky; top: 20px;` to remain visible during long-form reading.
*   **Hero**: Dominates the top section with overlapping frames and vertically centered content.
*   **The Ticker**: A full-width infinite scrolling "news wire" separating sections.

### C. Texture & Background
The body background isn't plain white; it uses a multi-layered procedural texture:
1.  **Radial Dots**: `radial-gradient(#aaa 1px, transparent 1px)` (Grain/Paper texture)
2.  **Grid Lines**: Subtle 60px/30px linear gradients to simulate blueprint or newsprint grid.

---

## ⚡ 5. Interaction Rules
*   **Hover States**: Buttons/Links should invert colors or shift to the **Electric Cyan** accent.
*   **Translate Effect**: Interactive stickers should shift `-2px, -2px` on hover to simulate "lifting" off the page.
*   **Z-Index Management**: Floating background stickers MUST stay at `z-index: -1` to ensure they never overlap text or active UI components. The main content wrapper stays at `z-index: 1`.

---

## 🛠️ 6. Technical Stack
*   **Icons**: FontAwesome 6 (Brand & Solid sets).
*   **Layout**: CSS Grid & Flexbox.
*   **Animations**: CSS Keyframes (`ticker`, `fade-in`).
*   **Logic**: Vanilla JavaScript for dynamic group swapping and date formatting.

---

> [!IMPORTANT]
> **Rule of Thumb**: If a section feels "empty," add a rotated tech icon, a dashed line (`✂`), or a meta-data badge (Volume/Issue/Page Number) to fill the void.
