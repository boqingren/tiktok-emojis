# @tiktok-emojis/vue

> **The complete collection of 46 hidden TikTok emojis, from `[smile]` to `[loveface]`, as lightweight SVG components for Vue 3. Perfect for chats, comments, and social features in any Vue 3 project.**

**Try it online → [TikTokEmojis.click](https://tiktokemojis.click)**

![All Tiktok Emojis](https://tiktokemojis.click/images/tiktok/emojis/all-tiktok-emojis.webp)

## 🎯 Why @tiktok-emojis/vue?

Transform your Vue 3 applications with TikTok's exclusive hidden emojis! This library provides all 46 secret TikTok emoticons as high-quality, tree-shakable SVG components, bringing the fun and expressiveness of TikTok's unique emoji system to your web projects.

### ✨ Key Features

- 🎨 **Complete TikTok Emoji Collection**: All 46 hidden TikTok emojis included.
- ⚡ **Lightweight & Tree-shakable**: Only bundle the components you use.
- 🔧 **Fully Typed**: Built with TypeScript for excellent developer experience.
- 🌐 **SSR Compatible**: Works seamlessly with Nuxt 3 and other SSR frameworks.
- 📱 **Responsive**: Customizable size with `width`, `height`, and `size` props.
- 🎯 **Vue 3 Only**: Designed specifically for Vue 3 with Composition API support.
- 🚀 **Zero Dependencies**: No external dependencies beyond Vue 3.

## 📦 Installation

```bash
npm install @tiktok-emojis/vue

yarn add @tiktok-emojis/vue

pnpm add @tiktok-emojis/vue
```

## 🚀 Quick Start

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

## 📚 Usage Examples

### Basic Usage

```html
<script lang="ts">
import { defineComponent } from "vue";
import { Smile, Angry, Wow } from "@tiktok-emojis/vue";

export default defineComponent({
  components: { Smile, Angry, Wow }
});
</script>

<template>
  <div>
    <!-- Default size (24px) -->
    <Smile />

    <!-- Custom size -->
    <Angry :size="48" />

    <!-- Custom width and height -->
    <Wow :width="32" :height="32" />
  </div>
</template>
```

### Individual Component Import

For optimal bundle size, import components individually:

```html
<script lang="ts">
import { defineComponent } from "vue";
import { Angel } from "@tiktok-emojis/vue/angel";
import { Happy } from "@tiktok-emojis/vue/happy";
import { Cry } from "@tiktok-emojis/vue/cry";

export default defineComponent({
  components: { Angel, Happy, Cry }
});
</script>

<template>
  <div>
    <Angel :size="32" />
    <Happy :size="48" />
    <Cry :size="24" />
  </div>
</template>
```

### Dynamic Component Loading

```html
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import * as TikTokEmojis from "@tiktok-emojis/vue";

type ValueOf<T> = T[keyof T];
type Component = ValueOf<typeof TikTokEmojis>;

function resolve(record: Record<string, Component>, code: string) {
  const key = code.charAt(0).toUpperCase() + code.slice(1);
  const result = record[key];
  return result;
}

export default defineComponent({
  setup() {
    const selected = ref("Smile");
    const element = computed(() => resolve(TikTokEmojis, selected.value));
    return { resolve, selected, element };
  }
});
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center;">
    <select v-model="selected">
      <option value="Smile">Smile</option>
      <option value="Happy">Happy</option>
      <option value="Angry">Angry</option>
    </select>
    <div style="margin-left: 50px;">
      <component :is="element" :size="64" />
    </div>
  </div>
</template>
```

## 🎨 Available Components

All 46 TikTok hidden emojis are available as Vue 3 components:

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

## 🔧 Component Props

All TikTok emoji components accept the following props:

```tsx
interface TikTokEmojiProps {
  width?: string | number;   // Custom width
  height?: string | number;  // Custom height
  size?: string | number;    // Sets both width and height
}
```

### Examples

```html
<script lang="ts">
import { defineComponent } from "vue";
import { Smile, Happy, Cry, Laugh, Angel } from "@tiktok-emojis/vue";

export default defineComponent({
  components: { Smile, Happy, Cry, Laugh, Angel }
});
</script>

<template>
  <div>
    <!-- Using size prop (recommended) -->
    <Smile :size="32" />
    <Happy size="2rem" />

    <!-- Using width and height individually -->
    <Cry :width="24" :height="24" />
    <Laugh width="1.5em" height="1.5em" />

    <!-- Default size (24px) if no props provided -->
    <Angel />
  </div>
</template>
```

## 🌐 SSR Support

`@tiktok-emojis/vue` is fully compatible with Server-Side Rendering frameworks:

### Nuxt 3

```html
<script lang="ts">
import { defineComponent } from "vue";
import { Angel, Happy } from "@tiktok-emojis/vue";

export default defineComponent({
  components: { Angel, Happy }
});
</script>

<template>
  <div>
    <h1>Welcome to my app!</h1>
    <Angel :size="48" />
    <Happy :size="32" />
  </div>
</template>
```

## 🎯 Best Practices

### Performance Optimization

1. **Use individual imports** for better tree-shaking:
```html
<script lang="ts">
// ✅ Good: only imports what you need
import { Smile } from "@tiktok-emojis/vue/smile";

// ❌ Avoid: imports the entire library
import { Smile } from "@tiktok-emojis/vue";
</script>
```

2. **Lazy load components** for better performance:
```html
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

const Smile = defineAsyncComponent(() => import("@tiktok-emojis/vue/smile"));

export default defineComponent({
  components: { Smile }
});
</script>

<template>
  <Suspense>
    <template #default>
      <Smile :size="32" />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
```

## 🔧 TypeScript Support

This library is built with TypeScript and provides full type safety:

```html
<script lang="ts">
import { defineComponent } from "vue";
import { Angel, Happy } from "@tiktok-emojis/vue";

export default defineComponent({
  components: { Angel, Happy }
});
</script>

<template>
  <div>
    <Angel :size="32" />      <!-- ✅ Valid -->
    <Happy size="2rem" />     <!-- ✅ Valid -->
    <Angel size="invalid" />  <!-- ❌ Error -->
  </div>
</template>
```

## 📋 Requirements

- Vue >=3.0.0
- TypeScript 4.0+ (optional, but recommended)

## 📄 License

MIT.

## 🚀 Related Packages

- **[@tiktok-emojis/react](https://www.npmjs.com/package/@tiktok-emojis/react)**: React version.

## 🌟 Community & Support

- 📖 **Documentation**: [https://tiktokemojis.click/docs/vue](https://tiktokemojis.click/docs/vue)
- 🌐 **Official Website**: [https://tiktokemojis.click](https://tiktokemojis.click)
- 🐛 **Report Issues**: [https://github.com/boqingren/tiktok-emojis/issues](https://github.com/boqingren/tiktok-emojis/issues)

## ⚠️ Disclaimer

This project is created by TikTok enthusiasts for the purpose of showcasing the 46 hidden TikTok emojis in Vue 3 applications.
We only provide the original emoji images converted to SVG components; no additional information or assets are distributed.
All TikTok emoji images remain the property of TikTok.
This project and the website [TikTokEmojis.click](https://tiktokemojis.click) are not affiliated with, endorsed by, or officially associated with the TikTok app or ByteDance Corporation.

**Made with ❤️ for the Vue 3 community**

Transform your Vue 3 applications with TikTok's exclusive emoji collection. Visit [TikTokEmojis.click](https://tiktokemojis.click) for live demos, interactive examples, and comprehensive documentation.

*Keywords: TikTok emojis, TikTok hidden emojis, TikTok secret emojis, Vue 3 components, TikTok emoticons, TikTok sticker components, SVG components, TikTok emoji SVG, Vue emoji library, TikTok emoji codes*
