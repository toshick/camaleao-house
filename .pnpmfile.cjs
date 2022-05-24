function readPackage(pkg, context) {
  if (pkg.name === 'camaleaohouse') {
    pkg.dependencies['webpack'] = '^4.36.0';
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
