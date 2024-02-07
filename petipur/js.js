///////////////////מערך אובייקטים///////////////////

let product_Cakes=[
    {
        name:"עוגת ויטרינה פרלינה – חישוק",
        sku:121,
        price:10,
        img:"../images/עוגות ויטרינה/IMG_4149-scaled-247x247.jpg"
    },
    {
        name:"עוגת ויטרינה פרלינה – נגיעות",
        sku:122,
        price:10,
        img:"../images/עוגות ויטרינה/IMG_4397-e1597357247924-scaled.jpg"
    },
    {
        name:"עוגת ויטרינה פרלינה – עלים זהובים",
        sku:123,
        price:10,
        img:"../images/עוגות ויטרינה/IMG_4439-e1597357386603-scaled.jpg"
    },
    {
        name:"עוגת ויטרינה פרלינה – פפיון",
        sku:124,
        price:10,
        img:"../images/עוגות ויטרינה/IMG_4497-scaled-247x247.jpg"
    },
    {
        name:"עוגת ויטרינה פרלינה – רשת",
        sku:125,
        price:10,
        img:"../images/עוגות ויטרינה/IMG_4508-scaled-247x247.jpg"
    },
    {
        name:"עוגת ויטרינה פרלינה – שיש",
        sku:126,
        price:50,
        img:"../images/עוגות ויטרינה/תמונות-פטיפורים-300-פיקסל2-247x247.jpg"
    },
    {
        name:"עוגת ויטרינה פרלינה – שיש",
        sku:127,
        price:10,
        img:"../images/עוגות ויטרינה/תמונות-פטיפורים-300-פיקסל3-247x247.jpg"
    }
];


    /////////////////////////פונקציות////////////////////////////////////////

    // מה שיקרה בעת טעינת הדף
    window.onload = function(){
        switch(document.querySelector("body").id){
            case "cake":
                main_cakes();
                break;
            case "cart":
                main_cart();
                break;
            case "input_page":
                main_input_page();
                break;
        }       
};
//******************** *//
function addToCart(){
    const str_data = localStorage.getItem("cart");
    let cart = [];
    if(str_data){
        cart = JSON.parse(str_data);
}
const current_sku = this.dataset.sku;// שליפת המקט של הכפתור שעליו לחצתי
// בדיקה האם המוצר כבר קיים בסל
const in_cart = cart.find(obj => {
    return obj.sku === current_sku;
});
if(in_cart){
    in_cart.qty += 1
} else{
    cart.push({
        sku: current_sku,
        qty: 1
    });
}

const new_str = JSON.stringify(cart);
localStorage.setItem("cart", new_str);
alert("המוצר נוסף לסל בהצלחה!!");
};

//******************** *//

function main_cakes(){
    for(prod of product_Cakes){
        print_product(prod);
    }

    setTimeout(()=>{
        alert('מהרו לקנות!!!!!!');
    },5000);
    
};

//******************** *//

const print_product = product => {
    const div = document.createElement("div"); // יצרתי דיב
    div.classList.add("card"); // הוספתי לו קלאס
    div.innerHTML=`<img class="image" src="${product.img}"/>
    <break/> <p>${product.name}</p>`
    ; 

    const btn = document.createElement("button"); // יצרתי כפתור
    btn.classList.add("bt");
    btn.innerHTML = "הוספה לסל"; // הוספתי לתוכו טקסט
    btn.dataset.sku = product.sku; // הוספתי את המקט של המוצר כמאפיין של הכפתור, כדי לדעת בהמשך את איזה מוצר להוסיף לסל
    btn.addEventListener("click", addToCart); // וגם אירוע
    div.append(btn); // הכנסתי את הכפתור לתוך הדיב
    document.querySelector(".grid2").append(div); // לתוך הדיב האבא תכניס את הדיב הבן החדש
    };

//******************** *//

function main_cart(){
    // בטעינת עמוד עגלה, אני צריכה לצייר את הפריטים שבתוך העגלה
    
    // קודם כל - נשלוף את מה שיש לגולש בסל
    const data_str = localStorage.getItem("cart"); 
    if(!data_str){
        alert('אין נתונים להצגה');
        return;
    }
    const all_cart = JSON.parse(data_str);
    let total = 0;
    for(cart_item of all_cart){
        const product = product_Cakes.find(obj => {
            return obj.sku == cart_item.sku;
        });
        total += product.price * cart_item.qty;
        document.querySelector("#cont_list").innerHTML += `<div class="row">
            מוצר: ${product.name},
            מק"ט: ${product.sku},
            מחיר: ${product.price} ש"ח,
            כמות: ${cart_item.qty},
            סכום ביניים: ${product.price * cart_item.qty} ש"ח
        </div>`;
    }
    document.querySelector("#cont_list").innerHTML += `<div class="total">סה"כ: ${total}</div>`;

};

//******************** *//

function main_input_page()
{
    document.querySelector("#input_name").onchange=function(){
        alert("הכנסת את שמך בהצלחה");
    }


    document.querySelector("#input_email").onkeyup=function(){
        input_email_vv=document.querySelectorAll("#input_email").value;
        if(input_email_vv!="@"){
            alert("כתובת מייל לא חוקית")
        }
    }

    document.querySelector("#submit").onsubmit=function(e){
        e.preventDefault();
        input_name_v=document.getElementById("input_name").value;
        input_email_v=document.querySelectorAll("#input_email").value;
        if(input_name_v===""){
            alert("לא הכנסת את כל הפרטים");
        }
        if(input_email_v===""){
            alert("לא הכנסת את כל הפרטים");
        }
    }
}











