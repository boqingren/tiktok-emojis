import React from "react";
export function Happy(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 33.51 33.51" version="1.1">
<defs>
  <style type="text/css">
   {".happy_fil1{fill:black}.happy_fil2{fill:#FF9494}.happy_fil0{fill:#FFCFC0}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689361941296">
    <circle className="happy_fil0" cx="16.76" cy="16.76" r="16.76" />
    <g>
      <path className="happy_fil1"
        d="M13.79 10.75c0,0 -2.13,2.55 -2.19,5.5 -0.07,2.95 1.84,4.43 4.83,4.41 2.99,0.02 4.9,-1.46 4.83,-4.41 -0.07,-2.95 -2.19,-5.5 -2.19,-5.5 -1.27,0.44 -4.01,0.44 -5.27,0z" />
      <circle className="happy_fil2" cx="26.47" cy="11.43" r="3.6" />
      <circle className="happy_fil2" cx="7.04" cy="11.43" r="3.6" />
      <path className="happy_fil1"
        d="M12.31 7.23l-2.66 -1.41c-0.31,-0.17 -0.43,-0.55 -0.26,-0.86 0.17,-0.31 0.55,-0.43 0.86,-0.26l4.02 2.14c0.23,0.12 0.36,0.36 0.34,0.63 -0.03,0.26 -0.2,0.47 -0.45,0.55l-5.1 1.55c-0.34,0.1 -0.69,-0.09 -0.8,-0.42 -0.1,-0.34 0.09,-0.69 0.42,-0.8l3.62 -1.1z" />
      <path className="happy_fil1"
        d="M20.76 7.23l2.66 -1.41c0.31,-0.17 0.43,-0.55 0.26,-0.86 -0.17,-0.31 -0.55,-0.43 -0.86,-0.26l-4.02 2.14c-0.23,0.12 -0.36,0.36 -0.34,0.63 0.03,0.26 0.2,0.47 0.45,0.55l5.1 1.55c0.34,0.1 0.69,-0.09 0.8,-0.42 0.1,-0.34 -0.09,-0.69 -0.42,-0.8l-3.62 -1.1z" />
    </g>
  </g>
</g>
</svg>
  );
}

export default Happy;