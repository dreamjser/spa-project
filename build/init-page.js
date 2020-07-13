const fs = require('fs');
const path = require('path');
const rm = require('rimraf');
const program = require('commander');
const readline = require('readline');
const copyFile = require('copy-template-dir');

program
  .option('-p, --path <string>', 'input path')
  .option('-d, --del <string>', 'delete file')
  .parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const del = program.del;
const paths = program.path;

const srcPath = path.join(process.cwd(), 'template/view');
const dstPath = path.join(process.cwd(), `src/views/${paths}`);
const srcPath2 = path.join(process.cwd(), 'template/router');
const dstPath2 = path.join(process.cwd(), `src/router/${paths}`);
const delPath = `./src/views/${del}`;
const delPath2 =  `./src/router/${del}`;

console.log(delPath);

const delRouter = (del) => {
  let content = fs.readFileSync(
    path.join(process.cwd(), 'src/router/index.js'),
    'utf-8'
  );

  content = content.replace(
    new RegExp(`import \\w+ from '\./${del}(/\\w+)*';\n`, 'g'),
    ''
  );

  content = content.replace(
    new RegExp(`\\s{4}\.\.\.${del.replace('/', '')}\\w*,\n`, 'g'),
    ''
  );

  fs.writeFile(
    path.join(process.cwd(), 'src/router/index.js'),
    content,
    () => {}
  );
}

// 删除文件
if (del) {
  rm(delPath, (err) => {
    if(err) {
      throw err;
    }
    console.log('delete view success!');
  });
  rm(delPath2, (err) => {
    if(err) {
      throw err;
    }
    console.log('delete router success!');
  });

  delRouter(del);
  return;
}

// 添加文件
if (!paths) {
  console.log('缺少路径参数：npm run init-page xxx');
  return;
}

const replaceRouter = (paths, cb) => {
  let name = paths.replace(/[-/]/g, '');
  let content = fs.readFileSync(
    path.join(process.cwd(), 'src/router/index.js'),
    'utf-8'
  );

  if (content.indexOf(`import ${name} from './${paths}';`) >= 0) {
    return;
  }

  content = content.replace(
    /(Vue.use\(Router\);)/g,
    `import ${name} from './${paths}';\n$1`
  );

  content = content.replace(/(routes: \[)/g, `$1\n    ...${name},`);

  fs.writeFile(
    path.join(process.cwd(), 'src/router/index.js'),
    content,
    cb
  );
};


rl.question('input title: ', answer => {
  copyFile(srcPath, dstPath, { title: answer }, r => {
    if (!r) {
      console.log('view create success!');
      return;
    }
    console.log(r);
  });

  copyFile(
    srcPath2,
    dstPath2,
    {
      paths: paths,
      title: answer
    },
    r => {
      if (!r) {
        console.log('router create success!');
        return;
      }
      console.log(r);
    }
  );

  replaceRouter(paths, () => {
    console.log('process exit');
  });
});
