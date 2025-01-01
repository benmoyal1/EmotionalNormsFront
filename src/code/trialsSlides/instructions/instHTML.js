const instJsonHTML = {
  welcome: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
      <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl;">
        שלום, ותודה לך על השתתפותך במחקר היום!<br><br>
        המחקר הוא חלק ממחקר גדול יותר שנערך כבר למעלה משנה במספר מקומות ברחבי הארץ.<br><br>
        במחקר זה בו נבחנים תהליכים של אינטליגנציה רגשית וחברתית, כבר לקחו חלק משתתפים רבים.<br><br>
        הם דירגו את התגובה הרגשית שלהם למגוון של תמונות המעוררות רגש.<br><br>
      </div>
    `,
  welcome_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
          שלום, ותודה לך על השתתפותך במחקר היום!<br><br>
          המחקר הוא חלק ממחקר גדול יותר שנערך כבר למעלה משנה במספר מקומות ברחבי הארץ.<br><br>
          במחקר זה בו נבחנים תהליכים של אינטליגנציה רגשית וחברתית, כבר לקחו חלק משתתפים רבים.<br><br>
        הם דירגו את התגובה הרגשית שלהם למגוון של תמונות המעוררות רגש.<br><br>
          כדי להמשיך, יש ללחוץ על מקש הרווח.
        </div>
      `,

  instructions_2_stage_1_female: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
    
  <div>
      במטלה שתבצעי היום, יוצגו בפנייך תמונות המעוררות רגש.<br>
      בחלק מהמקרים תתבקשי לדרג את תגובתך הרגשית לתמונה, כפי שעשו נבדקים קודמים.<br>
      לשם כך, יופיע מתחת לכל תמונה סולם רציף בין (100-) ל-(100+), בדומה לסולם הזה:<br><br>
      <div style="width: 100%; display: flex; align-items: right;margin: 20px;">
        <img src="./src/data/instructions/slider_example.png" alt="Slider Example" style="width: 80%;">
      </div>
      דירוג של 100 פירושו שהתמונה גורמת לך להרגיש טוב באופן קיצוני,<br>
      דירוג של (100-) פירושו שהתמונה גורמת לך להרגיש רע באופן קיצוני.<br>
      דירוג של 0 פירושו שהתמונה לא גורמת לך להרגיש טוב, וגם לא גורמת לך להרגיש רע.<br><br>
      כדי לסמן את הדירוג שלך, עלייך להזיז בעזרת העכבר את הסמן שבסקאלה אל המספר שמשקף את תגובתך שלך לתמונה בצורה הטובה ביותר.<br><br>
      <div style="display: flex; justify-content: flex-end;">
      </div>
      לאחר שתדרגי כיצד הרגשת, הדירוג יופיע לפנייך על מסך נפרד.
    </div>
  </div>
`,

  instructions_2_stage_1_female_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
    <div>
      במטלה שתבצעי היום, יוצגו בפנייך תמונות המעוררות רגש.<br>
      בחלק מהמקרים תתבקשי לדרג את תגובתך הרגשית לתמונה, כפי שעשו נבדקים קודמים.<br>
      לשם כך, יופיע מתחת לכל תמונה סולם רציף בין (100-) ל-(100+), בדומה לסולם הזה:<br><br>
      <div style="width: 100%; display: flex; align-items: right;margin: 20px;">
        <img src="./src/data/instructions/slider_example.png" alt="Slider Example" style="width: 80%;">
      </div>
      דירוג של 100 פירושו שהתמונה גורמת לך להרגיש טוב באופן קיצוני,<br>
      דירוג של (100-) פירושו שהתמונה גורמת לך להרגיש רע באופן קיצוני.<br>
      דירוג של 0 פירושו שהתמונה לא גורמת לך להרגיש טוב, וגם לא גורמת לך להרגיש רע.<br><br>
      כדי לסמן את הדירוג שלך, עלייך להזיז בעזרת העכבר את הסמן שבסקאלה אל המספר שמשקף את תגובתך שלך לתמונה בצורה הטובה ביותר.<br><br>
      <div style="display: flex; justify-content: flex-end;">
      </div>
      לאחר שתדרגי כיצד הרגשת, הדירוג יופיע לפנייך על מסך נפרד.<br><br>
      כדי להמשיך, יש ללחוץ על מקש הרווח.
    </div>
  </div>
`,
  instructions_2_stage_1_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
    <div>
      במטלה שתבצע היום, יוצגו בפניך תמונות המעוררות רגש.<br>
      בחלק מהמקרים תתבקש לדרג את תגובתך הרגשית לתמונה, כפי שעשו נבדקים קודמים.<br>
      לשם כך, יופיע מתחת לכל תמונה סולם רציף בין (100-) ל-(100+), בדומה לסולם הזה:<br><br>
      <div style="width: 100%; display: flex; align-items: right;margin: 20px;">
        <img src="./src/data/instructions/slider_example.png" alt="Slider Example" style="width: 80%;">
      </div>
      דירוג של 100 פירושו שהתמונה גורמת לך להרגיש טוב באופן קיצוני,<br>
      דירוג של (100-) פירושו שהתמונה גורמת לך להרגיש רע באופן קיצוני.<br>
      דירוג של 0 פירושו שהתמונה לא גורמת לך להרגיש טוב, וגם לא גורמת לך להרגיש רע.<br><br>
      כדי לסמן את הדירוג שלך, עליך להזיז בעזרת העכבר את הסמן שבסקאלה אל המספר שמשקף את תגובתך שלך לתמונה בצורה הטובה ביותר.<br><br>
      <div style="display: flex; justify-content: flex-end;">
      </div>
      לאחר שתדרג כיצד הרגשת, הדירוג יופיע לפניך על מסך נפרד.
    </div>
  </div>
`,
  instructions_2_stage_1_male_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
    <div>
      במטלה שתבצע היום, יוצגו בפניך תמונות המעוררות רגש.<br>
      בחלק מהמקרים תתבקש לדרג את תגובתך הרגשית לתמונה, כפי שעשו נבדקים קודמים.<br>
      לשם כך, יופיע מתחת לכל תמונה סולם רציף בין (100-) ל-(100+), בדומה לסולם הזה:<br><br>
      <div style="width: 100%; display: flex; align-items: right;margin: 20px;">
        <img src="./src/data/instructions/slider_example.png" alt="Slider Example" style="width: 80%;">
      </div>
      דירוג של 100 פירושו שהתמונה גורמת לך להרגיש טוב באופן קיצוני,<br>
      דירוג של (100-) פירושו שהתמונה גורמת לך להרגיש רע באופן קיצוני.<br>
      דירוג של 0 פירושו שהתמונה לא גורמת לך להרגיש טוב, וגם לא גורמת לך להרגיש רע.<br><br>
      כדי לסמן את הדירוג שלך, עליך להזיז בעזרת העכבר את הסמן שבסקאלה אל המספר שמשקף את תגובתך שלך לתמונה בצורה הטובה ביותר.<br><br>
      <div style="display: flex; justify-content: flex-end;">
      </div>
      לאחר שתדרג כיצד הרגשת, הדירוג יופיע לפניך על מסך נפרד.<br><br>
      כדי להמשיך, יש ללחוץ על מקש הרווח.
    </div>
  </div>
`,
  instructions_3_stage_2_female: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>כעת בחלק מהמקרים נבקש ממך לדרג את התגובה הרגשית שלך לתמונות,כפי שעשית בחלק הקודם של המטלה.</br>
          <br>בחלק אחר של המקרים נבקש ממך לשער מה היתה התגובה של נבדקת אחרת שביצעה את המטלה בעבר,<br>
          <br> ואז נראה לך את התגובה האמיתית של הנבדקת לתמונה. חשוב לציין, שאת המטלה הזו ביצעו נבדקות מאזורים שונים בארץ.<br>
          <br> חלק מהנבדקות הן יהודיות ישראליות מהאוניברסיטה העברית (כמוך), חלק מהנבדקות הן מוסלמיות מאוניברסיטת אל קודץ ממזרח ירושלים.<br>
          <br> יתכן שתתבקשי לנבא תגובות של נבדקות יהודיות או של נבדקות מוסלמיות. תוכלי לראות כל פעם את השם והרקע של הנבדקת שאת תגובתה את מתבקשת לשער.<br>
        </div>
  </div>
`,
  instructions_3_stage_2_female_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>כעת בחלק מהמקרים נבקש ממך לדרג את התגובה הרגשית שלך לתמונות,כפי שעשית בחלק הקודם של המטלה.</br>
          <br>בחלק אחר של המקרים נבקש ממך לשער מה היתה התגובה של נבדקת אחרת שביצעה את המטלה בעבר,<br>
          <br> ואז נראה לך את התגובה האמיתית של הנבדקת לתמונה. חשוב לציין, שאת המטלה הזו ביצעו נבדקות מאזורים שונים בארץ.<br>
          <br> חלק מהנבדקות הן יהודיות ישראליות מהאוניברסיטה העברית (כמוך), חלק מהנבדקות הן מוסלמיות מאוניברסיטת אל קודץ ממזרח ירושלים.<br>
          <br> יתכן שתתבקשי לנבא תגובות של נבדקות יהודיות או של נבדקות מוסלמיות. תוכלי לראות כל פעם את השם והרקע של הנבדקת שאת תגובתה את מתבקשת לשער.<br>
          <br>כדי להמשיך, יש ללחוץ על מקש הרווח.</br>
        </div>
  </div>
`,
  instructions_3_stage_2_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>כעת בחלק מהמקרים נבקש ממך לדרג את התגובה הרגשית שלך לתמונות,כפי שעשית בחלק הקודם של המטלה.</br>
          <br>בחלק אחר של המקרים נבקש ממך לשער מה היתה התגובה של נבדק אחר שביצע את המטלה בעבר,<br>
          <br> ואז נראה לך את התגובה האמיתית של הנבדק לתמונה. חשוב לציין, שאת המטלה הזו ביצעו נבדקים מאזורים שונים בארץ.<br>
          <br> חלק מהנבדקים הם יהודים ישראלים מהאוניברסיטה העברית (כמוך), חלק מהנבדקים הם מוסלמים מאוניברסיטת אל קודץ ממזרח ירושלים.<br>
          <br> יתכן שתתבקש לנבא תגובות של נבדקים יהודים או של נבדקים מוסלמים. תוכל לראות כל פעם את השם והרקע של הנבדק שאת תגובתו אתה מתבקש לשער.<br>
        </div>
  </div>
`,
  instructions_3_stage_2_male_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>כעת בחלק מהמקרים נבקש ממך לדרג את התגובה הרגשית שלך לתמונות,כפי שעשית בחלק הקודם של המטלה.</br>
          <br>בחלק אחר של המקרים נבקש ממך לשער מה היתה התגובה של נבדק אחר שביצע את המטלה בעבר,<br>
          <br> ואז נראה לך את התגובה האמיתית של הנבדק לתמונה. חשוב לציין, שאת המטלה הזו ביצעו נבדקים מאזורים שונים בארץ.<br>
          <br> חלק מהנבדקים הם יהודים ישראלים מהאוניברסיטה העברית (כמוך), חלק מהנבדקים הם מוסלמים מאוניברסיטת אל קודץ ממזרח ירושלים.<br>
          <br> יתכן שתתבקש לנבא תגובות של נבדקים יהודים או של נבדקים מוסלמים. תוכל לראות כל פעם את השם והרקע של הנבדק שאת תגובתו אתה מתבקש לשער.<br>
          <br>כדי להמשיך, יש ללחוץ על מקש הרווח.</br>
        </div>
  </div>
`,
  instructions_4_stage_3_female: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
    <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>.נבדקות אחרות שביצעו את הניסוי צפו במקבץ נוסף של תמונות הדומות לתמונות שצפית בהן עד עכשיו<br> 
      <br>בשלב זה, נציג לך את ממוצע התגובות של נבדקות מסויימות למקבץ תמונות זה ונבקש ממך<br>
      <br>להעריך את הנבדקות הללו על מספר מימדים שונים.</br>
      <br> נזכיר, חלק מהנבדקות שעשו את הניסוי הן יהודיות ישראליות וחלק מהן מוסלמיות ממזרח ירושלים.</br>
      <br>כשנראה לך תגובות של נבדקת מסויימת, תוכלי לראות את שם הנבדקת ושיוכה.</br>
  </div>
  
</div>`,
  instructions_4_stage_3_female_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>נבדקות אחרות שביצעו את הניסוי צפו במקבץ נוסף של תמונות הדומות לתמונות שצפית בהן עד עכשיו.<br> 
      <br>בשלב זה, נציג לך את ממוצע התגובות של נבדקות מסויימות למקבץ תמונות זה ונבקש ממך<br>
      <br>להעריך את הנבדקות הללו על מספר מימדים שונים.</br>
      <br> נזכיר, חלק מהנבדקות שעשו את הניסוי הן יהודיות ישראליות וחלק מהן מוסלמיות ממזרח ירושלים.</br>
      <br>כשנראה לך תגובות של נבדקת מסויימת, תוכלי לראות את שם הנבדקת ושיוכה.</br>
      <br>לתחילת המטלה, יש ללחוץ על מקש הרווח.</br>
  </div>
</div>`,
  instructions_4_stage_3_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>נבדקים אחרים שביצעו את הניסוי צפו במקבץ נוסף של תמונות הדומות לתמונות שצפית בהן עד עכשיו.<br> 
      <br>בשלב זה, נציג לך את ממוצע התגובות של נבדקים מסויימים למקבץ תמונות זה ונבקש ממך<br>
      <br>להעריך את הנבדקים הללו על מספר מימדים שונים.</br>
      <br> נזכיר, חלק מהנבדקים שעשו את הניסוי הם יהודים ישראלים וחלק מהם מוסלמים ממזרח ירושלים.</br>
      <br>כשנראה לך תגובות של נבדק מסויים, תוכל לראות את שם הנבדק ושיוכו.</br>
  </div>
</div>`,
  instructions_4_stage_3_male_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>נבדקים אחרים שביצעו את הניסוי צפו במקבץ נוסף של תמונות הדומות לתמונות שצפית בהן עד עכשיו.<br> 
      <br>בשלב זה, נציג לך את ממוצע התגובות של נבדקים מסויימים למקבץ תמונות זה ונבקש ממך<br>
      <br>להעריך את הנבדקים הללו על מספר מימדים שונים.</br>
      <br> נזכיר, חלק מהנבדקים שעשו את הניסוי הם יהודים ישראלים וחלק מהם מוסלמים ממזרח ירושלים.</br>
      <br>כשנראה לך תגובות של נבדק מסויים, תוכל לראות את שם הנבדק ושיוכו.</br>
      <br>לתחילת המטלה, יש ללחוץ על מקש הרווח.</br>
  </div>
</div>`,

  instructions_5_ending_female: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: center;">
            <br>.המטלה ההסתיימה<br>  
            <br>-אנא שלחי צילום מסך של חלון זה ל </br>
            <br>mai-elfassi@mail.huji.ac.il</br>
            <br>.ועדכני שסיימת</br>
        </div>`,
  instructions_5_ending_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: center;">
            <br>.המטלה ההסתיימה<br>  
            <br>-אנא שלח צילום מסך של חלון זה ל </br>
            <br>mai-elfassi@mail.huji.ac.il</br>
            <br>.ועדכן שסיימת</br>
        </div>`,
};

export { instJsonHTML };

// // instructions_3_stage_2_female: `
//   <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
//   <div>
//     <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
//     <br>שלב זה יחולק לשני מצבים.</br>
//     <br>בחלקם תתבקשי לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
//     <br>בחלק אחר תתבקשי לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
//     <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדקת שאת תגובתו עלייך לנחש, ומהיכן היא </br>
//   </div>
// </div>
// `,
// instructions_3_stage_2_female_continue: `
// <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
//   <div>
//     <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
//     <br>שלב זה יחולק לשני מצבים.</br>
//     <br>בחלקם תתבקשי לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
//     <br>בחלק אחר תתבקשי לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
//     <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדקת שאת תגובתו עלייך לנחש, ומהיכן היא </br>
//     <br>כדי להמשיך, יש ללחוץ על מקש הרווח.</br>
//   </div>
// </div>
// `,
// instructions_3_stage_2_male: `
// <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
//   <div>
//     <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
//     <br>שלב זה יחולק לשני מצבים.</br>
//     <br>בחלקם תתבקש לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
//     <br>בחלק אחר תתבקש לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
//     <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדק שאת תגובתו עליך לנחש, ומהיכן היא </br>
//   </div>
// </div>
// `,
// instructions_3_stage_2_male_continue: `
// <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
//   <div>
//     <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
//     <br>שלב זה יחולק לשני מצבים.</br>
//     <br>בחלקם תתבקש לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
//     <br>בחלק אחר תתבקש לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
//     <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדק שאת תגובתו עליך לנחש, ומהיכן היא </br>
//     <br>כדי להמשיך, יש ללחוץ על מקש הרווח.</br>
//   </div>
// </div>
// `
