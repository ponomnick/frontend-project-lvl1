### Test
[![Actions Status](https://github.com/ponomnick/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/ponomnick/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dffe4c6d8d29328625a8/maintainability)](https://codeclimate.com/github/ponomnick/frontend-project-lvl1/maintainability)
[![Linter Status](https://github.com/ponomnick/frontend-project-lvl1/workflows/Linter/badge.svg)](https://github.com/ponomnick/frontend-project-lvl1/actions)


<a href="https://github.com/Zelurkcin" rel="nofollow">
    <img src="img/logo.png" alt="nZp logo" title="nZp" style="max-width:100%;" height="50" align="right">
</a>

# Console Games:   



<h3 align = "center">«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает математические вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.</h4>

<h3 align = "center">:video_game:</h3>


## Содержание
____
____
### <a href="#install_game">**1. Установка игр**</a>
### <a href="#game">**2. Игры :**</a>
### <a href="#game-even">2.1 Проверка на чётность.</a>
### <a href="#game-calc">2.2 Калькулятор.</a>
### <a href="#game-gcd">2.3 Определение наибольшего общего делителя.</a>
### <a href="#game-progression">2.4 Прогрессия.</a>
### <a href="#game-prime">2.5 Определение простого числа.</a>
    
___________
___________
### <h3 id="install_game" align = "center">**1. Установка игр:**</h3>
:black_medium_small_square: Установите Node.js.  
:black_medium_small_square: Склонируйте репозитарий с играми командой 
_git clone_ .  
:black_medium_small_square: Перейдите в директорию _frontend-project-lvl1_.  
 :black_medium_small_square: **_npm ci_**  - команда выполняет чистую установку всех зависимостей.    
:black_medium_small_square:  **_npm link_** - команда для установки пакета из операционной системы.  
:black_medium_small_square: Запуск конкретной игры ( команды в описании игр).

   

#### <h4 id="game" align = "center">**2. Игры:**</h4>     

#### <h4 id="game-even" align = "center">**Игра: Проверка на чётность**</h4>
    
Запуск игры осуществляется командой **_brain-even_**.  

Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes

В случае, если пользователь даст неверный ответ, необходимо завершить игру и вывести сообщение:

'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!

В случае, если пользователь ввел верный ответ, нужно отобразить:

Correct!

и приступить к следующему числу.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:

Congratulations, Bill!

Вывод должен получиться следующий:

$ brain-even

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!

Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.



```
[Demo brain-even](https://asciinema.org/a/486845)

<a href="https://asciinema.org/a/486845?autoplay=1"><img src="https://asciinema.org/a/486845.png" width="auto"/></a>

#### <h4 id="game-calc" align = "center">**Игра: Калькулятор**</h4>
 
 Запуск игры осуществляется командой **_brain-calc._**

 Суть игры в следующем: пользователю показывается случайное математическое выражение ( "+", "-", "*" ), например 35 + 16, которое нужно вычислить и записать правильный ответ.

Вывод должен получиться следующий:
```
$ brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!


В случае, если пользователь даст неверный ответ, необходимо вывести:

Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!

и завершить игру.
```
[Demo brain-calc](https://asciinema.org/a/487225)

<a href="https://asciinema.org/a/487225?autoplay=1"><img src="https://asciinema.org/a/487225.png" width="auto"/></a>


#### <h4 id="game-gcd" align = "center">**Игра: Определение наибольшего общего делителя**</h4>

Запуск игры осуществляется командой **_brain-gcd._**

Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Вывод должен получиться следующий:
```
$ brain-gcd

Welcome to the Brain Games! 
May I have your name? Sam 
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!

В случае, если пользователь даст неверный ответ, необходимо вывести:

Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```
[Demo brain-gcd](https://asciinema.org/a/488176)

<a href="https://asciinema.org/a/488176?autoplay=1"><img src="https://asciinema.org/a/488176.png" width="auto"/></a>


#### <h4 id="game-progression" align = "center">**Игра: Прогрессия**</h4>

Запуск игры осуществляется командой **_brain-progression_**.  

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5-ти чисел!
Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом).

Пример:
```
$ brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!

В случае, если пользователь даст неверный ответ, необходимо вывести:

Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```
[Demo brain-progression](https://asciinema.org/a/488198)

<a href="https://asciinema.org/a/488198?autoplay=1"><img src="https://asciinema.org/a/488198.png" width="auto"/></a>

#### <h4 id="game-prime" align = "center">**Игра: Определение простого числа**</h4>

Запуск игры осуществляется командой **_brain-prime_**. 

Пример:
```
$ brain-prime

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!

Весь вывод и логика в случае правильного и неправильного ответа повторяют предыдущие шаги.
```
[Demo brain-prime](https://asciinema.org/a/488204)  

<a href="https://asciinema.org/a/488204?autoplay=1"><img src="https://asciinema.org/a/488204.png" width="auto"/></a>
