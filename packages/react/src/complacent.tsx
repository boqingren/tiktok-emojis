import React from "react";
export function Complacent(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 30.27 30.27" version="1.1">
<defs>
  <style type="text/css">
   {".complacent_fil1{fill:black}.complacent_fil0{fill:#50DAFF}.complacent_fil2{fill:white}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689536538320">
    <circle className="complacent_fil0" cx="15.13" cy="15.13" r="15.13" />
    <g>
      <path className="complacent_fil1"
        d="M8.29 5.71c2.78,0 5.1,1.96 5.67,4.57 0.34,-0.07 0.73,-0.1 1.15,-0.1 0.44,0 0.85,0.04 1.2,0.11 0.56,-2.62 2.89,-4.58 5.67,-4.58 3.2,0 5.8,2.6 5.8,5.8 0,3.2 -2.6,5.8 -5.8,5.8 -0.16,0 -0.33,-0.01 -0.49,-0.02 -1.27,1.61 -3.21,2.4 -5.21,2.69 -1.03,0.15 -2.32,0.2 -3.36,0.06 -0.36,-0.05 -0.61,-0.38 -0.57,-0.74 0.05,-0.36 0.38,-0.61 0.74,-0.57 0.92,0.12 2.09,0.07 3,-0.06 1.43,-0.21 2.87,-0.71 3.92,-1.71 -2.23,-0.81 -3.83,-2.95 -3.83,-5.46 0,-0.04 0,-0.07 0,-0.11 -0.25,-0.2 -0.64,-0.32 -1.07,-0.32 -0.41,0 -0.77,0.11 -1.02,0.28 0,0.05 0,0.1 0,0.14 0,3.2 -2.6,5.8 -5.8,5.8 -3.2,0 -5.8,-2.6 -5.8,-5.8 0,-3.2 2.6,-5.8 5.8,-5.8z" />
      <path className="complacent_fil2"
        d="M17.04 11.37c0,0 -0.1,-1.56 0.82,-2.64l5.87 -1.94c0,0 1.38,0.36 2.08,1.64l-8.77 2.94z" />
      <path className="complacent_fil2"
        d="M3.35 11.37c0,0 -0.1,-1.56 0.82,-2.64l5.87 -1.94c0,0 1.38,0.36 2.08,1.64l-8.77 2.94z" />
      <path className="complacent_fil1"
        d="M17.12 5.07l2.42 -1.98c0.28,-0.23 0.7,-0.19 0.93,0.09 0.23,0.28 0.19,0.7 -0.09,0.93l-2.42 1.98c-0.28,0.23 -0.7,0.19 -0.93,-0.09 -0.23,-0.28 -0.19,-0.7 0.09,-0.93z" />
      <path className="complacent_fil1"
        d="M13.21 5.07l-2.42 -1.98c-0.28,-0.23 -0.7,-0.19 -0.93,0.09 -0.23,0.28 -0.19,0.7 0.09,0.93l2.42 1.98c0.28,0.23 0.7,0.19 0.93,-0.09 0.23,-0.28 0.19,-0.7 -0.09,-0.93z" />
    </g>
  </g>
</g>
</svg>
  );
}

export default Complacent;