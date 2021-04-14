const API_URL = 'https://jsonplaceholder.typicode.com/users';

async function loadUsers() {
    try {
        const response = await fetch (API_URL);
        const data = await response.json();

        return data;
    } catch (e) {
        alert(e.message)
    }
}

const $root = document.getElementById('root')

function createCardTemplate(name, phone, email) {
    return `
     <div class="card">
     Имя: ${name},
     Тел.: ${phone},
     Почта: ${email}
     </div>
    `
}

async function renderUsers() {
    try {
        const users = await loadUsers ();
        
        users.forEach(function(user) {
            const {name, email, phone} = user;
            const cardTEmplate = createCardTemplate(name, phone, email);
            console.log(cardTEmplate);

            $root.innerHTML += cardTEmplate;
        })
        console.log($root.innerHTML);
        // $root.innerHTML = JSON.stringify(users);
    } catch (e) {
        alert(e.message);
    }
}
renderUsers();