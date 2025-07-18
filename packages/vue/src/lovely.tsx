import { defineComponent } from "vue";
export const Lovely = defineComponent({
  name: "Lovely",
  props: {
    width: {
      type: [String, Number],
      require: false
    },
    height: {
      type: [String, Number],
      require: false
    },
    size: {
      type: [String, Number],
      require: false
    }
  },
  setup(props) {
    return () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 35.48 35.48" version="1.1">
<defs>
  <style type="text/css">
   {".lovely_fil2{fill:black}.lovely_fil1{fill:#FF3939}.lovely_fil0{fill:#FFAEBF}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689419028208">
    <circle class="lovely_fil0" cx="17.74" cy="17.74" r="17.74" />
    <ellipse class="lovely_fil1" cx="27.03" cy="11" rx="4.41" ry="2.63" />
    <ellipse class="lovely_fil1" cx="8.45" cy="11" rx="4.41" ry="2.63" />
    <path class="lovely_fil2"
      d="M14.91 15.33c-0.21,-0.25 -0.39,-0.52 -0.51,-0.81 -0.44,-1.03 -0.09,-2.01 0.65,-2.79 1.49,-1.56 3.53,-0.52 4.68,0.84 0.29,0.35 0.25,0.87 -0.1,1.16 -0.35,0.29 -0.87,0.25 -1.16,-0.1 -0.29,-0.35 -0.79,-0.75 -1.2,-0.92 -0.4,-0.17 -0.71,-0.17 -1.02,0.16 -0.29,0.3 -0.5,0.63 -0.31,1.04 0.18,0.39 0.51,0.58 0.73,0.91 0.06,0.09 0.11,0.2 0.13,0.3 0.1,0.43 -0.11,0.76 -0.39,1.04 -0.12,0.13 -0.26,0.25 -0.37,0.38 -0.2,0.24 -0.26,0.41 -0.13,0.71 0.14,0.3 0.35,0.56 0.65,0.7 0.66,0.31 1.38,-0.13 1.85,-0.58 0.33,-0.31 0.85,-0.3 1.17,0.03 0.31,0.33 0.3,0.85 -0.03,1.17 -0.99,0.95 -2.37,1.49 -3.69,0.88 -0.66,-0.31 -1.16,-0.85 -1.46,-1.51 -0.33,-0.73 -0.29,-1.47 0.14,-2.14 0.11,-0.17 0.23,-0.32 0.37,-0.47z" />
    <g>
      <path class="lovely_fil2"
        d="M26.19 7.46l-3.19 0 2.69 -1.55c0.32,-0.19 0.43,-0.6 0.25,-0.92 -0.19,-0.32 -0.6,-0.43 -0.92,-0.25l-4.86 2.8c-0.22,0.13 -0.34,0.36 -0.34,0.59 -0,0.24 0.12,0.47 0.34,0.59l4.86 2.8c0.32,0.19 0.74,0.08 0.92,-0.25 0.19,-0.32 0.08,-0.74 -0.25,-0.92l-2.68 -1.55 3.18 0c0.37,0 0.68,-0.3 0.68,-0.68 0,-0.37 -0.3,-0.68 -0.68,-0.68z" />
      <path class="lovely_fil2"
        d="M9.29 7.46l3.19 0 -2.69 -1.55c-0.32,-0.19 -0.43,-0.6 -0.25,-0.92 0.19,-0.32 0.6,-0.43 0.92,-0.25l4.86 2.8c0.22,0.13 0.34,0.36 0.34,0.59 0,0.24 -0.12,0.47 -0.34,0.59l-4.86 2.8c-0.32,0.19 -0.74,0.08 -0.92,-0.25 -0.19,-0.32 -0.08,-0.74 0.25,-0.92l2.68 -1.55 -3.18 0c-0.37,0 -0.68,-0.3 -0.68,-0.68 0,-0.37 0.3,-0.68 0.68,-0.68z" />
    </g>
  </g>
</g>
</svg>
      )
    }
  }
});
export default Lovely;