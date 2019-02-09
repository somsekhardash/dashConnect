const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '@actions': path.resolve(__dirname, "src/actions"),
            '@components': path.resolve(__dirname, "src/components"),
            '@containers': path.resolve(__dirname, "src/containers"),
            '@models': path.resolve(__dirname, "src/models"),
            '@reducers': path.resolve(__dirname, "src/reducers"),
            '@store': path.resolve(__dirname, "src/store"),
        }
    },
    devServer: {
        port: 2018,
        open: true,
        historyApiFallback: true
    },    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};