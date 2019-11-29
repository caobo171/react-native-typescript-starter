// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     require.resolve('babel-plugin-module-resolver'),
//     {
//       root: ["./"],
//       alias: {
//         "@components": "./src/components"
//       }
//     }
//   ]
// };


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      'root': ['./'],
      'alias': {
        '@': './src/',
        '@base/ui-kit': './packages/base-ui-kit',
        '@base/post': './packages/base-post',
        '@components': './src/components/',
        '@store': './src/store/',
      }
    }]
  ],
};
