# @tiktok-emojis/root

> **The complete monorepo for TikTok's 46 hidden emoji components. Professional React and Vue 3 libraries with TypeScript support, built with Turborepo for modern web applications.**

**Try it online → [TiktokEmojis.click](https://tiktokemojis.click)**

![All Tiktok Emojis](./images//all-tiktok-emojis.webp)

This monorepo contains the complete ecosystem for TikTok's 46 secret emojis, transformed into professional-grade component libraries for modern web development. Built with [Turborepo](https://turbo.build/), it provides a unified development environment for creating, maintaining, and publishing high-quality emoji components across multiple frameworks.

### 🚀 Available Packages

- **[@tiktok-emojis/react](./packages/react)**
- **[@tiktok-emojis/vue](./packages/vue)**

## ✨ Key Features

- 🎨 **Complete TikTok Emoji Collection**: All 46 hidden TikTok emojis (`[smile]`, `[happy]`, `[angry]`, etc.)
- ⚡ **High-Performance Monorepo**: Built with Turborepo for lightning-fast builds and development
- 🔧 **Full TypeScript Support**: 100% TypeScript with comprehensive type definitions
- 📦 **Tree-Shakable Components**: Import only what you need for optimal bundle sizes
- 🌐 **SSR Compatible**: Works seamlessly with Next.js, Nuxt 3, and other SSR frameworks
- 🎯 **Framework Agnostic**: Choose from React or Vue 3 implementations
- 🚀 **Zero Runtime Dependencies**: Lightweight SVG components with no external dependencies
- 📱 **Responsive Design**: Customizable sizing with `width`, `height`, and `size` props

## 🏗️ Monorepo Structure

```bash
@tiktok-emojis/root/
├── examples/
│   ├── react/           # React example
│   └── vue/             # Vue 3 example
├── packages/
│   ├── react/           # React components (@tiktok-emojis/react)
│   └── vue/             # Vue 3 components (@tiktok-emojis/vue)
├── scripts/             # Build and development scripts
├── turbo.json           # Turborepo configuration
└── package.json         # Workspace configuration
```

## 🚀 Quick Start

### For React Projects

```bash
pnpm add @tiktok-emojis/react
```

```tsx
import React from "react";
import { Angel, Happy, Cry, Laugh } from "@tiktok-emojis/react";

export default function App() {
  return (
    <div>
      <Angel size={32} />
      <Happy size={48} />
      <Cry width={24} height={24} />
      <Laugh size="6rem" />
    </div>
  );
}
```

### For Vue 3 Projects

```bash
pnpm add @tiktok-emojis/vue
```

```html
<script setup lang="ts">
import { Angel, Happy, Cry, Laugh } from "@tiktok-emojis/vue";
</script>

<template>
  <div>
    <Angel :size="32" />
    <Happy :size="48" />
    <Cry :width="24" :height="24" />
    <Laugh size="6rem" />
  </div>
</template>
```

## 🎨 Complete Emoji Collection

All 46 TikTok hidden emojis are available in both React and Vue 3 versions:

| # |  Component | TikTok Code | Description |
|:-----------|:-------------|:-------------|:--------|
| 1 |  `<Smile />` | `[smile]` | A subtle pink smiley face that conveys gentle happiness and friendliness. |
| 2 |  `<Happy />` | `[happy]` | An exuberant peach-colored face showing pure joy and extreme excitement. |
| 3 |  `<Angry />` | `[angry]` | A red-faced emoji expressing frustration, anger, or strong displeasure. |
| 4 |  `<Cry />` | `[cry]` | A blue face with streaming tears showing deep sadness or emotional overwhelm. |
| 5 |  `<Embarrassed />` | `[embarrassed]` | A blushing face with rosy cheeks showing embarrassment or bashfulness. |
| 6 |  `<Surprised />` | `[surprised]` | Wide-eyed face with open mouth showing shock, surprise, or amazement. |
| 7 |  `<Wronged />` | `[wronged]` | A yellow face with sad eyes and finger-pointing gesture showing feeling wronged or unfairly treated. |
| 8 |  `<Shout />` | `[shout]` | An open-mouthed face expressing loud excitement, cheering, or shouting. |
| 9 |  `<Flushed />` | `[flushed]` | A red-cheeked face showing embarrassment, shyness, or being flustered. |
| 10 |  `<Yummy />` | `[yummy]` | A face with tongue out licking lips, showing something is delicious or desirable. |
| 11 |  `<Complacent />` | `[complacent]` | A self-satisfied face with a smug expression showing complacency or smugness. |
| 12 |  `<Drool />` | `[drool]` | A face with drool showing intense desire, hunger, or craving. |
| 13 |  `<Scream />` | `[scream]` | A face with wide eyes and open mouth showing fear, shock, or distress. |
| 14 |  `<Weep />` | `[weep]` | A tearful face showing deep sadness, grief, or emotional pain. |
| 15 |  `<Speechless />` | `[speechless]` | A face with hand covering mouth showing shock, disbelief, or being at a loss for words. |
| 16 |  `<Funnyface />` | `[funnyface]` | A goofy face with exaggerated features showing silliness and humor. |
| 17 |  `<Laughwithtears />` | `[laughwithtears]` | A face crying tears of laughter showing something is hilariously funny. |
| 18 |  `<Wicked />` | `[wicked]` | A mischievous face with a sly smile showing playful wickedness or scheming. |
| 19 |  `<Facewithrollingeyes />` | `[facewithrollingeyes]` | A face with rolling eyes showing annoyance, sarcasm, or exasperation. |
| 20 |  `<Sulk />` | `[sulk]` | A pouting face showing sulking, disappointment, or being upset. |
| 21 |  `<Thinking />` | `[thinking]` | A thoughtful face with hand on chin showing contemplation or consideration. |
| 22 |  `<Lovely />` | `[lovely]` | A face with heart-shaped eyes showing love, admiration, or being smitten. |
| 23 |  `<Greedy />` | `[greedy]` | A face with a greedy expression showing desire for more or being materialistic. |
| 24 |  `<Wow />` | `[wow]` | An amazed face with wide eyes and open mouth showing wonder or awe. |
| 25 |  `<Joyful />` | `[joyful]` | A radiant face with sparkling eyes showing pure joy and happiness. |
| 26 |  `<Hehe />` | `[hehe]` | A face with a mischievous grin showing playful humor or light teasing. |
| 27 |  `<Slap />` | `[slap]` | A face with raised hand showing frustration or the urge to slap something. |
| 28 |  `<Tears />` | `[tears]` | A face with tears showing sadness, emotional release, or being moved. |
| 29 |  `<Stun />` | `[stun]` | A stunned face showing shock, disbelief, or being completely taken aback. |
| 30 |  `<Cute />` | `[cute]` | A sweet face with an adorable smile showing cuteness or endearment. |
| 31 |  `<Blink />` | `[blink]` | A winking face with one eye closed showing playfulness or shared understanding. |
| 32 |  `<Disdain />` | `[disdain]` | A face with raised eyebrow showing disdain, disapproval, or skepticism. |
| 33 |  `<Astonish />` | `[astonish]` | A face with wide eyes and raised eyebrows showing astonishment or amazement. |
| 34 |  `<Rage />` | `[rage]` | A face with an extremely angry expression showing intense rage or fury. |
| 35 |  `<Cool />` | `[cool]` | A face wearing sunglasses showing coolness, confidence, or being unfazed. |
| 36 |  `<Excited />` | `[excited]` | A face with sparkling eyes and big smile showing excitement and anticipation. |
| 37 |  `<Proud />` | `[proud]` | A face with a proud expression showing satisfaction with an achievement. |
| 38 |  `<Smileface />` | `[smileface]` | A face with a big, warm smile showing happiness and friendliness. |
| 39 |  `<Evil />` | `[evil]` | A face with a devilish grin showing mischief, plotting, or playful evil. |
| 40 |  `<Angel />` | `[angel]` | A face with a halo showing innocence, purity, or pretending to be good. |
| 41 |  `<Laugh />` | `[laugh]` | A face laughing heartily showing joy, amusement, or finding something funny. |
| 42 |  `<Pride />` | `[pride]` | A face showing pride and self-satisfaction with achievements or qualities. |
| 43 |  `<Nap />` | `[nap]` | A sleepy face with closed eyes showing tiredness or desire to sleep. |
| 44 |  `<Loveface />` | `[loveface]` | A face with heart-shaped eyes showing love, infatuation, or being smitten. |
| 45 |  `<Awkward />` | `[awkward]` | A face with a nervous smile showing awkwardness, discomfort, or social unease. |
| 46 |  `<Shock />` | `[shock]` | A face with a shocked expression showing surprise, disbelief, or being stunned. |

[**→ See complete emoji list and documentation**](https://tiktokemojis.click).

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git for version control

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/boqingren/tiktok-emojis.git
cd ./tiktok-emojis

# Install dependencies
pnpm install

# Start development mode
pnpm dev

# Build all packages
pnpm build
```

### Monorepo Commands

```bash
# Develop the entire monorepo with hot reload.
pnpm dev

# Build all packages and examples.
pnpm build

# Develop only the example projects.
pnpm dev:examples

#  Build only the example projects.
pnpm build:examples

# Develop only the core packages (`react`, `vue`, etc.).
pnpm dev:packages

# Build only the core packages.
pnpm build:packages
```

## 📊 Performance & Bundle Size

- **Individual Components**: ~2-3KB gzipped per component.
- **Tree Shaking**: Import only the components you use.
- **Zero Dependencies**: No runtime dependencies beyond React/Vue.
- **SVG Optimization**: All emojis are optimized vector graphics.
- **TypeScript Ready**: Full type safety and autocompletion.

## 🌐 Framework Support

### React Support
- ✅ React 16.8+ (Hooks support)
- ✅ Next.js (App Router & Pages Router)
- ✅ Remix
- ✅ Gatsby
- ✅ Create React App
- ✅ Vite + React

### Vue Support
- ✅ Vue 3.0+
- ✅ Nuxt 3
- ✅ Vite + Vue
- ✅ Vue CLI
- ✅ Composition API
- ✅ `<script setup>` syntax

## 🔧 TypeScript Support

Both packages are built with TypeScript and provide comprehensive type definitions:

```typescript
interface TikTokEmojiProps {
  width?: string | number;   // Custom width
  height?: string | number;  // Custom height
  size?: string | number;    // Sets both width and height
}
```

## 📖 Documentation & Resources

- 📚 **Complete Documentation**: [https://tiktokemojis.click/docs](https://tiktokemojis.click/docs)
- 🎮 **Interactive Demo**: [https://tiktokemojis.click](https://tiktokemojis.click)
- 📖 **React Documentation**: [https://tiktokemojis.click/docs/react](https://tiktokemojis.click/docs/react)
- 📖 **Vue Documentation**: [https://tiktokemojis.click/docs/vue](https://tiktokemojis.click/docs/vue)
- 🐛 **Report Issues**: [https://github.com/boqingren/tiktok-emojis/issues](https://github.com/boqingren/tiktok-emojis/issues)

## 🤝 Contributing

We welcome contributions!

- Code style and standards
- Development workflow
- Testing requirements
- Pull request process
- Issue reporting

## 📋 Requirements

- **Node.js**: 18.0.0 or higher
- **Package Manager**: npm, pnpm, or yarn
- **TypeScript**: 4.0+ (optional but recommended)

## 🏢 Built With

- [Turborepo](https://turbo.build/): High-performance build system
- [TypeScript](https://www.typescriptlang.org/): Type-safe development
- [tsup](https://tsup.egoist.dev/): TypeScript bundler

## 📄 License

MIT.

## 🌟 Community & Support

- 📧 **Email**: boqingren@hotmail.com

## ⚠️ Disclaimer

This project is created by TikTok fans for educational and development purposes. All TikTok emoji designs remain the property of TikTok/ByteDance. This monorepo provides SVG implementations for use in web applications.

**Not affiliated with TikTok or ByteDance Corporation.**

**Built with ❤️ for the web development community**

Transform your applications with TikTok's exclusive emoji collection. Visit [TiktokEmojis.click](https://tiktokemojis.click) for live demos, interactive examples, and comprehensive documentation.

*Keywords: TikTok emojis, TikTok hidden emojis, TikTok secret emojis, React components, Vue 3 components, TypeScript library, monorepo, Turborepo, SVG components, emoji components, TikTok emoticons, web development, frontend libraries*
