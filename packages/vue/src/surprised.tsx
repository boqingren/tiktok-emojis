import { defineComponent } from "vue";
export const Surprised = defineComponent({
  name: "Surprised",
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 37.52 38.39" version="1.1">
<defs>
  <style type="text/css">
   {".surprised_fil1{fill:black}.surprised_fil2{fill:#FEFEFE}.surprised_fil0{fill:#FFCFC0}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689590897968">
    <circle class="surprised_fil0" cx="18.76" cy="19.63" r="18.76" />
    <ellipse class="surprised_fil1" cx="18.76" cy="27.59" rx="1.39" ry="4.64" />
    <path class="surprised_fil1"
      d="M5.49 3.42c0.25,-0.43 0.64,-0.88 0.98,-1.23 0.85,-0.88 1.86,-1.6 2.97,-2.11 0.4,-0.18 0.87,-0.01 1.05,0.38 0.18,0.4 0.01,0.87 -0.38,1.05 -0.93,0.43 -1.79,1.03 -2.5,1.78 -0.25,0.26 -0.57,0.62 -0.75,0.94 -0.22,0.38 -0.71,0.5 -1.09,0.28 -0.38,-0.22 -0.5,-0.71 -0.28,-1.09z" />
    <path class="surprised_fil1"
      d="M31.95 3.42c-0.25,-0.43 -0.64,-0.88 -0.98,-1.23 -0.85,-0.88 -1.86,-1.6 -2.97,-2.11 -0.4,-0.18 -0.87,-0.01 -1.05,0.38 -0.18,0.4 -0.01,0.87 0.38,1.05 0.93,0.43 1.79,1.03 2.5,1.78 0.25,0.26 0.57,0.62 0.75,0.94 0.22,0.38 0.71,0.5 1.09,0.28 0.38,-0.22 0.5,-0.71 0.28,-1.09z" />
    <circle class="surprised_fil2" cx="26.82" cy="16.5" r="7.2" />
    <circle class="surprised_fil1" cx="26.82" cy="16.5" r="2.73" />
    <circle class="surprised_fil2" cx="10.69" cy="16.5" r="7.2" />
    <circle class="surprised_fil1" cx="10.7" cy="16.5" r="2.73" />
  </g>
</g>
</svg>
      )
    }
  }
});
export default Surprised;