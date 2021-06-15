const exec = require('child_process').exec;
const find = require('find-process');

const stopOHM = () => {
    //checking all processes 
  const isRunning = (query, cb) => {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
      case 'win32':
        cmd = `tasklist`;
        break;
      case 'darwin':
        cmd = `ps -ax | grep ${query}`;
        break;
      case 'linux':
        cmd = `ps -A`;
        break;
      default:
        break;
    }

    //finding process ID for OpenHardwareMonitor
    exec(cmd, (err, stdout, stderr) => {
      cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
  };

  //checking if OpenHardwareMonitor process is running
  isRunning('OpenHardwareMonitor.exe', (status) => {
    // console.log(status); // true|false
    if (status) {
      find('name', 'OpenHardwareMonitor.exe', true).then(function (list) {
        // console.log(
        //   'there are %s OpenHardwareMonitor process(es)',
        //   list.length
        // );

        list.map(function (item) {
          exec(`TSKILL ${item.pid}`, (err, stdout, stderr) => {
            if (err) {
              // node couldn't execute the command
              return err;
            }
          });
        });
      });
    }
  });
};

module.exports = { stopOHM };
