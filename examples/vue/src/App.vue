<template>
  <div style="width: 100%">
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%">
      <h1 style="margin-top: 30px; margin-bottom: 30px">
        Vue Example
      </h1>
      <pre style="display: flex; justify-content: center; align-items: center; margin-bottom: 60px">
        <code>npm install @tiktok-emojis/vue</code>
      </pre>
    </div>
    <div style="width: 100%">
      <template v-for="(item, index) in widgets" :key="item.code">
        <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 30px">
          <div style="display: flex; justify-content: start; align-items: center; width: 130px">
            {{index + 1}}. [{{item?.code}}]
          </div>
          <div style="display: flex; justify-content: end; align-items: center; width: 130px">
            <component :is="item.widget" :size="64" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TIKTOK_EMOJI_CODES } from "./codes";
import * as Icon from "@tiktok-emojis/vue";

type ValueOf<T> = T[keyof T];
type Widget = ValueOf<typeof Icon>

function widget(record: Record<string, Widget>, code: string) {
  const key = code?.charAt(0).toUpperCase() + code.slice(1);
  const result = record[key];
  return result;
}

const widgets = TIKTOK_EMOJI_CODES.map(code => ({ code, widget: widget(Icon, code) }));

export default defineComponent({
  name: "App",
  setup: () => ({ widgets })
});
</script>
