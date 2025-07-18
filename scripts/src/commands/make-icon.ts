import fs from "fs";
import path from "path";
import parse from "style-to-object";
import format from "html-format";
import { camelCase } from "lodash-es";
import { TIKTOK_EMOJI_CODES } from "@/constants/tiktok-emoji-codes";

const ROOT_PATH = path.resolve(__dirname, "../../../");
const MATERIALS_PATH = path.resolve(ROOT_PATH, "./materials");
const PACKAGES_PATH = path.resolve(ROOT_PATH, "./packages");
const REACT_TARGET_PATH = path.resolve(PACKAGES_PATH, "./react/src");
const VUE_TARGET_PATH = path.resolve(PACKAGES_PATH, "./vue/src");
const VIEW_BOX_REGEX = /viewBox="([^"]*)"/;
const CDATA_REGEX = /<!\[CDATA\[(.*?)\]\]>/s;
const SEGMENT_REGEX = /<svg[^>]*>([\s\S]*?)<\/svg>/;
const INLINE_STYLE_REGEX = /style="([\s\S]*?)"/g;
const FIL_TOKEN_REGEX = /fil(\d+)/g;

const SVG_STYLE = Object.freeze<Record<string, string>>({
  shapeRendering: "geometricPrecision",
  textRendering: "geometricPrecision",
  imageRendering: "optimizeQuality",
  fillRule: "evenodd",
  clipRule: "evenodd"
});

function makePathExisted(target: string): void {
  if (fs.existsSync(target)) return;
  fs.mkdirSync(target, { recursive: true });
}

function makeCodeMap(code: string): string {
  if (code === "embarrassed") return "embarassed";
  if (code === "surprised") return "suprised";
  return code;
}

function matchCodeSegment(text: string, regex: RegExp): string | undefined {
  const matched = text?.match?.(regex);
  const result = matched?.[1];
  return result;
}

function makeCDATA(text: string, start: string, end: string): string {
  const returns = text?.replace?.(/\r/g, "");
  const lines = returns?.replace?.(/\n/g, "");
  const content = lines?.replace(/\s/g, "");
  const result = `${start}"${content}"${end}`;
  return result;
}

function makeKey2CamelCase(record: Record<string, string>): Record<string, string> {
  return Object.entries(record).reduce((newer: Record<string, string>, [key, value]) => {
    const next = camelCase(key);
    newer[next] = value;
    return newer;
  }, {});
}

function makeStyle2Jsx(text: string): string {
  return text?.replace?.(INLINE_STYLE_REGEX, (match, value: string) => {
    const parsed = parse(value) as Record<string, string>;
    const record = makeKey2CamelCase(parsed);
    return `style={${JSON.stringify(record)}}`;
  });
}

function makeSVG(code: string, viewBox: string, content: string) {
  const contents: string[] = [format(content)];
  contents.push(contents?.[contents?.length - 1]!.replace?.(/radialgradient/g, "radialGradient"));
  contents.push(contents?.[contents?.length - 1]!.replace?.(/"stopOpacity":"1"/g, `"stopOpacity":1`));
  contents.push(contents?.[contents?.length - 1]!.replace?.(FIL_TOKEN_REGEX, match => `${code}_${match}`));

  const xmlns = `xmlns="http://www.w3.org/2000/svg"`;
  const xmlSpace = `xmlSpace="preserve"`;
  const style = `style={${JSON.stringify(SVG_STYLE)}}`.replace(`"optimizeQuality"`, `"optimizeQuality" as any`);
  const width = `width={props.width || props.size || 24}`;
  const height = `height={props.height || props.size || 24}`;
  const codes: string[] = [];
  codes.push(`<svg ${xmlns} ${xmlSpace} ${style} ${width} ${height} viewBox="${viewBox}" version="1.1">`);
  codes.push(contents?.[contents?.length - 1]!);
  codes.push(`</svg>`);
  const result = codes?.join?.("");
  return result;
}

function makeReactSVG(code: string, value: string) {
  const name = code?.charAt(0).toUpperCase() + code.slice(1);
  const codes: string[] = [];
  codes.push(`import React from "react";`);
  codes.push(`export function ${name}(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {`);
  codes.push(`  return (`);
  codes.push(value?.replace?.(/class=/g, "className="));
  codes.push(`  );`);
  codes.push(`}\n`);
  codes.push(`export default ${name};`);
  const result = codes?.join?.("\n");
  return result;
}

function makeVueSVG(code: string, value: string) {
  const name = code?.charAt(0).toUpperCase() + code.slice(1);
  const codes: string[] = [];
  codes.push(`import { defineComponent } from "vue";`);
  codes.push(`export const ${name} = defineComponent({`);
  codes.push(`  name: "${name}",`);
  codes.push(`  props: {`);
  codes.push(`    width: {`);
  codes.push(`      type: [String, Number],`);
  codes.push(`      require: false`);
  codes.push(`    },`);
  codes.push(`    height: {`);
  codes.push(`      type: [String, Number],`);
  codes.push(`      require: false`);
  codes.push(`    },`);
  codes.push(`    size: {`);
  codes.push(`      type: [String, Number],`);
  codes.push(`      require: false`);
  codes.push(`    }`);
  codes.push(`  },`);
  codes.push(`  setup(props) {`);
  codes.push(`    return () => {`);
  codes.push(`      return (`);
  codes.push(`        ${value}`);
  codes.push(`      )`);
  codes.push(`    }`);
  codes.push(`  }`);
  codes.push(`});`);
  codes.push(`export default ${name};`);
  const result = codes?.join?.("\n");
  return result;
}

function makeIndexTs(): string {
  const codes = TIKTOK_EMOJI_CODES.map(item => `export * from "./${item}";`);
  const result = codes?.join?.("\n");
  return result;
}

function main(): void {
  makePathExisted(REACT_TARGET_PATH);
  makePathExisted(VUE_TARGET_PATH);

  const codes = TIKTOK_EMOJI_CODES?.map?.(item => ({ source: item, target: makeCodeMap(item) }));
  const filenames = codes?.map?.(item => ({ ...item, filename: path.resolve(MATERIALS_PATH, `./${item.target}.svg`)} ));
  const files = filenames?.filter?.(item => fs.existsSync(item?.filename));
  const texts =  files?.map?.(item => ({ ...item, text: fs.readFileSync(item?.filename, "utf-8") }));
  const styles = texts?.map?.(item => ({ ...item, text: makeStyle2Jsx(item?.text) }));
  const viewBoxs = styles?.map?.(item => ({ ...item, viewBox: matchCodeSegment(item?.text, VIEW_BOX_REGEX) }));
  const cdatas = viewBoxs?.map?.(item => ({ ...item, cdata: matchCodeSegment(item?.text, CDATA_REGEX) }));
  const contents = cdatas?.map?.(item => ({ ...item, content: matchCodeSegment(item?.text, SEGMENT_REGEX) }));
  const replaceds = contents?.map?.(item => ({ ...item, content: item?.content?.replace?.(CDATA_REGEX, makeCDATA(item?.cdata!, "{", "}")) }));
  const values = replaceds?.map?.(item => ({ ...item, value: makeSVG(item?.source, item?.viewBox!, item?.content!) }));

  const reacts = values?.map?.(item => ({ ...item, value: makeReactSVG(item?.source, item?.value) }));
  reacts.forEach(item => fs.writeFileSync(path?.resolve(REACT_TARGET_PATH, `./${item?.source}.tsx`), item?.value, "utf8"));
  fs.writeFileSync(path?.resolve(REACT_TARGET_PATH, `./index.ts`), makeIndexTs(), "utf8");

  const vues = values?.map?.(item => ({ ...item, value: makeVueSVG(item?.source, item?.value) }));
  vues.forEach(item => fs.writeFileSync(path?.resolve(VUE_TARGET_PATH, `./${item?.source}.tsx`), item?.value, "utf8"));
  fs.writeFileSync(path?.resolve(VUE_TARGET_PATH, `./index.ts`), makeIndexTs(), "utf8");
}

main();
