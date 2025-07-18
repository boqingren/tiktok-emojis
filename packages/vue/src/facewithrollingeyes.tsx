import { defineComponent } from "vue";
export const Facewithrollingeyes = defineComponent({
  name: "Facewithrollingeyes",
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
   {".facewithrollingeyes_fil2{fill:black}.facewithrollingeyes_fil1{fill:#FEFEFE}.facewithrollingeyes_fil0{fill:#FFCFC0}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689533366944">
    <circle class="facewithrollingeyes_fil0" cx="15.88" cy="15.88" r="15.88" />
    <circle class="facewithrollingeyes_fil1" cx="22.71" cy="14.83" r="5.92" />
    <path class="facewithrollingeyes_fil2"
      d="M22.71 8.91c0.72,0 1.4,0.13 2.04,0.36 0.1,0.25 0.16,0.53 0.16,0.82 0,1.21 -0.98,2.2 -2.2,2.2 -1.21,0 -2.2,-0.98 -2.2,-2.2 0,-0.29 0.06,-0.56 0.16,-0.82 0.64,-0.23 1.32,-0.36 2.04,-0.36z" />
    <circle class="facewithrollingeyes_fil1" cx="9.05" cy="14.83" r="5.92" />
    <path class="facewithrollingeyes_fil2"
      d="M9.05 8.91c0.72,0 1.4,0.13 2.04,0.36 0.1,0.25 0.16,0.53 0.16,0.82 0,1.21 -0.98,2.2 -2.2,2.2 -1.21,0 -2.2,-0.98 -2.2,-2.2 0,-0.29 0.06,-0.56 0.16,-0.82 0.64,-0.23 1.32,-0.36 2.04,-0.36z" />
    <path class="facewithrollingeyes_fil2"
      d="M14.3 25.35l3.76 -0.67c0.4,-0.07 0.79,0.2 0.86,0.6 0.07,0.4 -0.2,0.79 -0.6,0.86l-3.76 0.67c-0.4,0.07 -0.79,-0.2 -0.86,-0.6 -0.07,-0.4 0.2,-0.79 0.6,-0.86z" />
  </g>
</g>
</svg>
      )
    }
  }
});
export default Facewithrollingeyes;