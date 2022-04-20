# graphite-monitor-spa
This time, made with Vue!  Graphite JSON output to custom Vue.js frontend.

current build process:

copy repo:
  git clone --branch workingBranch https://github.com/DevLab2020/graphite-monitor-spa.git

change directory to cloned repo:
  cd graphite-monitor-spa

run application:
  npx parcel src/index.html --host 0.0.0.0 --port 8080

view app:
  open browser and visit http://localhost:8080 (untested)
  (tested in development: if you know local ip, you can use --host 192.168.x.y and visit that ip:port in browser.  On simple networks, 0.0.0.0 and localhost /should/ work)
