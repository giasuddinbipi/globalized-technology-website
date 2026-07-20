@echo off
echo Setting npm to the public registry...
npm config set registry https://registry.npmjs.org/
npm config delete proxy
npm config delete https-proxy
npm cache verify
echo.
echo Registry is now:
npm config get registry
echo.
echo Run npm install next.
pause
