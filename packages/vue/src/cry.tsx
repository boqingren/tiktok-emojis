import { defineComponent } from "vue";
export const Cry = defineComponent({
  name: "Cry",
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 30.27 30.27" version="1.1">
<defs>
  <style type="text/css">
   {".cry_fil2{fill:black}.cry_fil0{fill:#4ABAFF}.cry_fil1{fill:#FEFEFE}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689539983632">
    <circle class="cry_fil0" cx="15.13" cy="15.13" r="15.13" />
    <g>
      <path class="cry_fil1"
        d="M29.64 19.46c-0.96,3.22 -2.96,5.99 -5.61,7.92 0.32,-11.91 -6.05,-19.71 -6.05,-19.71l4.32 1.04c2.22,0.93 5.73,7.52 7.34,10.75z" />
      <path class="cry_fil1"
        d="M6.24 27.38c-2.65,-1.93 -4.65,-4.7 -5.61,-7.92 1.61,-3.23 5.12,-9.82 7.34,-10.75l4.32 -1.04c0,0 -6.37,7.8 -6.05,19.71z" />
    </g>
    <path class="cry_fil2"
      d="M7.4 7.88c0.52,0.08 1.17,0.07 1.68,0.03 1.06,-0.1 2.13,-0.42 2.95,-1.12 0.28,-0.24 0.69,-0.2 0.93,0.07 0.24,0.28 0.2,0.69 -0.07,0.93 -1.04,0.89 -2.37,1.31 -3.71,1.43 -0.62,0.06 -1.37,0.06 -1.99,-0.04 -0.36,-0.06 -0.6,-0.4 -0.55,-0.76 0.06,-0.36 0.4,-0.6 0.76,-0.55z" />
    <path class="cry_fil2"
      d="M22.86 7.88c-0.52,0.08 -1.17,0.07 -1.68,0.03 -1.06,-0.1 -2.13,-0.42 -2.95,-1.12 -0.28,-0.24 -0.69,-0.2 -0.93,0.07 -0.24,0.28 -0.2,0.69 0.07,0.93 1.04,0.89 2.37,1.31 3.71,1.43 0.62,0.06 1.37,0.06 1.99,-0.04 0.36,-0.06 0.6,-0.4 0.55,-0.76 -0.06,-0.36 -0.4,-0.6 -0.76,-0.55z" />
    <path class="cry_fil2"
      d="M7.82 12.47c1.57,-2.09 3.75,-2.11 5.76,-0.54 0.33,0.26 2.79,0.26 3.12,0 2.01,-1.57 4.19,-1.55 5.76,0.54 0.88,1.16 1.24,2.32 0.95,3.8 -0.26,1.34 -1.14,2.23 -2.33,2.51 -1.82,0.42 -3.76,-0.7 -4.18,-1.28 -0.38,-0.52 -1.53,-0.57 -1.76,-0.58 -0.23,0.01 -1.38,0.06 -1.76,0.58 -0.42,0.58 -2.36,1.7 -4.18,1.28 -1.19,-0.27 -2.07,-1.17 -2.33,-2.51 -0.29,-1.48 0.07,-2.64 0.95,-3.8z" />
  </g>
</g>
</svg>
      )
    }
  }
});
export default Cry;