import React from "react";
export function Shout(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 35.48 35.48" version="1.1">
<defs>
  <style type="text/css">
   {".shout_fil3{fill:#F5FBFE}.shout_fil2{fill:black}.shout_fil1{fill:#8D5CCC}.shout_fil0{fill:#B778F9}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689536548592">
    <circle className="shout_fil0" cx="17.74" cy="17.74" r="17.74" />
    <circle className="shout_fil1" cx="17.74" cy="19.91" r="15.46" />
    <path className="shout_fil2"
      d="M6.95 8.12l8.63 2.02c-0.05,2.86 -7.37,6.22 -8.63,-2.02z" />
    <path className="shout_fil2"
      d="M28.64 8.12l-8.63 2.02c0.05,2.86 7.37,6.22 8.63,-2.02z" />
    <path className="shout_fil2"
      d="M23.33 20.56l-0.87 -3.08c-1.32,-4.69 -7.76,-4.77 -9.03,0l-0.82 3.08c-1.26,4.73 12.02,4.6 10.72,0z" />
    <path className="shout_fil3"
      d="M21.37 15.46c-0.44,-0.49 -0.96,-0.86 -1.53,-1.11l0.72 3.1 0.81 -1.99z" />
    <path className="shout_fil3"
      d="M16.12 14.28c-0.58,0.24 -1.12,0.61 -1.57,1.1l0.84 2.06 0.74 -3.16z" />
  </g>
</g>
</svg>
  );
}

export default Shout;