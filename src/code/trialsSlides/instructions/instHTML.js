const instJsonHTML = {
  welcome: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
      <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl;">
        שלום, ותודה לך על השתתפותך במחקר היום!<br><br>
        המחקר הוא חלק ממחקר גדול יותר שנערך כבר למעלה משנה במספר מקומות ברחבי הארץ.<br><br>
        במחקר זה בו נבחנים תהליכים של אינטליגנציה רגשית וחברתית, כבר לקחו חלק משתתפים רבים.<br><br>
        הם דירגו את תגובות הרגישות שלהם למגוון של תמונות המעוררות רגש.<br><br>
      </div>
    `,
  welcome_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
          שלום, ותודה לך על השתתפותך במחקר היום!<br><br>
          המחקר הוא חלק ממחקר גדול יותר שנערך כבר למעלה משנה במספר מקומות ברחבי הארץ.<br><br>
          במחקר זה בו נבחנים תהליכים של אינטליגנציה רגשית וחברתית, כבר לקחו חלק משתתפים רבים.<br><br>
          הם דירגו את תגובות הרגישות שלהם למגוון של תמונות המעוררות רגש.<br><br>
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
          <br>שלב זה יחולק לשני מצבים.</br>
          <br>בחלקם תתבקשי לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
          <br>בחלק אחר תתבקשי לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
          <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדק שאת תגובתו עלייך לנחש, ומהיכן היא </br>
        </div>
  </div>
`,
  instructions_3_stage_2_female_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>שלב זה יחולק לשני מצבים.</br>
          <br>בחלקם תתבקשי לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
          <br>בחלק אחר תתבקשי לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
          <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדק שאת תגובתו עלייך לנחש, ומהיכן היא </br>
          <br>כדי להמשיך, יש ללחוץ על מקש הרווח.</br>
        </div>
  </div>
`,
  instructions_3_stage_2_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>שלב זה יחולק לשני מצבים.</br>
          <br>בחלקם תתבקש לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
          <br>בחלק אחר תתבקש לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
          <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדק שאת תגובתו עליך לנחש, ומהיכן היא </br>
        </div>
  </div>
`,
  instructions_3_stage_2_male_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
        <div>  
          <br>ברכות על הגעתך לשלב השני של הניסוי!</br>
          <br>שלב זה יחולק לשני מצבים.</br>
          <br>בחלקם תתבקש לדרג את התגובה הרגשית שלך לתמונה כמו שהיה עד עכשיו.</br>
          <br>בחלק אחר תתבקש לנחש איך הרגישו נבדקים אחרים, שכבר השתתפו בניסוי ודירגו את תגובתם הרגשית.</br>
          <br>בכל מקרה כזה, מלבד התמונה, יוצג לך גם השם של הנבדק שאת תגובתו עליך לנחש, ומהיכן היא </br>
          <br>כדי להמשיך, יש ללחוץ על מקש הרווח.</br>
        </div>
  </div>
`,
  instructions_4_stage_3_female: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>כעת, יוצגו בפנייך ממוצעי התגובות הרגשיות של המשתתפים האחרים לכל התמונות בהן צפית עד עכשיו, ולאחר מכן תתבקשי להעריך את המשתתפים על סמך מספר היבטים שונים, אשר יוצגו בהמשך.</br>
      <br>שימי לב! הממוצעים יוצגו לפרק זמן קצוב, ולאחריו ייעלמו. עלייך להתבונן בקפידה בממוצעים כדי שתוכלי להעריך בעזרתם את המשתתפים.</br>
      <br>אנו מעוניינים בשיפוטים האינטואיטיביים שלך. נסי לבצע את השיפוטים במהירות על סמך תחושת הבטן שלך.</br>
  </div>
</div>`,
  instructions_4_stage_3_female_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>כעת, יוצגו בפנייך ממוצעי התגובות הרגשיות של המשתתפים האחרים לכל התמונות בהן צפית עד עכשיו, ולאחר מכן תתבקשי להעריך את המשתתפים על סמך מספר היבטים שונים, אשר יוצגו בהמשך.</br>
      <br>שימי לב! הממוצעים יוצגו לפרק זמן קצוב, ולאחריו ייעלמו. עלייך להתבונן בקפידה בממוצעים כדי שתוכלי להעריך בעזרתם את המשתתפים.</br>
      <br>אנו מעוניינים בשיפוטים האינטואיטיביים שלך. נסי לבצע את השיפוטים במהירות על סמך תחושת הבטן שלך.</br>
      <br>לתחילת המטלה, יש ללחוץ על מקש הרווח.</br>
  </div>
</div>`,
  instructions_4_stage_3_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>כעת, יוצגו בפניך ממוצעי התגובות הרגשיות של המשתתפים האחרים לכל התמונות בהן צפית עד עכשיו, ולאחר מכן תתבקש להעריך את המשתתפים על סמך מספר היבטים שונים, אשר יוצגו בהמשך.</br>
      <br>שים לב! הממוצעים יוצגו לפרק זמן קצוב, ולאחריו ייעלמו. עליך להתבונן בקפידה בממוצעים כדי שתוכלי להעריך בעזרתם את המשתתפים.</br>
      <br>אנו מעוניינים בשיפוטים האינטואיטיביים שלך. נסה לבצע את השיפוטים במהירות על סמך תחושת הבטן שלך.</br>
  </div>
</div>`,
  instructions_4_stage_3_male_continue: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: right; direction: rtl; padding: 20px;">
  <div>
      <br>ברכות על הגעתך לשלב השלישי והאחרון של הניסוי!</br>
      <br>כעת, יוצגו בפניך ממוצעי התגובות הרגשיות של המשתתפים האחרים לכל התמונות בהן צפית עד עכשיו, ולאחר מכן תתבקש להעריך את המשתתפים על סמך מספר היבטים שונים, אשר יוצגו בהמשך.</br>
      <br>שים לב! הממוצעים יוצגו לפרק זמן קצוב, ולאחריו ייעלמו. עליך להתבונן בקפידה בממוצעים כדי שתוכלי להעריך בעזרתם את המשתתפים.</br>
      <br>אנו מעוניינים בשיפוטים האינטואיטיביים שלך. נסה לבצע את השיפוטים במהירות על סמך תחושת הבטן שלך.</br>
      <br>לתחילת המטלה, יש ללחוץ על מקש הרווח.</br>
  </div>
</div>`,
  instructions_5_ending_female: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: center;">
            <br>.המטלה ההסתיימה<br>
            <br> .אנא קראי לנסיון.ית והודיעי לו.ה על כך <br>
        </div>`,
  instructions_5_ending_male: `
  <div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px; text-align: center;">
            <br>.המטלה ההסתיימה<br>
            <br> .אנא קרא לנסיון.ית והודיע לו.ה על כך <br>
        </div>`,
};

export { instJsonHTML };
