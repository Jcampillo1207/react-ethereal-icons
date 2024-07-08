import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const variants = ["ethereal", "solid", "outline"];

export default variants.map((variant) => ({
  input: `src/${variant}/index.ts`,
  output: [
    {
      file: `dist/${variant}/index.cjs.js`,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: `dist/${variant}/index.esm.js`,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: ["react", "react-dom"],
}));
