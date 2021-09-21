1. open terminal:
2. npm init
3. npm i 
   HINWEIS: package.json ("start": script)
4. erstelle eine .env datei und schreibe folgendes rein:
   PORT = 5000
5. erstelle eine .gitignore und schreibe folgendes rein:
   node_modules 
   .env
   package-lock.json
6. starte den Server mit npm start



auf github.com 
1. erstelle ein neues repository und gebe ihm einen namen 

Git code von github.com pullen:
1. git init
2. git add .
3. git commit -m "first pull"
4. git remote add origin https://github.com/uppzz/backend-c4h.git
5. git pull origin main      
ODER 
5.1 git pull origin <branch name>


Git: Code nach github.com pushen
1. git init
2. git add .
3. git commit -m "message"
4. git remote add origin <repository link>
5. git push -u origin master

neuen branch auf github.com erstellen und Daten speichern speichern:
1. git checkout -b <new branch name>
2. (1malig) git push -u origin <new branch name>
2.1 (für spätere pushes) git push oder git pull


branches miteinander verbinden (sollte ein unterbranch in github.com schon vorhanden sein): (Die branches können auch verschieden heissen.)
git fetch 
git branch --set-upstream-to=origin/<github online branch name> <lokaler branch name>

switch branch:
git switch <branch name>
