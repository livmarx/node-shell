const pwd = process.stdin.on('data', data => {
  if (data.toString().trim() === 'pwd') {
    process.stdout.write(`Current directory: ${process.cwd()}`);
  }
  process.stdout.write('\nprompt > ');
});

module.exports = pwd;
