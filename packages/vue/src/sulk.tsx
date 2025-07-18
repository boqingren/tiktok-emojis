import { defineComponent } from "vue";
export const Sulk = defineComponent({
  name: "Sulk",
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 37.52 37.52" version="1.1">
<defs>
  <style type="text/css">
   {".sulk_fil1{fill:black}.sulk_fil0{fill:#FF3939}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689604902000">
    <circle class="sulk_fil0" cx="18.76" cy="18.76" r="18.76" />
    <path class="sulk_fil1"
      d="M22.95 13.06c-0.91,2.67 -3.07,4.55 -5.6,4.55 -2.52,0 -4.69,-1.88 -5.6,-4.55l11.19 0z" />
    <path class="sulk_fil1"
      d="M35.79 13.06c-0.78,2.28 -2.62,3.89 -4.78,3.89 -2.15,0 -4,-1.61 -4.78,-3.89l9.55 0z" />
    <path class="sulk_fil1"
      d="M24.77 8.15c-0.13,-0.05 -0.45,-0 -0.5,0.1 -0,0.01 0,0.04 0.01,0.05 0.03,0.13 0.1,0.25 0.19,0.36 0.17,-0.15 0.31,-0.33 0.31,-0.48 0,-0.01 -0,-0.02 -0,-0.02zm0.79 1.2c0.7,0.27 1.52,0.39 2.26,0.4 1.13,0.01 3.3,-0.29 3.58,-1.68 0.07,-0.34 0.4,-0.57 0.75,-0.5 0.34,0.07 0.57,0.4 0.5,0.75 -0.59,2.93 -5.68,3.34 -8.23,1.89 -0.79,0.41 -1.71,0.65 -2.58,0.73 -2.74,0.28 -5.29,-0.84 -6.47,-3.43 -0.14,-0.32 -0,-0.7 0.32,-0.84 0.32,-0.14 0.7,-0 0.84,0.32 0.95,2.09 2.99,2.91 5.19,2.69 0.54,-0.05 1.12,-0.18 1.65,-0.39 -0.15,-0.22 -0.26,-0.45 -0.32,-0.7 -0.09,-0.37 -0.04,-0.74 0.17,-1.05 0.62,-0.93 2.42,-0.96 2.77,0.2 0.04,0.14 0.06,0.29 0.06,0.43 -0,0.45 -0.2,0.85 -0.49,1.18z" />
    <path class="sulk_fil1"
      d="M19 19.22c0.78,0.52 1.46,1.54 1.8,2.39 0.1,0.25 0.18,0.49 0.25,0.74 1.65,-1.19 3.57,-1.85 5.67,-1.56 0.95,0.13 2.17,0.54 2.96,1.12 0.35,0.26 0.42,0.76 0.16,1.11 -0.26,0.35 -0.76,0.42 -1.11,0.16 -0.59,-0.43 -1.57,-0.74 -2.29,-0.84 -1.97,-0.26 -3.73,0.58 -5.18,1.85 -0.03,1.59 -0.55,3.18 -1.25,4.6 -0.19,0.39 -0.67,0.55 -1.06,0.36 -0.39,-0.19 -0.55,-0.67 -0.36,-1.06 0.87,-1.75 1.5,-3.93 0.77,-5.84 -0.23,-0.59 -0.71,-1.37 -1.24,-1.74 -0.36,-0.24 -0.46,-0.74 -0.21,-1.1 0.24,-0.36 0.74,-0.46 1.1,-0.21z" />
  </g>
</g>
</svg>
      )
    }
  }
});
export default Sulk;