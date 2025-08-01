import { defineComponent } from "vue";
export const Joyful = defineComponent({
  name: "Joyful",
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{"shapeRendering":"geometricPrecision","textRendering":"geometricPrecision","imageRendering":"optimizeQuality" as any,"fillRule":"evenodd","clipRule":"evenodd"}} width={props.width || props.size || 24} height={props.height || props.size || 24} viewBox="0 0 31.59 33.31" version="1.1">
<defs>
  <style type="text/css">
   {".joyful_fil0{fill:black}.joyful_fil2{fill:#EEEEEE}.joyful_fil3{fill:#F6A391}.joyful_fil1{fill:#FEFEFE}"}
  </style>
</defs>
<g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer" />
  <g id="_2689419028560">
    <path class="joyful_fil0"
      d="M12.78 1.17c0.34,-0.52 0.82,-1.04 1.47,-1.09 0.72,-0.06 1.23,0.46 1.58,1.11 0.33,-0.55 0.8,-1.1 1.47,-1.18 0.74,-0.08 1.26,0.46 1.63,1.1 0.35,-0.49 0.84,-0.98 1.47,-1.04 0.72,-0.06 1.23,0.42 1.59,1.03 0.34,-0.48 0.81,-0.94 1.43,-1 0.73,-0.07 1.24,0.44 1.59,1.05 0.03,-0.05 0.07,-0.09 0.1,-0.13 0.38,-0.48 0.9,-0.93 1.54,-0.98 1.48,-0.11 2.13,1.88 2.43,2.99 1.24,4.59 2.19,9.41 2.44,14.16 0.11,2.13 0.08,4.29 -0.18,6.4 -0.33,2.65 -1.19,5.3 -3.4,6.98 -1.48,1.13 -2.98,1.45 -4.71,1.95 -0.66,0.19 -1.37,0.31 -2.04,0.41 -0.95,0.14 -1.92,0.23 -2.88,0.29 -2.37,0.15 -4.8,0.09 -7.15,-0.22 -2.02,-0.27 -4.1,-0.75 -5.96,-1.59 -0.8,-0.36 -1.52,-0.86 -2.15,-1.49 -4.46,-4.49 -3,-14.52 -1.97,-20.17 0.21,-1.16 0.44,-2.31 0.71,-3.46 0.39,-1.72 0.92,-5.04 2.52,-6 0.23,-0.14 0.49,-0.24 0.77,-0.26 0.76,-0.07 1.27,0.41 1.62,1.03 0.32,-0.49 0.76,-0.95 1.36,-1.02 0.58,-0.07 1.05,0.26 1.38,0.7 0.1,0.13 0.2,0.28 0.28,0.43 0.32,-0.54 0.79,-1.11 1.45,-1.18 0.74,-0.07 1.26,0.49 1.62,1.16zm-0.61 1.86c-0.14,-0.48 -0.34,-1.06 -0.61,-1.48 -0.04,-0.06 -0.2,-0.29 -0.28,-0.31 -0.17,0.02 -0.49,0.54 -0.56,0.67 -0.2,0.36 -0.39,0.81 -0.51,1.2 -0.07,0.24 -0.28,0.39 -0.53,0.39 -0.25,0 -0.45,-0.15 -0.53,-0.39 -0.15,-0.5 -0.39,-1.2 -0.71,-1.62 -0.03,-0.04 -0.19,-0.23 -0.26,-0.22 -0.18,0.02 -0.48,0.48 -0.56,0.62 -0.2,0.35 -0.39,0.78 -0.51,1.16 -0.08,0.24 -0.3,0.39 -0.55,0.38 -0.25,-0.01 -0.46,-0.19 -0.51,-0.44 -0.06,-0.27 -0.41,-1.78 -0.87,-1.74 -0.08,0.01 -0.17,0.05 -0.23,0.09 -1.1,0.66 -1.67,4.01 -1.95,5.21 -0.26,1.13 -0.49,2.27 -0.7,3.41 -0.53,2.93 -0.97,5.91 -1.04,8.9 -0.1,3.89 0.37,9.56 4.46,11.41 1.75,0.79 3.71,1.24 5.61,1.5 2.27,0.3 4.63,0.35 6.91,0.21 0.93,-0.06 1.86,-0.15 2.78,-0.28 0.62,-0.09 1.28,-0.2 1.88,-0.38 1.54,-0.45 2.99,-0.74 4.31,-1.74 1.92,-1.46 2.64,-3.85 2.92,-6.15 0.25,-2.05 0.28,-4.13 0.17,-6.19 -0.24,-4.66 -1.18,-9.4 -2.4,-13.9 -0.15,-0.56 -0.39,-1.33 -0.75,-1.8 -0.08,-0.11 -0.24,-0.29 -0.39,-0.28 -0.48,0.04 -1.15,1.22 -1.34,1.64 -0.09,0.21 -0.3,0.34 -0.54,0.33 -0.23,-0.01 -0.43,-0.16 -0.49,-0.39 -0.13,-0.42 -0.34,-1 -0.62,-1.34 -0.04,-0.05 -0.16,-0.18 -0.24,-0.18 -0.18,0.02 -0.46,0.38 -0.55,0.51 -0.21,0.3 -0.42,0.7 -0.55,1.05 -0.09,0.22 -0.29,0.36 -0.53,0.35 -0.24,-0.01 -0.44,-0.16 -0.51,-0.39 -0.13,-0.42 -0.34,-1.02 -0.63,-1.36 -0.05,-0.05 -0.17,-0.19 -0.25,-0.19 -0.19,0.02 -0.47,0.38 -0.57,0.52 -0.22,0.31 -0.43,0.71 -0.57,1.07 -0.09,0.22 -0.29,0.36 -0.53,0.35 -0.24,-0.01 -0.43,-0.15 -0.51,-0.38 -0.15,-0.44 -0.37,-1.06 -0.67,-1.43 -0.03,-0.04 -0.17,-0.2 -0.23,-0.19 -0.19,0.02 -0.51,0.54 -0.6,0.69 -0.21,0.37 -0.4,0.83 -0.53,1.23 -0.07,0.24 -0.29,0.39 -0.54,0.39 -0.25,-0 -0.46,-0.17 -0.52,-0.41 -0.14,-0.5 -0.35,-1.19 -0.65,-1.61 -0.03,-0.04 -0.18,-0.23 -0.24,-0.22 -0.18,0.01 -0.49,0.47 -0.58,0.6 -0.21,0.34 -0.42,0.76 -0.55,1.14 -0.08,0.23 -0.29,0.37 -0.53,0.37 -0.24,-0.01 -0.44,-0.16 -0.51,-0.39z" />
    <path class="joyful_fil1"
      d="M12.17 3.03c-0.14,-0.48 -0.34,-1.06 -0.61,-1.48 -0.04,-0.06 -0.2,-0.29 -0.28,-0.31 -0.17,0.02 -0.49,0.54 -0.56,0.67 -0.2,0.36 -0.39,0.81 -0.51,1.2 -0.07,0.24 -0.28,0.39 -0.53,0.39 -0.25,0 -0.45,-0.15 -0.53,-0.39 -0.15,-0.5 -0.39,-1.2 -0.71,-1.62 -0.03,-0.04 -0.19,-0.23 -0.26,-0.22 -0.18,0.02 -0.48,0.48 -0.56,0.62 -0.2,0.35 -0.39,0.78 -0.51,1.16 -0.08,0.24 -0.3,0.39 -0.55,0.38 -0.25,-0.01 -0.46,-0.19 -0.51,-0.44 -0.06,-0.27 -0.41,-1.78 -0.87,-1.74 -0.08,0.01 -0.17,0.05 -0.23,0.09 -1.1,0.66 -1.67,4.01 -1.95,5.21 -0.26,1.13 -0.49,2.27 -0.7,3.41 -0.53,2.93 -0.97,5.91 -1.04,8.9 -0.1,3.89 0.37,9.56 4.46,11.41 1.75,0.79 3.71,1.24 5.61,1.5 2.27,0.3 4.63,0.35 6.91,0.21 0.93,-0.06 1.86,-0.15 2.78,-0.28 0.62,-0.09 1.28,-0.2 1.88,-0.38 1.54,-0.45 2.99,-0.74 4.31,-1.74 1.92,-1.46 2.64,-3.85 2.92,-6.15 0.25,-2.05 0.28,-4.13 0.17,-6.19 -0.24,-4.66 -1.18,-9.4 -2.4,-13.9 -0.15,-0.56 -0.39,-1.33 -0.75,-1.8 -0.08,-0.11 -0.24,-0.29 -0.39,-0.28 -0.48,0.04 -1.15,1.22 -1.34,1.64 -0.09,0.21 -0.3,0.34 -0.54,0.33 -0.23,-0.01 -0.43,-0.16 -0.49,-0.39 -0.13,-0.42 -0.34,-1 -0.62,-1.34 -0.04,-0.05 -0.16,-0.18 -0.24,-0.18 -0.18,0.02 -0.46,0.38 -0.55,0.51 -0.21,0.3 -0.42,0.7 -0.55,1.05 -0.09,0.22 -0.29,0.36 -0.53,0.35 -0.24,-0.01 -0.44,-0.16 -0.51,-0.39 -0.13,-0.42 -0.34,-1.02 -0.63,-1.36 -0.05,-0.05 -0.17,-0.19 -0.25,-0.19 -0.19,0.02 -0.47,0.38 -0.57,0.52 -0.22,0.31 -0.43,0.71 -0.57,1.07 -0.09,0.22 -0.29,0.36 -0.53,0.35 -0.24,-0.01 -0.43,-0.15 -0.51,-0.38 -0.15,-0.44 -0.37,-1.06 -0.67,-1.43 -0.03,-0.04 -0.17,-0.2 -0.23,-0.19 -0.19,0.02 -0.51,0.54 -0.6,0.69 -0.21,0.37 -0.4,0.83 -0.53,1.23 -0.07,0.24 -0.29,0.39 -0.54,0.39 -0.25,-0 -0.46,-0.17 -0.52,-0.41 -0.14,-0.5 -0.35,-1.19 -0.65,-1.61 -0.03,-0.04 -0.18,-0.23 -0.24,-0.22 -0.18,0.01 -0.49,0.47 -0.58,0.6 -0.21,0.34 -0.42,0.76 -0.55,1.14 -0.08,0.23 -0.29,0.37 -0.53,0.37 -0.24,-0.01 -0.44,-0.16 -0.51,-0.39z" />
    <path class="joyful_fil2"
      d="M3.69 28.8c0.55,0.62 1.21,1.13 2.01,1.49 1.75,0.79 3.71,1.24 5.61,1.5 2.27,0.3 4.63,0.35 6.91,0.21 0.93,-0.06 1.86,-0.15 2.78,-0.28 0.62,-0.09 1.28,-0.2 1.88,-0.38 1.54,-0.45 2.99,-0.74 4.31,-1.74 1.92,-1.46 2.64,-3.85 2.92,-6.15 0.05,-0.42 0.09,-0.83 0.13,-1.25l0.01 -0.07c0.12,-1.62 0.12,-3.26 0.04,-4.88 -0.02,-0.37 -0.04,-0.74 -0.07,-1.1l-0.02 -0.2c-0.33,-4.24 -1.21,-8.5 -2.31,-12.59 -0.15,-0.56 -0.39,-1.33 -0.75,-1.8 -0.08,-0.11 -0.24,-0.29 -0.39,-0.28l-0 0c1.07,4.18 1.86,8.52 2.08,12.81 0.11,2.13 0.08,4.29 -0.18,6.4 -0.33,2.65 -1.19,5.3 -3.4,6.98 -1.48,1.13 -2.98,1.45 -4.71,1.95 -0.66,0.19 -1.37,0.31 -2.04,0.41 -0.95,0.14 -1.92,0.23 -2.88,0.29 -2.37,0.15 -4.8,0.09 -7.15,-0.22 -1.6,-0.21 -3.24,-0.56 -4.77,-1.11z" />
    <circle class="joyful_fil3" cx="6.41" cy="22.25" r="2.51" />
    <circle class="joyful_fil3" cx="25.18" cy="22.25" r="2.51" />
    <path class="joyful_fil0" d="M11.23 19.2c1.28,13.62 8.44,13.18 9.34,0l-9.34 0z" />
    <path class="joyful_fil1"
      d="M12.1 20.14c0.1,0.81 0.23,1.66 0.41,2.5l6.88 0c0.16,-0.84 0.27,-1.69 0.35,-2.5l-7.64 0z" />
    <g>
      <path class="joyful_fil0"
        d="M17.96 10.98c0.48,-0.11 1.05,-0.17 1.54,-0.2 1.16,-0.06 2.34,0.03 3.47,0.33 0.38,0.1 0.6,0.49 0.51,0.87 -0.1,0.38 -0.49,0.6 -0.87,0.51 -0.97,-0.26 -2,-0.34 -3,-0.29 -0.42,0.02 -0.91,0.07 -1.33,0.16 -0.38,0.09 -0.76,-0.15 -0.85,-0.53 -0.09,-0.38 0.15,-0.76 0.53,-0.85z" />
      <path class="joyful_fil0"
        d="M8.64 10.98c0.48,-0.11 1.05,-0.17 1.54,-0.2 1.16,-0.06 2.34,0.03 3.47,0.33 0.38,0.1 0.6,0.49 0.51,0.87 -0.1,0.38 -0.49,0.6 -0.87,0.51 -0.97,-0.26 -2,-0.34 -3,-0.29 -0.42,0.02 -0.91,0.07 -1.33,0.16 -0.38,0.09 -0.76,-0.15 -0.85,-0.53 -0.09,-0.38 0.15,-0.76 0.53,-0.85z" />
      <path class="joyful_fil0"
        d="M8.15 17.25c-0.02,-0.45 0.07,-0.89 0.26,-1.3 0.25,-0.52 0.66,-0.96 1.14,-1.27 0.54,-0.35 1.19,-0.53 1.84,-0.49 1.69,0.1 2.53,1.56 2.74,3.09 0.05,0.39 -0.22,0.75 -0.6,0.8 -0.39,0.05 -0.75,-0.22 -0.8,-0.6 -0.11,-0.81 -0.47,-1.81 -1.42,-1.87 -0.84,-0.05 -1.79,0.68 -1.74,1.57 0.02,0.39 -0.28,0.73 -0.67,0.75 -0.39,0.02 -0.73,-0.28 -0.75,-0.67z" />
      <path class="joyful_fil0"
        d="M17.44 17.25c-0.02,-0.45 0.07,-0.89 0.26,-1.3 0.25,-0.52 0.66,-0.96 1.14,-1.27 0.54,-0.35 1.19,-0.53 1.84,-0.49 1.69,0.1 2.53,1.56 2.74,3.09 0.05,0.39 -0.22,0.75 -0.6,0.8 -0.39,0.05 -0.75,-0.22 -0.8,-0.6 -0.11,-0.81 -0.47,-1.81 -1.42,-1.87 -0.84,-0.05 -1.79,0.68 -1.74,1.57 0.02,0.39 -0.28,0.73 -0.67,0.75 -0.39,0.02 -0.73,-0.28 -0.75,-0.67z" />
    </g>
  </g>
</g>
</svg>
      )
    }
  }
});
export default Joyful;