# Color Migration Script
# This document lists all color replacements needed for remaining pages

## Common Replacements for ALL Pages

### Primary Red Colors
```
#991b1b → var(--color-primary)
#8b0000 → var(--color-primary-darker)
#7f1d1d → var(--color-primary-dark)
#a52a2a → var(--color-primary-brown)
#c41e3a → var(--color-primary-crimson)
```

### Text Colors
```
#333 → var(--color-text-primary)
#444 → var(--color-text-medium)
#555 → var(--color-text-secondary)
#666 → var(--color-text-tertiary)
#888 → var(--color-text-muted)
#999 → var(--color-text-light-gray)
#222 → var(--color-text-darker)
#1a1a1a → var(--color-text-dark)
#1e293b → var(--color-slate-dark)
#64748b → var(--color-slate)
#94a3b8 → var(--color-slate-light)
white → var(--color-text-light)
```

### Background Colors
```
#ffffff → var(--color-bg)
#f8f9fa → var(--color-bg-gray)
#f9f9f9 → var(--color-bg-light)
#fef5f5 → var(--color-bg-pink)
#f8fafc → var(--color-bg-slate)
#f1f5f9 → var(--color-bg-slate-light)
#e0e0e0 → var(--color-bg-medium-gray)
```

### Border Colors
```
#ddd → var(--color-border)
#f0f0f0 → var(--color-border-light)
#e2e8f0 → var(--color-border-slate)
#f1f5f9 → var(--color-border-slate-light)
#cbd5e1 → var(--color-border-slate-medium)
```

### Gold/Yellow
```
#ffd700 → var(--color-gold)
#ffeb3b → var(--color-secondary)
```

### Green (for Services pages)
```
#008f3d → var(--color-service-green)
#006b2e → var(--color-service-green-dark)
rgba(0, 143, 61, 0.1) → var(--color-service-green-10)
rgba(0, 143, 61, 0.3) → var(--color-service-green-30)
#dcb315 → var(--color-service-gold)
```

### Gradients
```
linear-gradient(135deg, #8b0000, #c41e3a) → var(--gradient-primary)
linear-gradient(135deg, #8b0000 0%, #a52a2a 50%, #c41e3a 100%) → var(--gradient-hero)
linear-gradient(90deg, #8b0000, #ffd700) → var(--gradient-accent)
linear-gradient(135deg, #1e293b, #334155) → var(--gradient-slate)
linear-gradient(135deg, #f8f9fa 0%, #fef5f5 100%) → var(--gradient-bg)
```

### Shadows
```
0 2px 10px rgba(139, 0, 0, 0.1) → var(--shadow-sm)
0 4px 20px rgba(139, 0, 0, 0.15) → var(--shadow-md)
0 8px 30px rgba(139, 0, 0, 0.2) → var(--shadow-lg)
0 10px 40px rgba(139, 0, 0, 0.25) → var(--shadow-xl)
```

### Opacity Variants
```
rgba(139, 0, 0, 0.1) → var(--color-primary-10)
rgba(139, 0, 0, 0.2) → var(--color-primary-20)
rgba(139, 0, 0, 0.3) → var(--color-primary-30)
rgba(139, 0, 0, 0.4) → var(--color-primary-40)
rgba(255, 255, 255, 0.9) → var(--color-white-90)
rgba(255, 255, 255, 0.95) → var(--color-white-95)
rgba(0, 0, 0, 0.7) → var(--color-black-70)
```

## Status

✅ Completed:
- Recruitment.module.css
- Insights.module.css

🔄 Ready to migrate:
- Career.module.css
- Tenders.module.css
- OngoingProjects.module.css
- UpcomingProjects.module.css
- Downloads.module.css
- Services.module.css
- ServicesSubPage.module.css
- About.module.css
- Contact.module.css
- Products.module.css
