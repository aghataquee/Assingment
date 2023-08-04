// Retrieve existing blogs from LocalStorage and display them on page load
const addbtn=document.getElementById("btn");
const formm=document.getElementsByClassName(".blog-form")
addbtn.addEventListener("click",()=>{
    document.getElementsByClassName(".blog-form").classList.add('showform')
    
})