module.exports = function (plugins) {
  return {
    plugins: [
      plugins['rollup.nodeResolve']({
        jsnext: true,
        main: true
      }),
      plugins['rollup.babel'](),
      plugins['rollup.commonjs']()
    ]
  }, {
    format: 'iife'
  };
};
