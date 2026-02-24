// src/design-system/tokens.ts

export const tokens = {
  colors: {
    // Base surfaces
    background: "bg-[#050507]",
    surface: "bg-[#050507]",

    // Text
    textPrimary: "text-white",
    textMuted: "text-white/65",

    // Borders
    border: "border-white/10",

    /* ===============================
       NEON GOLD SYSTEM (LOCKED)
       =============================== */

    neonGold: "text-[#FFD84D]",
    neonGoldStrong: "text-[#FFCC1A]",
    neonGoldGradient:
      "bg-[linear-gradient(135deg,#FFF6C8_0%,#FFE27A_22%,#FFD84D_45%,#FFB800_65%,#FFD84D_82%,#FFF6C8_100%)]",
  },

  spacing: {
    container: "px-6 mx-auto max-w-7xl",
    section: "py-24",
  },

  radius: {
    pill: "rounded-full",
    md: "rounded-lg",
    lg: "rounded-xl",
  },

  shadow: {
    soft: "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
  },

  effects: {
    /* ===============================
       INSPO-ACCURATE LIGHT SYSTEM
       =============================== */

    topLightCore:
      "bg-[linear-gradient(to_bottom,rgba(255,220,90,1)_0%,rgba(255,210,70,0.55)_32%,rgba(0,0,0,0)_68%)]",

    topLightSoft:
      "bg-[linear-gradient(to_bottom,rgba(255,200,60,0.6)_0%,rgba(255,190,50,0.25)_40%,rgba(0,0,0,0)_75%)]",

    topLightWhite:
      "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.25)_22%,rgba(0,0,0,0)_55%)]",

    cornerGlow:
      "bg-[radial-gradient(circle,rgba(255,216,77,0.85)_0%,rgba(255,216,77,0.4)_35%,transparent_72%)]",

    glowTight: "blur-[32px]",
    glowMedium: "blur-[60px]",
    glowWide: "blur-[95px]",

    capsuleGlow:
      "shadow-[0_0_48px_rgba(255,216,77,0.95)]",

    beltGlow:
      "shadow-[0_0_70px_rgba(255,216,77,0.95)]",

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
} as const