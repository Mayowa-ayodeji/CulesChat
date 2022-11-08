/*==sidebar==*/
const menuItems = document.querySelectorAll(".menu-item");
/*remove active class from menu items*/
const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove("active");
    });
};
menuItems.forEach(item=>{
    item.addEventListener("click",()=>{
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications"){
            document.querySelector(".notifications-popup").style.display="none";
        }
        else{
            document.querySelector(".notifications-popup").style.display="block";
            document.querySelector("#notifications .notification-count").style.display="none";   
        }
    });
});
//messages 
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
messagesNotification.addEventListener("click",()=>{
    messages.style.boxShadow="0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display="none"; 
    setTimeout(()=>{
        messages.style.boxShadow="none";
    },2000);  
});
//find any message
const messageSearch = document.querySelector("#message-search");
const message = messages.querySelectorAll(".message")
const searchMessage = ()=>{
    const val = messageSearch.ariaValueMax.toLowerCase();
    messages.forEach(chat =>{
        let name = chat.querySelectorAll("h5").textContent.toLocale.LowerCase();
        if (name.indexOf(val) != -1){
            chat.style.display = "flex";
        }
        else{
            chat.style.display="none";
        }
    });
};

messageSearch.addEventListener("keyup",searchMessage);