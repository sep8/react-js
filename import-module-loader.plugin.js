function ImportModuleLoader (){}

const pluginName = 'ImportModuleLoader'
ImportModuleLoader.prototype.apply = function(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: pluginName,
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
          additionalAssets: true,
        },
        (assets) => {
          Object.keys(assets).map(async (name) => {
            const { info, source } = compilation.getAsset(name)
            console.log(name)
          })
        }
      )
  })
}

module.exports = ImportModuleLoader
