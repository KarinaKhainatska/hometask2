/*let R = document.querySelectorAll("p");
console.log(R.length);
let H=document.querySelectorAll("h2");
console.log(H.length);
let color = window.getComputedStyle(document.body).backgroundColor;
console.log(color);
let h2=document.querySelector("h2");
let Font = window.getComputedStyle(h2).fontSize;
console.log(Font);
const elements = document.querySelectorAll("main *");

elements.forEach(el => {
    let prev = "";
    el.addEventListener("mouseover", (event) => {
        prev = event.target.style.backgroundColor;
        el.style.backgroundColor = "red";
    });
    el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = prev;
    });
});
setTimeout(() => {
let imagesUrl = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ",
    "https://www.apple.com/v/iphone-17/b/images/overview/contrast/iphone_17__ck7zzemcw37m_large_2x.jpg",
    "https://www.apple.com/v/iphone-17/b/images/overview/contrast/iphone_air__f0t56fef3oey_large_2x.jpg",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-16e-202509?wid=400&hei=512&fmt=jpeg&qlt=90&.v=M0dlUVBobHVpY1h1dmlaR3RZekpEK0JXNTFocEVZZFhFN2s4cHN6QWVQNTE5VXk1QVF5NWxrMFlTNWNpV2huNWJGcXNRQnFCV0w3WVRjTExvdm1ic1VMZVBad3duRWZOcWJ3YnlzUTJBSnFWZWZKZEpnTUg2bTJtOU9qU1hvcWw",
    "https://www.apple.com/v/airpods-pro/q/images/overview/noise-control/gallery/noise_control_voice_isolation__c6b9qlmdbx4y_large_2x.jpg",
    "https://www.apple.com/v/apple-watch-series-11/a/images/overview/contrast/contrast_s11__dkui1dgfuwcy_large_2x.png",
    "https://www.apple.com/v/apple-watch-series-11/a/images/overview/contrast/contrast_se3__b7o04qifck2q_large_2x.png"
]
//let images =document.createDocumentFragment();
let imgarrayURL = document.getElementById("imgarrayURL");
imagesUrl.forEach((element,index) => {
    setTimeout(() => {
    let img = document.createElement("img");
    img.src=element;
    img.style.margin="10px";
imgarrayURL.appendChild(img);
    },index*1000);
});
//imgarrayURL.appendChild(images);
},5000);
*/
let oldString=new Set();
document.getElementById("check").onclick=function(){
    let input=document.getElementById("inputText").value.trim();
    if (input.length===0){
        return -1;
    }
let inputSutring= new Set(input
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .split(/\s+/)
);
if  (oldString.size>0){
    let repeatWords = [...inputSutring].filter(word => oldString.has(word));
    if (repeatWords.length>0){
        document.getElementById("result").innerText="Repeated words: "+repeatWords.join(", ");
    } else {
        document.getElementById("result").innerText="No repeated words";
    }
} else {
    document.getElementById("result").innerText="Enter one more time";
}
oldString=inputSutring;
document.getElementById("inputText").value="";
};