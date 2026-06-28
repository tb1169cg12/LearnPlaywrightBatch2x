/*
javaScript badshah hai, woh kisi ke liye rukti nahi hai.
 Agar tumne Playwright mein likha:
openBrowser(); (isme 2 second lagenge)
clickLogin(); (isme 1 millisecond lagega)
JS kya karegi? Browser khulne ka wait nahi karegi, 
turant line 2 chala degi. 

Natija? Code fat gaya! Test fail!

Pehle log isko rokne ke liye Callback (function ke andar function) likhte the,
 jisse woh ganda Callback Hell (Pyramid of Doom) banta tha jo tumne pichle screenshot mein dekha thha.

 Promise bas ek solution hai taaki code ganda na dikhe aur seedhi line mein chale.

🛠️ Promise Ka Asli Structure (Bina Kisi Bakwaas Ke)
Ek Promise memory mein sirf ek dabba (object) hota hai 
jo teen state mein ho sakta hai:

Pending (kaam chal raha hai)
Resolved (kaam ho gaya, data le lo)
Rejected (kaam fail ho gaya, error pakdo)

Chalo abhi tumhare samne ek real code likhte hain aur uska line-by-line flow dekhte hain:*/

let checkWiproPrice = new Promise((sahi, galat) => {
    let priceDrop = true;
    if (priceDrop === true) {
        console.log("Bhai! Price ₹175 aa gaya, shares utha lo!")
    } else {
        console.log("Price nahi gira bhai, wait karo.")
    }
})
checkWiproPrice
    .then((message) => {
        console.log(message)
    }).catch((error) => {
        console.log(error)
    })
/*
Is Code Ka Flow Samjho:
JS ne dekha checkWiproPrice naam ka ek Promise hai. Uske andar condition check hui.
Condition sach thhi (priceDrop === true), 
toh usne sahi() wale function ko trigger kar diya.
Jaise hi sahi() trigger hua, niche jo 
.then() baitha thha, use signal mila aur usne andar ka message print kar diya: 
Bhai! Price ₹175 aa gaya, shares utha lo!
Agar condition jhoot hoti, toh control seedha .catch() mein jata aur error print ho jati*/