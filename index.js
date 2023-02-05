const art = [
    {
        id: 1,
        name: 'Spider-man art',
        img: "img1.png",
        content: "This art captures a crucial moment in the beginning of 'Spider-man No Way Home'in which Mysterio lied that Spider-man killed him and masterminded the destruction that ensued in New York City that day. He also revealed Spider-man's secret identity as Peter Parker. The image above was his reaction.",
        price: '$149'
    },
    {
        id: 2,
        name: 'One Punch Man art',
        img: "669047.png",
        content: "This art depicts a crucial moment in the middle of 'One Punch Man Season 1' in which Saitama was challenged by 'Planet Buster', Saitama was underwhelmed because after minutes of bluffing it took just one serious punch to finish him off. The image above was his reaction.",
        price: '$139' 
    },
    {
        id: 3,
        name: 'Yin and Yang art',
        img: "605598.jpg",
        content: "This art captures a crucial moment in the beginning of 'Spider-man No Way Home'in which Mysterio lied that Spider-man killed him and masterminded the destruction that ensued in New York City that day. He also revealed Spider-man's secret identity as Peter Parker. The image above was his reaction.",
        price: '$149'
    },
    {
        id: 4,
        name: 'Waterfall art',
        img: "605599.jpg",
        content: "This art captures a crucial moment in the beginning of 'Spider-man No Way Home'in which Mysterio lied that Spider-man killed him and masterminded the destruction that ensued in New York City that day. He also revealed Spider-man's secret identity as Peter Parker. The image above was his reaction.",
        price: '$149'
    },
    {
        id: 5,
        name: 'Zoro Pirate Banner art',
        img: "589781.jpg",
        content: "This art captures a crucial moment in the beginning of 'Spider-man No Way Home'in which Mysterio lied that Spider-man killed him and masterminded the destruction that ensued in New York City that day. He also revealed Spider-man's secret identity as Peter Parker. The image above was his reaction.",
        price: '$149'
    },
    {
        id: 6,
        name: 'Sasuke art',
        img: "415519.jpg",
        content: "This art captures a crucial moment in the beginning of 'Spider-man No Way Home'in which Mysterio lied that Spider-man killed him and masterminded the destruction that ensued in New York City that day. He also revealed Spider-man's secret identity as Peter Parker. The image above was his reaction.",
        price: '$189'
    }

]
const main = document.querySelector('.main')

function displayArtItems(artItems){
    displayArt = artItems.map(function(item){
        return  `<div class="container">
                             <div class="img"><img src=${item.img} alt="Spider-man art"></div>
                             <h3>${item.name}</h3>
                             <p class="content">${item.content}</p>
                             <button id="purchase-el">Purchase - ${item.price}</button>
                             <p id="error"></p>
                         </div>`
    })
    displayArt = displayArt.join('')
    main.innerHTML = displayArt
}

window.addEventListener('DOMContentLoaded', function(){
    displayArtItems(art)

})


const nav = document.getElementById('nav')
const linksBtn = document.getElementById('links-btn')
const links = document.querySelector('.links')
const container = document.querySelectorAll('.container')
let errorMsg = 'Something went wrong, please try again'

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    navHeight = nav.getBoundingClientRect().height
    if (scrollHeight > navHeight){
        nav.classList.add('fixed-nav')
    } else{nav.classList.remove('fixed-nav')}
})

container.forEach(function(line){
    const btn = line.querySelector('#purchase-el')
    let errorEL = line.querySelector('#error')
    console.log(errorEL)
    console.log(btn)
    btn.addEventListener('click', function(e){
        const btnss = e.currentTarget
        container.forEach(function(item){
            if(item !== line){
                errorEL.textContent = ' '
            }
        })
        errorEL.textContent = errorMsg
    })
})

linksBtn.addEventListener('click', function(){
    links.classList.toggle('show-links')
})


function error(){
    errorEL.innerText = errorMsg
    console.log(purchaseEL)
}

