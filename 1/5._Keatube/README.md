# KeaTUBE

## [PM2] How to start the app on AWS EC2

> $ pm2 start app.js

## [PM2] How to automatically restart app when server restarts

> $ pm2 startup
which outputs a command that you need to run in the terminal

## [PM2] Freeze a process list on reboot via:

> $ pm2 save

## [PM2] Remove init script via:

> $ pm2 unstartup systemv

## [PM2] List active apps on PM2

> $ pm2 list

## [PM2] Monitor the apps in PM2

> $ pm2 monit

## List of added features

- Upload of video
- Automatic thumbnails
- Commenting videos
- Viewcount
- Image Recognition via TensorFlow mobilenet to define tags relevant for each video
- Hosted on AWS EC2
- Run with PM2 to ensure maximal uptime and persistence across reboot and system failure

