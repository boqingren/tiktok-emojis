import React from "react";
export function Yummy(props: Partial<Record<"width" | "height" | "size", string | number>>): JSX.Element {
  return (
<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 40.64 40.64" version="1.1">
<defs>
  <style type="text/css">
   {".yummy_fil1{fill:black}.yummy_fil2{fill:#FF3939}.yummy_fil0{fill:#FFAEBF}.yummy_fil3{fill:#FFC7D4}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689150723248">
    <circle className="yummy_fil0" cx="20.32" cy="20.32" r="20.32" />
    <g>
      <path className="yummy_fil1"
        d="M29.9 8.44l-3.63 0 3.06 -1.77c0.37,-0.21 0.49,-0.68 0.28,-1.05 -0.21,-0.37 -0.68,-0.49 -1.05,-0.28l-5.52 3.19c-0.25,0.14 -0.39,0.4 -0.38,0.67 -0,0.27 0.14,0.53 0.38,0.67l5.52 3.19c0.37,0.21 0.84,0.09 1.05,-0.28 0.21,-0.37 0.09,-0.84 -0.28,-1.05l-3.05 -1.76 3.62 0c0.42,0 0.77,-0.35 0.77,-0.77 0,-0.42 -0.35,-0.77 -0.77,-0.77z" />
      <path className="yummy_fil1"
        d="M10.75 8.44l3.63 0 -3.06 -1.77c-0.37,-0.21 -0.49,-0.68 -0.28,-1.05 0.21,-0.37 0.68,-0.49 1.05,-0.28l5.52 3.19c0.25,0.14 0.39,0.4 0.38,0.67 0,0.27 -0.14,0.53 -0.38,0.67l-5.52 3.19c-0.37,0.21 -0.84,0.09 -1.05,-0.28 -0.21,-0.37 -0.09,-0.84 0.28,-1.05l3.05 -1.76 -3.62 0c-0.42,0 -0.77,-0.35 -0.77,-0.77 0,-0.42 0.35,-0.77 0.77,-0.77z" />
    </g>
    <path className="yummy_fil2"
      d="M22.77 17.78c0,0 0.4,-5.28 4.53,-6.56 4.13,-1.28 4.36,3.59 2.27,4.94 -2.09,1.35 -6.81,1.62 -6.81,1.62z" />
    <path className="yummy_fil3"
      d="M2.31 21.65c0,0 -3.76,-6.34 -1.36,-8.94 4.53,-4.89 8.51,1.38 7.42,6.75 0,0 6.64,-0.93 6.91,2.99 0,0 0.29,2.21 -1.41,2.96 0,0 2.21,0.67 2.61,2.85 0.4,2.19 -0.85,3.39 -1.73,3.81 0,0 2.13,0.35 2.27,2.93 0.13,2.59 -2.19,3.92 -6.06,4.29 -3.87,0.37 -7.76,-1.68 -9.34,-6.32 -1.57,-4.64 -1.47,-7.84 0.69,-11.34z" />
    <path className="yummy_fil1"
      d="M10.38 14.8c6.66,3.87 13.28,3.72 19.96,-0.01 0.41,-0.23 0.93,-0.08 1.16,0.33 0.23,0.41 0.08,0.93 -0.33,1.16 -7.21,4.02 -14.47,4.17 -21.65,-0.01 -0.41,-0.24 -0.55,-0.76 -0.31,-1.17 0.24,-0.41 0.76,-0.55 1.17,-0.31z" />
  </g>
</g>
</svg>
  );
}

export default Yummy;