git init
git config --local user.name "Pupkin"
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