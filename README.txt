json-server db.json --static ./some-other-dir

python3 -m http.server 8000 --bind 127.0.0.1
в локальной папке

git init
git config --local user.name "Pupkin"
git config --global user.name "Pupkin" если сделать для всех будущих проектов и забыть
git config --local user.email "bebeto123@live.ru"
git status
git add -A    // добавит все содержимое
git add index.html   // по файлу

git commit -a -m"комментарий"     // контрольная точка 

git add -A

git commit -a -m"комментарий"     // контрольная точка 2 и т.д.

git log


Для хранения на гитхабе:
заходим в профиль, тыкаем NEW
Ничего не добавляем кроме имени и выводим средний вариант в консоль
git remote add origin https://github.com/bebeto123g/test_git_udemi.git
git branch -M master
git push -u origin master

git commit -a -m "комментарий"

git push  // добавляем сразу на хаб

через три звезды установил github расширения, сделал токен через настройки, потом git push и снова через три звезды ввел токен и установл gnome-keying? и вроде даже заработало :Ъ


Вы можете сохранить свои учетные данные и не вводить постоянно логин и пароль

$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>

Для работы с разных устройств:
к примеру!
git clone https://github.com/bebeto123g/medium.git

git add -A
git commit -a -m"типа сделали изменения на другом устройстве"

git pull - синхронизация с github
