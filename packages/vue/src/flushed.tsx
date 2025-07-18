import { defineComponent } from "vue";
export const Flushed = defineComponent({
  name: "Flushed",
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 31.77 31.77" version="1.1">
<defs>
  <style type="text/css">
   {".flushed_fil2{fill:black}.flushed_fil1{fill:#FF9494}.flushed_fil0{fill:#FFDA3E}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2690720500640">
    <circle class="flushed_fil0" cx="15.88" cy="15.88" r="15.88" />
    <path class="flushed_fil1"
      d="M31.75 16.62c-0.11,2.33 -0.71,4.52 -1.71,6.48 -1.83,-0.08 -3.28,-1.58 -3.28,-3.43 0,-1.89 1.54,-3.43 3.43,-3.43 0.56,0 1.09,0.14 1.56,0.38z" />
    <path class="flushed_fil2"
      d="M28.89 10.31c-1.12,-0.13 -2.72,-0.75 -3.19,-1.85 -0.12,-0.28 -0.45,-0.41 -0.73,-0.29 -0.28,0.12 -0.41,0.45 -0.29,0.73 0.44,1.04 1.4,1.7 2.42,2.09 0.5,0.2 1.13,0.37 1.67,0.43 0.31,0.03 0.58,-0.19 0.62,-0.49 0.03,-0.31 -0.19,-0.58 -0.49,-0.62z" />
    <path class="flushed_fil2"
      d="M16.24 9.41c-0.13,0.52 -0.45,1.16 -0.74,1.61 -0.69,1.09 -1.68,1.93 -2.91,2.35 -0.29,0.1 -0.45,0.42 -0.35,0.71 0.1,0.29 0.42,0.45 0.71,0.35 1.47,-0.51 2.66,-1.5 3.49,-2.81 0.35,-0.55 0.72,-1.3 0.88,-1.94 0.07,-0.3 -0.11,-0.6 -0.41,-0.68 -0.3,-0.07 -0.6,0.11 -0.68,0.41z" />
    <circle class="flushed_fil1" cx="15.14" cy="23.24" r="3.98" />
    <path class="flushed_fil2"
      d="M23.17 20.07l0.34 -0.93c0.14,-0.38 0.57,-0.58 0.95,-0.44 0.38,0.14 0.58,0.57 0.44,0.95l-0.71 1.95c-0.09,0.24 -0.27,0.4 -0.52,0.46 -0.25,0.06 -0.48,0 -0.67,-0.17l-1.68 -1.51c-0.3,-0.27 -0.33,-0.74 -0.05,-1.04 0.27,-0.3 0.74,-0.33 1.04,-0.05l0.87 0.78z" />
    <circle class="flushed_fil2" cx="16.93" cy="18.43" r="2.25" />
    <circle class="flushed_fil2" cx="26.84" cy="16.95" r="1.93" />
  </g>
</g>
</svg>
      )
    }
  }
});
export default Flushed;