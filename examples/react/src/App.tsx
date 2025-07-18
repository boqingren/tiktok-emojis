import React from "react";
import { TIKTOK_EMOJI_CODES } from "./codes";
import * as Icon from "@tiktok-emojis/react";

type ValueOf<T> = T[keyof T];
type Widget = ValueOf<typeof Icon>

function widget(record: Record<string, Widget>, code: string) {
  const key = code?.charAt(0).toUpperCase() + code.slice(1);
  const result = record[key];
  return result;
}

const widgets = TIKTOK_EMOJI_CODES.map(code => ({ code, widget: widget(Icon, code) }));

export default function App() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
        <h1 style={{ marginTop: 30, marginBottom: 30 }}>
          React Example
        </h1>
        <pre style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 60 }}>
          <code>npm install @tiktok-emojis/react</code>
        </pre>
      </div>
      <div style={{ width: "100%" }}>
        {widgets.map((item, index) => (
          <div key={item.code} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 30 }}>
            <div style={{ display: "flex", justifyContent: "start", alignItems: "center", width: 130 }}>
              {index + 1}. [{item?.code}]
            </div>
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center", width: 130 }}>
              {React.createElement(item.widget, { size: 64 })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
