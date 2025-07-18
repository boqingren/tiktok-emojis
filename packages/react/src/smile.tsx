import React from "react";
export function Smile(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 37.52 37.52" version="1.1">
<defs>
  <style type="text/css">
   {".smile_fil1{fill:black}.smile_fil0{fill:#FFAEBF}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689600660832">
    <circle className="smile_fil0" cx="18.76" cy="18.76" r="18.76" />
    <g>
      <circle className="smile_fil1" cx="25.26" cy="10.11" r="2.59" />
      <circle className="smile_fil1" cx="12.26" cy="10.11" r="2.59" />
    </g>
    <path className="smile_fil1"
      d="M14.59 14.98c0.71,0.14 1.54,0.2 2.27,0.24 2.03,0.11 4.1,0.01 6.12,-0.25 0.39,-0.05 0.75,0.23 0.8,0.62 0.05,0.39 -0.23,0.75 -0.62,0.8 -2.11,0.27 -4.26,0.38 -6.39,0.26 -0.79,-0.04 -1.68,-0.11 -2.45,-0.27 -0.39,-0.08 -0.64,-0.45 -0.56,-0.84 0.08,-0.39 0.45,-0.64 0.84,-0.56z" />
  </g>
</g>
</svg>
  );
}

export default Smile;