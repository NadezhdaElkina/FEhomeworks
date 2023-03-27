

 /* задание 1 
 Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
 Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив*/
  
/*  const chuvaki = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
     
 const bestChuvaki = chuvaki.slice(2, 5);
     
 console.log(bestChuvaki);  */


     
 /* задание 2
 Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
 Переставить "Janett", "Franz" в начало массива */
 
 
/* const removedFromChuvaki = chuvaki.splice(5, 2);
 
 const newChuvaki = removedFromChuvaki.concat(chuvaki);
 
 console.log(newChuvaki); */
 
 
 /* задание 3
 Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
 Заменить "Eddie", "Janett" на "Oleg","Valerchik"*/
 
 /* chuvaki.splice(4, 2, 'Oleg', 'Valerchik');
 
 console.log(chuvaki); */
 


 /* задание 4  
 Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
 "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")*/
 
/*  chuvaki.reverse();
 
 chuvaki.fill('Mitrofan', 0, 4);
 
 console.log(chuvaki); */




 /*задание 5
 Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
 ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
 Взять из второго массива все имена начина с "Aristarkh" (включительно) 
 и добавить их в 1ый массив (не должно получится двумерного массива)*/

 
/*const superChuvaki = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

superChuvaki.splice(0, 2);

megaChuvaki = chuvaki.concat(superChuvaki);

console.log(megaChuvaki);*/



 
 /* задание 5 */
 
 /* Дана строка 'Мама мыла раму' С помощью prompt() получите строку. 
 Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например: 
   prompt() ===>>> 'машину'
  ‘Мама мыла машину’
   prompt() ===>>> 'рябину'
  ‘Мама мыла рябину’
   prompt() ===>>> 'картину'
  ‘Мама мыла картину’*/
 
/* let poemString = 'Мама мыла раму';
const poemArr = poemString.split(' ');

while(true) {
  let newPoemWord = prompt('Please, enter new word for poem');
  if(newPoemWord === null){
    break;
  }
  poemArr[2] = newPoemWord;
  
  poemString = poemArr.join(' ');
  console.log(poemString);
  alert(`Вот новое стихотворение с вашим словом:  ${poemString}`);
}
 */
