module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/script.ts",
    output: { filename: "bundle.js", path: __dirname + "/dist" },
    resolve: { extensions: [".ts", ".js"] },
    module: {
        rules: [{ test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }],
    },
};
