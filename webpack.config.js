module.exports = {
	entry: __dirname+'/src/index.jsx',
	mode: 'development',
	output: {
		path: __dirname+'/public/js',
		filename: 'bundle.js'
	},
	watch: true,
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env'],
							['@babel/preset-react']
						]
					}
				}
			}, {
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: false,
						},
					},
				],
			},
		]
	}
}