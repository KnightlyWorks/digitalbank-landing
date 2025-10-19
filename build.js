import * as esbuild from "esbuild";

const isDev = process.argv.includes("--watch");

// ==========================================
// JavaScript Bundle Config
// ==========================================
const jsConfig = {
  entryPoints: ["src/js/main.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  format: "esm",
  sourcemap: isDev,
  minify: !isDev,
  target: ["es2020"],
};

// ==========================================
// CSS Bundle Config (AOS)
// ==========================================
const cssConfig = {
  entryPoints: ["node_modules/aos/dist/aos.css"],
  outfile: "dist/aos.css",
  minify: !isDev,
  loader: { ".css": "css" },
};

// ==========================================
// Build or Watch
// ==========================================
if (isDev) {
  // Watch mode
  const jsCtx = await esbuild.context(jsConfig);
  const cssCtx = await esbuild.context(cssConfig);

  await Promise.all([jsCtx.watch(), cssCtx.watch()]);

  console.log("👀 Watching JS and CSS for changes...");
} else {
  // Build mode
  await Promise.all([esbuild.build(jsConfig), esbuild.build(cssConfig)]);

  console.log("✅ Build complete!");
  console.log("   - dist/bundle.js");
  console.log("   - dist/aos.css");
}
