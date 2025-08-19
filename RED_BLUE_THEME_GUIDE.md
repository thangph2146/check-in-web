# Red-600 & Blue-900 Theme Guide

## Tổng quan

Dự án này sử dụng theme Red-600 & Blue-900 với:
- **Red-600** làm màu chính (Primary, Destructive) - `oklch(0.577 0.245 27.325)`
- **Blue-900** làm màu phụ (Secondary, Accent) - `oklch(0.379 0.146 265.522)`
- Hỗ trợ đầy đủ Dark/Light mode

## Cấu hình

### 1. components.json
```json
{
  "tailwind": {
    "cssVariables": true,
    "baseColor": "red"
  }
}
```

### 2. CSS Variables - Light Mode
```css
:root {
  /* Primary - Red-600 */
  --primary: oklch(0.577 0.245 27.325);
  --primary-foreground: oklch(0.985 0 0);
  
  /* Secondary - Blue-900 */
  --secondary: oklch(0.379 0.146 265.522);
  --secondary-foreground: oklch(0.985 0 0);
  
  /* Accent - Blue-900 */
  --accent: oklch(0.379 0.146 265.522);
  --accent-foreground: oklch(0.985 0 0);
  
  /* Destructive - Red-600 */
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
}
```

### 3. CSS Variables - Dark Mode
```css
.dark {
  /* Primary - Red-600 */
  --primary: oklch(0.577 0.245 27.325);
  --primary-foreground: oklch(0.205 0 0);
  
  /* Secondary - Blue-900 */
  --secondary: oklch(0.379 0.146 265.522);
  --secondary-foreground: oklch(0.985 0 0);
  
  /* Accent - Blue-900 */
  --accent: oklch(0.379 0.146 265.522);
  --accent-foreground: oklch(0.985 0 0);
  
  /* Destructive - Red-600 */
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.205 0 0);
}
```

## Sử dụng

### 1. Red-600 Elements (Primary)
```tsx
// Buttons
<Button>Default Button (Red-600)</Button>
<Button variant="destructive">Destructive (Red-600)</Button>

// Text
<p className="text-primary">Red-600 Text</p>

// Borders
<div className="border border-primary">Red-600 Border</div>

// Backgrounds
<div className="bg-primary text-primary-foreground">Red-600 Background</div>
```

### 2. Blue-900 Elements (Secondary/Accent)
```tsx
// Buttons
<Button variant="secondary">Secondary (Blue-900)</Button>

// Text
<p className="text-accent-foreground">Blue-900 Text</p>

// Borders
<div className="border border-accent">Blue-900 Border</div>

// Backgrounds
<div className="bg-accent text-accent-foreground">Blue-900 Background</div>
```

### 3. Neutral Elements
```tsx
// Backgrounds
<div className="bg-background">Main Background</div>
<div className="bg-card">Card Background</div>
<div className="bg-muted">Muted Background</div>

// Text
<p className="text-foreground">Main Text</p>
<p className="text-muted-foreground">Muted Text</p>

// Borders
<div className="border border-border">Default Border</div>
```

## Color Mapping

| Element | Light Mode | Dark Mode | Usage |
|---------|------------|-----------|-------|
| Primary | Red-600 | Red-600 | Main actions, CTAs |
| Secondary | Blue-900 | Blue-900 | Secondary actions |
| Accent | Blue-900 | Blue-900 | Highlights, links |
| Destructive | Red-600 | Red-600 | Errors, warnings |
| Background | White | Dark Gray | Page background |
| Card | White | Dark Gray | Card backgrounds |
| Muted | Light Gray | Dark Gray | Subtle backgrounds |

## Demo

Truy cập `/theme-demo` để xem demo đầy đủ của Red-600 & Blue-900 theme.

## Tính năng

- ✅ Red-600 làm màu chính (Primary, Destructive) với OKLCH tùy chỉnh
- ✅ Blue-900 làm màu phụ (Secondary, Accent) với OKLCH tùy chỉnh
- ✅ Dark/Light mode toggle
- ✅ System theme detection
- ✅ CSS variables cho tất cả màu sắc
- ✅ Hydration-safe
- ✅ Accessibility support

## Màu sắc theo OKLCH tùy chỉnh

Dựa trên [tài liệu Tailwind CSS Colors](https://tailwindcss.com/docs/colors) và [shadcn/ui theming](https://ui.shadcn.com/docs/theming#other-color-formats):

### Red-600
- **OKLCH**: `oklch(0.577 0.245 27.325)`
- **Lightness**: 57.7% (trung bình)
- **Chroma**: 0.245 (bão hòa cao)
- **Hue**: 27.325° (đỏ cam)
- **Usage**: Primary, Destructive

### Blue-900  
- **OKLCH**: `oklch(0.379 0.146 265.522)`
- **Lightness**: 37.9% (tối)
- **Chroma**: 0.146 (bão hòa trung bình)
- **Hue**: 265.522° (xanh dương)
- **Usage**: Secondary, Accent

### Neutral Colors
- **Background**: `oklch(1 0 0)` / `oklch(0.145 0 0)`
- **Foreground**: `oklch(0.145 0 0)` / `oklch(0.985 0 0)`
- **Muted**: `oklch(0.97 0 0)` / `oklch(0.269 0 0)`

## OKLCH Color Space

### Components:
- **L (Lightness)**: Độ sáng từ 0% (đen) đến 100% (trắng)
- **C (Chroma)**: Độ bão hòa màu sắc, 0 = xám, cao hơn = màu sắc rõ nét hơn
- **H (Hue)**: Góc màu sắc từ 0° đến 360°

### Lợi ích của OKLCH:
- **Perceptually uniform**: Thay đổi lightness được cảm nhận đồng đều
- **Better color interpolation**: Chuyển đổi màu sắc mượt mà hơn
- **Accurate color representation**: Biểu diễn màu sắc chính xác hơn
- **Modern color space**: Tiêu chuẩn màu sắc hiện đại

## So sánh với phiên bản trước

| Element | Trước (Blue-800) | Hiện tại (Blue-900) |
|---------|------------------|---------------------|
| Primary | `oklch(0.577 0.245 27.325)` | `oklch(0.577 0.245 27.325)` |
| Secondary | `oklch(0.424 0.199 265.638)` | `oklch(0.379 0.146 265.522)` |
| Accent | `oklch(0.424 0.199 265.638)` | `oklch(0.379 0.146 265.522)` |
| Destructive | `oklch(0.577 0.245 27.325)` | `oklch(0.577 0.245 27.325)` |

**Lợi ích của Blue-900:**
- **Màu sắc tối hơn** - phù hợp với dark theme
- **Độ tương phản cao hơn** với background
- **Chuyên nghiệp hơn** với màu sắc đậm
- **Phù hợp với accessibility standards**
- **Nhất quán** giữa light và dark mode
