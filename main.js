// הצהרה על מספרים
var num1 = 2;
var num2 = 2;

// תרגיל 1

// צרו 2 משתנים המכילים מספר כלשהו..
// אם 2 המספרים שווים , אני אדפיס לקונסול BOOM
// אם המספרים לא שווים, אני אדפיס לקונסול TRY AGAIN.
num1 === num2 ? console.log("BOOM") : console.log("TRY AGAIN");


// תרגיל 2

//  צרו 2 משתנים והדפיסו לקונסול את הסכום של שניהם (חברו אותם)

console.log(num1+num2);

// תרגיל 3

//  צרו 2 משתנים והדפיסו לקונסול את המכפלה של שניהם.
console.log(num1*num2);

// בגלל שיש 3 תרגילים שצריך להצהיר על 2 מספרים
// אז הצהרתי עליהם בהתחלה ל-3 התרגילים הראשונים


// תרגיל 4

// צרו משתנה שמכיל מספר
// שמייצג יום בשבוע ( 1 עבור יום ראשון , 2 עבור יום שני , 7 עבור שבת)
// ואז הדפיסו הודעה בהתאם לאותו יום.
// אם היום יום ראשון, הדפיסו good week
// אם היום הוא : שני/שלישי/ רביעי : הדפיסו good day
// אם היום הוא חמישי/שישי/שבת הדפיסו : happy weekend !

var day = 1;

if (typeof(day) == 'string'){
    day = +(day);
}

if (day === 1){
    console.log("good week");
}
else if (day === 2 || day === 3 || day === 4){
    console.log("good day");
}
else{
    console.log("happy weekend !");
}





// תרגיל 5

// כתוב משתנה שמכיל מספר שמייצג יום בחודש.( מ1 עד 31)
// אם התאריך הוא 1 לחודש : אני אדפיס good month
// אם התאריך הוא בין 2-10 לחודש אני אדפיס : start work
// אם התאריך הוא 10 לחודש אני אדפיס : get salary
// אם התאריך הוא בין 11-20 לחודש אני אדפיס : BE HAPPY
// אם התאריך הוא בין 20-30 לחודש אני אדפיס: the end
// אם התאריך הוא 31 לחודש אני אדפיס : BOOM BOOM

var day = 1;


if (typeof(day) == 'string'){
    day = +(day);
}
if (day === 1){
    console.log("good month")
}
else if (day >= 2 || day < 10){
    console.log("start work")
}
else if (day === 10){
    console.log("get salary")
}
else if (day >= 11 || day < 19){
    console.log("BE HAPPY")
}
else if (day >= 20 || day <= 30){
    console.log("the end")
}

else{
    console.log("BOOM BOOM")
}



// תרגיל 6

// כתבו משתנה שמכיל שם של חג כ string
// אם השם הוא purim – אני אדפיס : happy purim
// אם השם הוא passover- אני אדפיס : clear home
// אם השם הוא shavoout – אני אדפיס – eat milk
// אם השם הוא suckot – אני אדפיס build sucka

var holyday = 'suckot';

if (holyday === 'purim'){
    console.log("happy purim")
}
else if (holyday === 'passover'){
    console.log("clear home")
}
else if (holyday === 'shavoout' ){
    console.log("eat milk")
}
else if (holyday === 'suckot' ){
    console.log("build sucka")
}


// תרגיל 7

// בתחרות זריקת כדור המנצח הוא מי שזורק כדור למרחק הגדול ביותר.
// הגדירו 2 שחקנים, לכל שחקן יש שם של משתנה שמכיל את שמו ושם של משתנה שמכיל את התוצאה, למשל :
// player1_name = 'shlomi'
// player1_score = 60;
// לבסוף הדפיסו את שם השחקן שזרק למרחק הגדול ביותר, ואת המרחק אליו הוא זרק.

var player1_name = 'shlomi'
var player2_name = 'mani'

var player1_score = 90;
var player2_score = 90;

if (player1_score > player2_score){
    console.log(player1_name, player1_score)
}
else if(player1_score < player2_score){
    console.log(player2_name, player2_score)
}
else{
    console.log('it\'s equal' )
}



// תרגיל 8

// כתבו משתנה שמכיל מספר, והדפיסו האם הערך במשתנה הוא מספר זוגי או לא.

var num1 = 1;

num1 % 2 === 0 ? console.log(true) : console.log(false);

// תרגיל 9

// הגדירו 2 משתנים שבשניהם יש מספר, והדפיסו את המספר הגדול יותר מבינהם.

// num1 מוצהר בסעיף הקודם

var num2 = 2;

num1 > num2 ? console.log(num1) : console.log(num2);

// תרגיל 10

// חישוב ממוצע:
// הגדירו 7 משתנים, לכל אחד מהם יש מספר כלשהו.
// לבסוף הדפיסו לקונסול את הממוצע של כל המספרים.

// 2 המספרים הראשונים מוצהרים בתרגיל 8 ו-9 שגם נגע במספרים
var num3 = 3;
var num4 = 4;
var num5 = 5;
var num6 = 6;
var num7 = 7;


aver = (num1 + num2 + num3 + num4 + num5 + num6 + num7  ) / 7;
console.log(aver);


// תרגיל 11

// מדד כושר:
// הגדירו אדם באמצעות 3 משתנים. משתנה אחד מכיל את שם הבן אדם, משתנה שני מכיל את גילו
// משתנה שלישי מכיל את המספר ק"מ שהוא רץ
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 30 ל 50 ק"מ – יודפס לי "אתה בכושר מעולה + השם שלי + הגיל שלי".
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 10 ל 30 ק"מ – יודפס לי "אתה בכושר טוב + השם שלי + הגיל שלי".
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 0 ל 10 ק"מ – יודפס לי "חייב להשתפר + השם שלי + הגיל שלי ".
// אם הגיל שלי הוא בין 18-30 ורצתי בין 25-50 ק"מ – יודפס לי " אתה בכושר מעולה + השם שלי + הגיל שלי "
// אם הגיל שלי הוא בין 18-30 ורצתי פחות מ 25 ק"מ – יודפס לי " יש מקום לשיפור + השם שלי + הגיל שלי ".

var name = 'shlomi' ;
var age = '45';
var run = '42' ;


if (typeof(age) == 'string' ||  typeof(run) == 'string'){
    age = +(age);
    run = +(run);
}
if ((age >=30 && age <= 50) && (run >=30 && run <= 50)){
    console.log('You are in great shape' , name, age)
}
else if ((age >=30 && age <= 50) && (run >=10 && run <= 29)){
    console.log('You are in good shape' , name, age)
}
else if ((age >=30 && age <= 50) && (run >=0 && run <= 9)){
    console.log('must improve' , name, age)
}
else if ((age >=18 && age <= 30) && (run >=25 && run <= 50)){
    console.log('You are in great shape' , name, age)
}
else if ((age >=18 && age <= 30) && ( run <= 25)){
    console.log('there is room for improvement' , name, age)
}




// תרגיל 12

// צרו משתנה שמכיל שעה בין 5 ל 24
// בין השעות 5 בבוקר ל 11 בבוקר כולל יודפס לי "בוקר טוב".
// ביום השעות 12 בצהרים עד 17 (כולל) יודפס לי "צהרים טובים"
// בין השעות 18:00 ל 23 יודפס לי "ערב טוב".

var hour = 5;

if (typeof(hour) == 'string'){
    hour = +(hour);
}
if (hour >= 5 || hour <= 11){
    console.log("Good Morning")
}
else if (day >= 12 || day <= 17){
    console.log("good afternoon")
}
else if (day >= 18 || day <= 23){
    console.log("good evening")
}
else{
    console.log("Unknown hour")
}