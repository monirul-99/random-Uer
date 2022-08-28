const randomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayFunc(data.results))
}

const displayFunc = (data) => {
    for(const user of data){
        console.log(user)

        const img = document.querySelector('img');
        img.src = user.picture.large;

        const nameTarget = document.getElementById('name');
        nameTarget.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`

        const phoneTarget = document.getElementById('phone');
        phoneTarget.innerText = `${user.phone}`

        const countryTarget = document.getElementById('country');
        countryTarget.innerText = `${user.location.country}`
    }
}







