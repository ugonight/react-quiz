cd ReactUI
call npm run build
cd .. 
rd /s /q "FrontServer/public"
mkdir "FrontServer/public"
xcopy /e "ReactUI/build" "FrontServer/public"