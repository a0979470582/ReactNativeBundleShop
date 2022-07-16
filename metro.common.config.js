const fs = require('fs');

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
      const fileToIdMap = {};
      const projectRootPath = __dirname;
      let nextId = 0;
      const fileName = "fileToIdMap.txt";
      if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
      }

      return function (path) {
        const modulePath = path.substr(projectRootPath.length + 1);
        let moduleId = fileToIdMap[modulePath];
        if (typeof moduleId !== 'number') {
          moduleId = nextId++;
          fileToIdMap[modulePath] = moduleId;
          fs.appendFileSync(fileName, `${modulePath}:${moduleId}\n`);
        }
        return moduleId;
      };
    },
  },
};
