const fs = require('fs');
const fileName = 'fileToIdMap.txt';
const commonFileToIdMap = {};

fs.readFileSync(fileName, 'utf8').toString().split('\n').forEach((content) => {
  const [modulePath, moduleId] = content.split(':');
  commonFileToIdMap[modulePath] = parseInt(moduleId);
});;

function getParsedModulePath(path) {
  const projectRootPath = __dirname;
  return path.substr(projectRootPath.length + 1);
}

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  serializer: {
    createModuleIdFactory: function () {
      const businessFileToIdMap = {};
      let nextId = Object.keys(commonFileToIdMap).length;
      return function (path) {
        const modulePath = getParsedModulePath(path);
        let moduleId = commonFileToIdMap[modulePath] || businessFileToIdMap[modulePath];
        if (typeof moduleId !== 'number') {
          moduleId = nextId++;
          businessFileToIdMap[modulePath] = moduleId;
        }
        return moduleId;
      }
    },
    processModuleFilter: function (module) {
      const modulePath = getParsedModulePath(module.path);
      if (typeof commonFileToIdMap[modulePath] !== 'number') {
        console.log('processModuleFilter in business output module path', modulePath);
        return true
      }
      return false;
    },
    getPolyfills: function () {
      return [];
    }
  },

}
