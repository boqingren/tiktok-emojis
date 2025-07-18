import React from "react";
export function Scream(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 35.48 36.21" version="1.1">
<defs>
  <style type="text/css">
   {".scream_fil1{fill:#0058D8}.scream_fil0{fill:#1268FF}.scream_fil2{fill:#FEFEFE}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689536548304">
    <circle className="scream_fil0" cx="17.74" cy="17.74" r="17.74" />
    <circle className="scream_fil1" cx="16.85" cy="19.66" r="15" />
    <circle className="scream_fil2"
      transform="matrix(0.153201 -0.0344555 0.0502642 0.223492 19.037 17.1917)"
      r="17.29" />
    <circle className="scream_fil2"
      transform="matrix(0.139673 -0.031413 0.0458257 0.203757 7.37507 18.2475)"
      r="17.29" />
    <circle className="scream_fil2"
      transform="matrix(0.138549 -0.07211 0.0977955 0.298657 15.5613 28.0056)"
      r="17.29" />
    <path className="scream_fil0"
      d="M22.26 28.46c-0.38,4.74 1.24,6.95 3.87,7.6 2.63,0.66 3.52,-1.64 3.38,-3.28 -0.14,-1.65 -0.75,-5.98 -0.31,-7.58 0.45,-1.6 0.96,-4.36 -0.63,-5.91 -3.13,-3.04 -6.19,7.62 -6.31,9.17z" />
    <path className="scream_fil0"
      d="M8 26.66c1.85,2.99 2.73,6.64 0.09,9.19 0,0 -3.01,1.51 -3.74,-1.68 -0.73,-3.19 -0.11,-5.81 -1.19,-7.57 -0.76,-1.24 -0.86,-3.24 0.07,-3.81 1.6,-0.99 4.11,2.79 4.78,3.87z" />
  </g>
</g>
</svg>
  );
}

export default Scream;