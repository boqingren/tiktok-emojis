# @tiktok-emojis/root

> **The complete monorepo for TikTok's 46 hidden emoji components. Professional React and Vue 3 libraries with TypeScript support, built with Turborepo for modern web applications.**

**Try it online → [TikTokEmojis.click](https://tiktokemojis.click)**

![All Tiktok Emojis](https://tiktokemojis.click/images/tiktok/emojis/all-tiktok-emojis.webp)

This monorepo contains the complete ecosystem for TikTok's 46 secret emojis, transformed into professional-grade component libraries for modern web development. Built with [Turborepo](https://turbo.build/), it provides a unified development environment for creating, maintaining, and publishing high-quality emoji components across multiple frameworks.

## 🚀 Available Packages

- **[@tiktok-emojis/react](https://github.com/boqingren/tiktok-emojis/tree/main/packages/react)**
- **[@tiktok-emojis/vue](https://github.com/boqingren/tiktok-emojis/tree/main/packages/vue)**

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
<script lang="ts">
import { defineComponent } from "vue";
import { Angel, Happy, Cry, Laugh } from "@tiktok-emojis/vue";

export default defineComponent({
  components: { Angel, Happy, Cry, Laugh }
});
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

| # |  Component | TikTok Code | Meaning |
|:-----------|:-------------|:-------------|:--------|
| 1 |  `<Smile />` | [[smile](https://tiktokemojis.click/tiktok-emojis/smile "Smile TikTok Emoji")] | A subtle pink smiley face that conveys gentle happiness and friendliness. |
| 2 |  `<Happy />` | [[happy](https://tiktokemojis.click/tiktok-emojis/happy "Happy TikTok Emoji")] | An exuberant peach-colored face showing pure joy and extreme excitement. |
| 3 |  `<Angry />` | [[angry](https://tiktokemojis.click/tiktok-emojis/angry "Angry TikTok Emoji")] | A red-faced emoji expressing frustration, anger, or strong displeasure. |
| 4 |  `<Cry />` | [[cry](https://tiktokemojis.click/tiktok-emojis/cry "Cry TikTok Emoji")] | A blue face with streaming tears showing deep sadness or emotional overwhelm. |
| 5 |  `<Embarrassed />` | [[embarrassed](https://tiktokemojis.click/tiktok-emojis/embarrassed "Embarrassed TikTok Emoji")] | A blushing face with rosy cheeks showing embarrassment or bashfulness. |
| 6 |  `<Surprised />` | [[surprised](https://tiktokemojis.click/tiktok-emojis/surprised "Surprised TikTok Emoji")] | Wide-eyed face with open mouth showing shock, surprise, or amazement. |
| 7 |  `<Wronged />` | [[wronged](https://tiktokemojis.click/tiktok-emojis/wronged "Wronged TikTok Emoji")] | A yellow face with sad eyes and finger-pointing gesture showing feeling wronged or unfairly treated. |
| 8 |  `<Shout />` | [[shout](https://tiktokemojis.click/tiktok-emojis/shout "Shout TikTok Emoji")] | An open-mouthed face expressing loud excitement, cheering, or shouting. |
| 9 |  `<Flushed />` | [[flushed](https://tiktokemojis.click/tiktok-emojis/flushed "Flushed TikTok Emoji")] | A red-cheeked face showing embarrassment, shyness, or being flustered. |
| 10 |  `<Yummy />` | [[yummy](https://tiktokemojis.click/tiktok-emojis/yummy "Yummy TikTok Emoji")] | A face with tongue out licking lips, showing something is delicious or desirable. |
| 11 |  `<Complacent />` | [[complacent](https://tiktokemojis.click/tiktok-emojis/complacent "Complacent TikTok Emoji")] | A self-satisfied face with a smug expression showing complacency or smugness. |
| 12 |  `<Drool />` | [[drool](https://tiktokemojis.click/tiktok-emojis/drool "Drool TikTok Emoji")] | A face with drool showing intense desire, hunger, or craving. |
| 13 |  `<Scream />` | [[scream](https://tiktokemojis.click/tiktok-emojis/scream "Scream TikTok Emoji")] | A face with wide eyes and open mouth showing fear, shock, or distress. |
| 14 |  `<Weep />` | [[weep](https://tiktokemojis.click/tiktok-emojis/weep "Weep TikTok Emoji")] | A tearful face showing deep sadness, grief, or emotional pain. |
| 15 |  `<Speechless />` | [[speechless](https://tiktokemojis.click/tiktok-emojis/speechless "Speechless TikTok Emoji")] | A face with hand covering mouth showing shock, disbelief, or being at a loss for words. |
| 16 |  `<Funnyface />` | [[funnyface](https://tiktokemojis.click/tiktok-emojis/funnyface "Funnyface TikTok Emoji")] | A goofy face with exaggerated features showing silliness and humor. |
| 17 |  `<Laughwithtears />` | [[laughwithtears](https://tiktokemojis.click/tiktok-emojis/laughwithtears "Laughwithtears TikTok Emoji")] | A face crying tears of laughter showing something is hilariously funny. |
| 18 |  `<Wicked />` | [[wicked](https://tiktokemojis.click/tiktok-emojis/wicked "Wicked TikTok Emoji")] | A mischievous face with a sly smile showing playful wickedness or scheming. |
| 19 |  `<Facewithrollingeyes />` | [[facewithrollingeyes](https://tiktokemojis.click/tiktok-emojis/facewithrollingeyes "Facewithrollingeyes TikTok Emoji")] | A face with rolling eyes showing annoyance, sarcasm, or exasperation. |
| 20 |  `<Sulk />` | [[sulk](https://tiktokemojis.click/tiktok-emojis/sulk "Sulk TikTok Emoji")] | A pouting face showing sulking, disappointment, or being upset. |
| 21 |  `<Thinking />` | [[thinking](https://tiktokemojis.click/tiktok-emojis/thinking "Thinking TikTok Emoji")] | A thoughtful face with hand on chin showing contemplation or consideration. |
| 22 |  `<Lovely />` | [[lovely](https://tiktokemojis.click/tiktok-emojis/lovely "Lovely TikTok Emoji")] | A face with heart-shaped eyes showing love, admiration, or being smitten. |
| 23 |  `<Greedy />` | [[greedy](https://tiktokemojis.click/tiktok-emojis/greedy "Greedy TikTok Emoji")] | A face with a greedy expression showing desire for more or being materialistic. |
| 24 |  `<Wow />` | [[wow](https://tiktokemojis.click/tiktok-emojis/wow "Wow TikTok Emoji")] | An amazed face with wide eyes and open mouth showing wonder or awe. |
| 25 |  `<Joyful />` | [[joyful](https://tiktokemojis.click/tiktok-emojis/joyful "Joyful TikTok Emoji")] | A radiant face with sparkling eyes showing pure joy and happiness. |
| 26 |  `<Hehe />` | [[hehe](https://tiktokemojis.click/tiktok-emojis/hehe "Hehe TikTok Emoji")] | A face with a mischievous grin showing playful humor or light teasing. |
| 27 |  `<Slap />` | [[slap](https://tiktokemojis.click/tiktok-emojis/slap "Slap TikTok Emoji")] | A face with raised hand showing frustration or the urge to slap something. |
| 28 |  `<Tears />` | [[tears](https://tiktokemojis.click/tiktok-emojis/tears "Tears TikTok Emoji")] | A face with tears showing sadness, emotional release, or being moved. |
| 29 |  `<Stun />` | [[stun](https://tiktokemojis.click/tiktok-emojis/stun "Stun TikTok Emoji")] | A stunned face showing shock, disbelief, or being completely taken aback. |
| 30 |  `<Cute />` | [[cute](https://tiktokemojis.click/tiktok-emojis/cute "Cute TikTok Emoji")] | A sweet face with an adorable smile showing cuteness or endearment. |
| 31 |  `<Blink />` | [[blink](https://tiktokemojis.click/tiktok-emojis/blink "Blink TikTok Emoji")] | A winking face with one eye closed showing playfulness or shared understanding. |
| 32 |  `<Disdain />` | [[disdain](https://tiktokemojis.click/tiktok-emojis/disdain "Disdain TikTok Emoji")] | A face with raised eyebrow showing disdain, disapproval, or skepticism. |
| 33 |  `<Astonish />` | [[astonish](https://tiktokemojis.click/tiktok-emojis/astonish "Astonish TikTok Emoji")] | A face with wide eyes and raised eyebrows showing astonishment or amazement. |
| 34 |  `<Rage />` | [[rage](https://tiktokemojis.click/tiktok-emojis/rage "Rage TikTok Emoji")] | A face with an extremely angry expression showing intense rage or fury. |
| 35 |  `<Cool />` | [[cool](https://tiktokemojis.click/tiktok-emojis/cool "Cool TikTok Emoji")] | A face wearing sunglasses showing coolness, confidence, or being unfazed. |
| 36 |  `<Excited />` | [[excited](https://tiktokemojis.click/tiktok-emojis/excited "Excited TikTok Emoji")] | A face with sparkling eyes and big smile showing excitement and anticipation. |
| 37 |  `<Proud />` | [[proud](https://tiktokemojis.click/tiktok-emojis/proud "Proud TikTok Emoji")] | A face with a proud expression showing satisfaction with an achievement. |
| 38 |  `<Smileface />` | [[smileface](https://tiktokemojis.click/tiktok-emojis/smileface "Smileface TikTok Emoji")] | A face with a big, warm smile showing happiness and friendliness. |
| 39 |  `<Evil />` | [[evil](https://tiktokemojis.click/tiktok-emojis/evil "Evil TikTok Emoji")] | A face with a devilish grin showing mischief, plotting, or playful evil. |
| 40 |  `<Angel />` | [[angel](https://tiktokemojis.click/tiktok-emojis/angel "Angel TikTok Emoji")] | A face with a halo showing innocence, purity, or pretending to be good. |
| 41 |  `<Laugh />` | [[laugh](https://tiktokemojis.click/tiktok-emojis/laugh "Laugh TikTok Emoji")] | A face laughing heartily showing joy, amusement, or finding something funny. |
| 42 |  `<Pride />` | [[pride](https://tiktokemojis.click/tiktok-emojis/pride "Pride TikTok Emoji")] | A face showing pride and self-satisfaction with achievements or qualities. |
| 43 |  `<Nap />` | [[nap](https://tiktokemojis.click/tiktok-emojis/nap "Nap TikTok Emoji")] | A sleepy face with closed eyes showing tiredness or desire to sleep. |
| 44 |  `<Loveface />` | [[loveface](https://tiktokemojis.click/tiktok-emojis/loveface "Loveface TikTok Emoji")] | A face with heart-shaped eyes showing love, infatuation, or being smitten. |
| 45 |  `<Awkward />` | [[awkward](https://tiktokemojis.click/tiktok-emojis/awkward "Awkward TikTok Emoji")] | A face with a nervous smile showing awkwardness, discomfort, or social unease. |
| 46 |  `<Shock />` | [[shock](https://tiktokemojis.click/tiktok-emojis/shock "Shock TikTok Emoji")] | A face with a shocked expression showing surprise, disbelief, or being stunned. |

[**👉 See complete emoji list and documentation**](https://tiktokemojis.click).

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

This project is created by TikTok enthusiasts for educational and development purposes. All TikTok emoji designs remain the property of TikTok/ByteDance. This monorepo provides SVG implementations for use in web applications.

**Not affiliated with TikTok or ByteDance Corporation.**

**Built with ❤️ for the web development community**

Transform your applications with TikTok's exclusive emoji collection. Visit [TikTokEmojis.click](https://tiktokemojis.click) for live demos, interactive examples, and comprehensive documentation.

*Keywords: TikTok emojis, TikTok hidden emojis, TikTok secret emojis, React components, Vue 3 components, TypeScript library, monorepo, Turborepo, SVG components, emoji components, TikTok emoticons, web development, frontend libraries*
