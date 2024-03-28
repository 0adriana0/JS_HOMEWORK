let selectedMenu = document.getElementById("menu");
let message = "";

selectedMenu.addEvantLister("change", () => {
    switch (selectedMenu.value) {
        case "coffee":
            message = "Ви вибрали каву";
            break;
        case "tea":
            message = "Ви вибрали чай";
            break;
        case "juice":
            message = "Ви вибрали сік";
            break;
        default:
            message = "Будь ласка, оберіть напій"
            break;
    }
    document.getElementById("message").innerText = message;
})

