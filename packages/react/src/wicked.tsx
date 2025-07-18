import React from "react";
export function Wicked(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 41.91 42.78" version="1.1">
<defs>
  <style type="text/css">
   {".wicked_fil2{fill:black}.wicked_fil1{fill:#8D5CCC}.wicked_fil0{fill:#B778FA}.wicked_fil3{fill:#FEFEFE}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689600652864">
    <path className="wicked_fil0"
      d="M10.55 8.93c-2.13,-0.67 -6.87,-2.8 -9.66,-8.93 0,0 -3.17,9.72 2.47,18.45 -0.6,1.83 -0.93,3.78 -0.93,5.81 0,10.23 8.29,18.52 18.52,18.52 10.23,0 18.52,-8.29 18.52,-18.52 0,-2.03 -0.33,-3.98 -0.93,-5.81 5.65,-8.73 2.47,-18.45 2.47,-18.45 -2.8,6.12 -7.54,8.26 -9.66,8.93 -2.97,-2.02 -6.55,-3.2 -10.4,-3.2 -3.86,0 -7.44,1.18 -10.4,3.2z" />
    <circle className="wicked_fil1" cx="20.96" cy="26.71" r="16.07" />
    <path className="wicked_fil2"
      d="M22.71 27.01l10.91 -2.55c0.4,6.09 -8.17,9.08 -10.91,2.55z" />
    <path className="wicked_fil2"
      d="M19.2 27.01l-10.91 -2.55c-0.4,6.09 8.17,9.08 10.91,2.55z" />
    <polygon className="wicked_fil3" points="29.66,32.44 29.64,35.98 27.6,34.24 " />
    <path className="wicked_fil2"
      d="M20 34.72c0.97,0.17 2.26,0.11 3.22,-0.05 2.19,-0.36 4.1,-1.35 5.45,-3.14 0.29,-0.38 0.83,-0.46 1.21,-0.17 0.38,0.29 0.46,0.83 0.17,1.21 -1.63,2.16 -3.95,3.39 -6.59,3.81 -1.13,0.18 -2.61,0.24 -3.76,0.04 -0.47,-0.08 -0.79,-0.53 -0.7,-1 0.08,-0.47 0.53,-0.79 1,-0.7z" />
  </g>
</g>
</svg>
  );
}

export default Wicked;