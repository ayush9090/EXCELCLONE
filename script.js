let addsheet=document.querySelector(".plus");
let sheetlist=document.querySelector(".sheet-list");
let firstsheet=document.querySelector(".sheet");
let topRow = document.querySelector(".top-row");
        let str = "";
        for (let i = 0; i < 26; i++) {
            str += `<div class='col'>${String.fromCharCode(65 + i)}</div>`;
        }
        topRow.innerHTML = str;
        let leftCol = document.querySelector(".left-col");
        str = ""
        for (let i = 0; i < 100; i++) {
            str += `<div class='left-col_box'>${i + 1}</div>`
        }
        leftCol.innerHTML = str;

        // 2d array
        let grid = document.querySelector(".grid");
        str = "";
        for (let i = 0; i < 100; i++) {
            str += `<div class="row">`
            for (let j = 0; j < 26; j++) {
                str += `<div class='col' rid=${i} cid=${j} contenteditable="true"></div>`;
            }
            str += "</div>";
        }
        grid.innerHTML = str;
        
let Allcell=document.querySelectorAll(".grid .col");
let adressbox=document.querySelector(".adress-box");
firstsheet.addEventListener("click",handleActivesheet);
addsheet.addEventListener("click",function(){
    let sheetsArr=document.querySelectorAll(".sheet");
    let lastSheetele=sheetsArr[sheetsArr.length-1];
    let idx=lastSheetele.getAttribute("sheetIdx");
    idx=Number(idx);
    let Newsheet=document.createElement("div");
    Newsheet.setAttribute("class","sheet");
    Newsheet.setAttribute("sheetIdx",idx+1);
    Newsheet.innerText=`sheet ${idx+2}`;
    sheetlist.appendChild(Newsheet);
    Newsheet.addEventListener("click",handleActivesheet)
})
function handleActivesheet(e){
 let mysheet=e.currentTarget;
 let sheetArr=document.querySelectorAll(".sheet");
 sheetArr.forEach(function (sheet){
     sheet.classList.remove("active-state");
 })
 if(!mysheet.classList[1]){
     mysheet.classList.add("active-state");
 }
}

        console.log(Allcell.length);
        for(let i=0;i<Allcell.length;i++)
        {
            Allcell[i].addEventListener("click",function Handlecell(){
                let rid=Number(Allcell[i].getAttribute("rid"));
                let cid=Number(Allcell[i].getAttribute("cid"));
                let rowadrs=rid+1;
                let coladrs=String.fromCharCode(cid+65);
                let adress=coladrs+rowadrs;
                adressbox.value=adress;
                });
        }
let leftbtn=document.querySelector(".left");
let centrebtn=document.querySelector(".centre");
let rightbtn=document.querySelector(".right");
leftbtn.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    console.log(rid,cid);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="left";
    
});

centrebtn.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    console.log(rid,cid);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="center";
    
});
rightbtn.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    console.log(rid,cid);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="right";
    
});

let color1=document.querySelector(".color.txt1");
color1.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.color=color1.value;


})
let color2=document.querySelector(".color.txt2");
color2.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.color=color2.value;
})

function getridcidfromAdress(adress){
    let cidcch=Number(adress.charCodeAt(0));

    let cid=cidcch-65;
    let rid=Number(adress.slice(1))-1;
    return{rid,cid};
}

let bolt=document.getElementById("bolt");
bolt.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontWeight="bold";
    console.log("bolt");
})
let uti=document.getElementById("uti");
uti.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textDecoration="underline";     
    cell.style.textDecorationColor="blue";
})
let italic=document.getElementById("italic");
italic.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontStyle="italic";
})
let size=document.querySelector(".size");
size.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let fsize=size.value+"px";
    console.log(fsize);
    cell.style.fontSize=fsize;
})
let fontfamily=document.querySelector("select#arial");

fontfamily.addEventListener("click",function(){
    let adress=adressbox.value;
    let{rid,cid}=getridcidfromAdress(adress);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if(fontfamily.select[name=arial].val("arial")=="arial")
    {
        cell.style.fontFamily="arial";
        console.log("hey");
    }
})

Allcell[0].click();