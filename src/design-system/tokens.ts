// src/design-system/tokens.ts

export const tokens = {
  colors: {
    background: "bg-[#050507]",

    textPrimary: "text-white",
    textMuted: "text-white/65",

    /* ===============================
       NEON GOLD SYSTEM (LOCKED)
       =============================== */

    // Primary gold text
    neonGold: "text-[#FFD84D]",

    // Strong highlight gold (CTAs / accents)
    neonGoldStrong: "text-[#FFCC1A]",

    // Premium gold gradient (buttons, belts, capsules)
    neonGoldGradient:
      "bg-[linear-gradient(135deg,#FFF6C8_0%,#FFE27A_22%,#FFD84D_45%,#FFB800_65%,#FFD84D_82%,#FFF6C8_100%)]",
  },

  effects: {
    /* ===============================
       INSPO-ACCURATE LIGHT SYSTEM
       =============================== */

    // TOP CONE LIGHT — narrow, intense, directional
    topLightCore:
      "bg-[linear-gradient(to_bottom,rgba(255,220,90,1)_0%,rgba(255,210,70,0.55)_32%,rgba(0,0,0,0)_68%)]",

    // TOP CONE SOFT SPILL — wide atmospheric diffusion
    topLightSoft:
      "bg-[linear-gradient(to_bottom,rgba(255,200,60,0.6)_0%,rgba(255,190,50,0.25)_40%,rgba(0,0,0,0)_75%)]",

    // WHITE HOT CORE (adds premium punch like inspo)
    topLightWhite:
      "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.25)_22%,rgba(0,0,0,0)_55%)]",

    // Bottom corner glows (anchoring depth)
    cornerGlow:
      "bg-[radial-gradient(circle,rgba(255,216,77,0.85)_0%,rgba(255,216,77,0.4)_35%,transparent_72%)]",

    /* ===============================
       GLOW / SHADOW STRENGTH
       =============================== */

    glowTight: "blur-[32px]",
    glowMedium: "blur-[60px]",
    glowWide: "blur-[95px]",

    capsuleGlow:
      "shadow-[0_0_48px_rgba(255,216,77,0.95)]",

    beltGlow:
      "shadow-[0_0_70px_rgba(255,216,77,0.95)]",

    // CTA hover-only glow (IMPORTANT)
    ctaHoverGlow:
      "hover:shadow-[0_0_55px_rgba(255,216,77,0.9)]",
  },

  typography: {
    eyebrow:
      "text-[11px] tracking-[0.34em] uppercase font-medium",

    h1:
      "text-[14px] tracking-[0.22em] font-medium",

    display:
      "text-[3.4rem] md:text-[4.1rem] leading-[0.96] font-bold italic",

    body:
      "text-[14px] leading-relaxed",

    serif:
      "font-playfair",
  },

  radius: {
    pill: "rounded-full",
    md: "rounded-lg",
  },
} as const