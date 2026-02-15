let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const container = document.querySelector(".users-container");

const userManager = {
    users: [],

    init() {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm(e) {
        e.preventDefault();
        this.addUser();
    },

    addUser() {
        this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        form.reset();
        this.renderUi();
    },

    renderUi() {
        container.innerHTML = "";

        this.users.forEach((user, index) => {

            const card = document.createElement("div");
            card.className = "user-card";

            const img = document.createElement("img");
            img.src = user.photo;
            img.className = "user-img";

            const name = document.createElement("h3");
            name.innerText = user.userName;

            const role = document.createElement("p");
            role.innerText = user.role;

            const bio = document.createElement("p");
            bio.innerText = user.bio;

            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.className = "remove-btn";

            removeBtn.addEventListener("click", () => {
                this.removeUser(index);
            });

            card.append(img, name, role, bio, removeBtn);
            container.appendChild(card);
        });
    },

    removeUser(index) {
        this.users.splice(index, 1);
        this.renderUi();
    }
};

userManager.init();