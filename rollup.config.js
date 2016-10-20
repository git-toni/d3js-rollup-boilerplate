import node from "rollup-plugin-node-resolve";
import sass from 'rollup-plugin-sass';

  //output: 'bundle.css'
  //output: function (styles, styleNodes) {
  //  writeFileSync('build/bundle.css', styles)
  //}
let scssOpt = { // Default behaviour is to write all styles to the bundle destination where .js is replaced by .css
  output: "build/bundle.css"
}

export default {
  entry: "src/index.js",
  format: "umd",
  moduleName: "d3",
  plugins: [
    sass(scssOpt),
    node()
  ],
  dest: "build/d3.js"
};
