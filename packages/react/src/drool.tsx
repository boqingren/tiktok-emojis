import React from "react";
export function Drool(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 31.77 31.77" version="1.1">
<defs>
  <style type="text/css">
   {".drool_fil1{fill:#FEFEFE}.drool_fil2{fill:#FF3939}.drool_fil0{fill:#FFCFC0}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2690720488000">
    <circle className="drool_fil0" cx="15.88" cy="15.88" r="15.88" />
    <g>
      <path className="drool_fil1"
        d="M12.38 18.34c0.61,0.44 1.59,0.84 2.31,1.02 1.61,0.41 3.09,0.15 4.37,-0.94 0.68,-0.58 1.72,-0.5 2.3,0.18 0.58,0.68 0.5,1.72 -0.18,2.3 -0.26,0.22 -0.53,0.43 -0.81,0.61 0,0.42 0.04,0.96 0.16,1.42 0.63,2.4 -2.38,1.23 -0.98,-0.08 0.09,-0.08 0.05,-0.53 0.01,-0.87 -1.74,0.88 -3.69,1.05 -5.68,0.54 -1.12,-0.28 -2.47,-0.86 -3.42,-1.54 -0.73,-0.53 -0.89,-1.55 -0.37,-2.28 0.53,-0.73 1.55,-0.89 2.28,-0.37z" />
      <path className="drool_fil2"
        d="M4.15 13.48c-0.71,-0.83 -1.43,-1.9 -1.68,-3.03 -0.56,-2.54 3.63,-5.44 6.37,-2.19 2.74,-3.26 6.93,-0.36 6.37,2.19 -0.25,1.14 -0.97,2.2 -1.68,3.03 -0.87,1.02 -2.11,2.08 -3.28,2.79 -1.05,0.65 -1.42,0.56 -1.42,0.56 0,0 -0.36,0.09 -1.42,-0.56 -1.16,-0.71 -2.4,-1.78 -3.28,-2.79z" />
      <path className="drool_fil2"
        d="M18.23 13.48c-0.71,-0.83 -1.43,-1.9 -1.68,-3.03 -0.56,-2.54 3.63,-5.44 6.37,-2.19 2.74,-3.26 6.93,-0.36 6.37,2.19 -0.25,1.14 -0.97,2.2 -1.68,3.03 -0.87,1.02 -2.11,2.08 -3.28,2.79 -1.05,0.65 -1.42,0.56 -1.42,0.56 0,0 -0.36,0.09 -1.42,-0.56 -1.16,-0.71 -2.4,-1.78 -3.28,-2.79z" />
    </g>
  </g>
</g>
</svg>
  );
}

export default Drool;