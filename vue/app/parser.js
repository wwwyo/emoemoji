const fs = require('fs');
const path = require('path');

const main = async () => {
  const paths = parseDirs('public/img/slack')[0];
  fs.writeFileSync('src/paths.json', JSON.stringify(paths));
  console.log('parser.js success');
};

const parseDirs = (dirpath) => {
  // dirents:ディレクトリエントリ
  const dirents = fs.readdirSync(dirpath, { withFileTypes: true });

  const dirs = {};
  const results = [];
  for (const dirent of dirents) {
    const fp = path.join(dirpath, dirent.name);
    if (dirent.isDirectory()) {
      dirs[dirent.name] = parseDirs(fp);
    } else if (dirent.name === '.DS_Store') {
      continue;
    } else {
      results.push(fp.replace('public/', ''));
    }
  }

  if (Object.keys(dirs).length) {
    results.push(dirs);
  }

  return results;
};

main();
