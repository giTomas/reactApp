const config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },
   resolve: {
     extensions: ['', '.js', '.jsx']
   },
   module: {
      loaders: [
         {
            test:  /\.jsx?$/,
            exclude: /node_modules/,
            // loaders: [ 'babel-loader?presets[]=react,presets[]=es2015'],
            loader: 'babel',

            query: {
              presets: ['es2015', 'react', 'stage-0']
            }
         }
      ]
   }

};

module.exports = config;
