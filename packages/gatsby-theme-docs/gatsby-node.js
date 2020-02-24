const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const withDefaults = require('./utils/default-options');

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();

  // get content full path
  const { contentPath } = withDefaults(options);
  const dir = path.join(program.directory, contentPath);

  // Create directory if not exists
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
};
