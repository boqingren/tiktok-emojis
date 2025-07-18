import { defineComponent } from "vue";
export const Weep = defineComponent({
  name: "Weep",
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 40.03 40.03" version="1.1">
<defs>
  <style type="text/css">
   {".weep_fil1{fill:black}.weep_fil0{fill:#4ABAFF}.weep_fil2{fill:#FEFEFE}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689613694000">
    <circle class="weep_fil0" cx="20.01" cy="20.01" r="20.01" />
    <g>
      <g>
        <path class="weep_fil1"
          d="M10.33 24.59c0.65,0.02 1.46,-0.09 2.08,-0.25 1.24,-0.31 2.43,-0.91 3.15,-2.01 0.28,-0.43 0.86,-0.55 1.29,-0.27 0.43,0.28 0.55,0.86 0.27,1.29 -0.98,1.5 -2.55,2.37 -4.25,2.79 -0.79,0.2 -1.77,0.33 -2.6,0.3 -0.51,-0.02 -0.92,-0.45 -0.9,-0.97 0.02,-0.51 0.45,-0.92 0.97,-0.9z" />
        <path class="weep_fil1"
          d="M29.7 24.59c-0.65,0.02 -1.46,-0.09 -2.08,-0.25 -1.24,-0.31 -2.43,-0.91 -3.15,-2.01 -0.28,-0.43 -0.86,-0.55 -1.29,-0.27 -0.43,0.28 -0.55,0.86 -0.27,1.29 0.98,1.5 2.55,2.37 4.25,2.79 0.79,0.2 1.77,0.33 2.6,0.3 0.51,-0.02 0.92,-0.45 0.9,-0.97 -0.02,-0.51 -0.45,-0.92 -0.97,-0.9z" />
      </g>
      <path class="weep_fil1"
        d="M20.02 28.73l-1.29 2.01c-0.28,0.43 -0.86,0.56 -1.29,0.28 -0.43,-0.28 -0.56,-0.86 -0.28,-1.29l2.09 -3.26c0.18,-0.28 0.46,-0.43 0.79,-0.43 0.33,0 0.61,0.16 0.78,0.44l1.99 3.23c0.27,0.44 0.13,1.01 -0.31,1.28 -0.44,0.27 -1.01,0.13 -1.28,-0.31l-1.21 -1.97z" />
      <path class="weep_fil2"
        d="M28.7 26.87c0,0 -2.29,2.19 -1.99,5.08 0.39,3.72 7.1,2.29 1.99,-5.08z" />
    </g>
  </g>
</g>
</svg>
      )
    }
  }
});
export default Weep;