const input = process.argv.slice(2);

for (let item of input) {

  let itemInSec = item*1000;
  setTimeout(() => {
    process.stdout.write('\x07');  
  }, itemInSec);

};