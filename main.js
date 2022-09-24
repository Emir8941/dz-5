// let title = document.querySelector('.title')
// console.log(title);

// let h1 = document.createElement('h1')
// console.log(h1);
// h1.textContent = 'H1'

// title.append(h1) // добавление элемента в конец родителя
// title.prepend(h1) // добавление элемента в начале родителя

// document.body.prepend(h1)      
// title.before(h1)                                  
// title.after(h1)    

// let listItem = document.querySelector('.list_item')
// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);
// console.log(listItem.previousElementSibling);


// let box = document.querySelector('.box')

// box.innerHTML = '<h1 class="title">Title<h1>' +
//                 '<p id="text">Lorem</p>' +
//                 '<button type="button" class="btn">Send</button>'




// let h1 = document.createElement('h1')
// let p = document.createElement('p')
// let btn = document.createElement('button')

// h1.textContent = 'Title'
// p.textContent = 'Lorem'
// btn.textContent = 'Send'

// box.append(h1)
// box.append(p)
// box.append(btn)

// h1.classList.add('title')
// p.id = 'title' 
// btn.classList.add('button')
// btn.type = 'button'

// delete

// let listItem = document.querySelector('.list_item')
// // let ul = document.querySelector('ul')
// console.log(ul.children);
// let p = document.querySelector('p')
// // listItem.remove()

// ul.removeChild(listItem)
// ul.replaceChild(p, listItem)


// console.log(listItem.parentElement);
// console.log(listItem.parentElement.parentElement);
// console.log(listItem.parentElement.children);

let base = [
    {id: 1,img: '/images/image 1.png', title: 'Syltherine', suptitle: 'Stylish cafe chair', prise: 'Rp 2.500.000'},
    {id: 2,img: '/images/image 2.png', title: 'Leviosa', suptitle: 'Stylish cafe chair', prise: 'Rp 2.500.000'},
    {id: 3,img: '/images/image 3.png', title: 'Lolito', suptitle: 'Luxury big sofa', prise: 'Rp 7.000.000'},
    {id: 4,img: '/images/image 4.png', title: 'Respira', suptitle: 'Minimalist fan', prise: 'Rp 500.000'},
    {id: 5,img: '/images/image 6.png', title: 'Grifo', suptitle: 'Night lamp', prise: 'Rp 1.500.000'},
    {id: 6,img: '/images/image 7.png', title: 'Muggo', suptitle: 'Small mug', prise: 'Rp 150.000'},
    {id: 7,img: '/images/image 8.png', title: 'Pingky', suptitle: 'Cute bed set', prise: 'Rp 7.000.000'},
    {id: 8,img: '/images/image 9.png', title: 'Potty', suptitle: 'Minimalist flower pot', prise: 'Rp 500.000'},
]

// let ul = document.createElement('ul')
// document.body.prepend(ul)

// base.forEach((item) => {
//     ul.innerHTML += `<li id:"${item.id}">${item.title}</li>`
// })
let row = document.querySelector('.row')
base.forEach((item) => {
    row.innerHTML += `<div class='card' id='${item.id}'> <img class='card_img' src='${item.img}' alt='${item.title}'> 
    <p class='title'>${item.title}</p> <p class='suptitle'>${item.suptitle}</p> <p class='title'>${item.prise}</p></div>`
})
let h1 = document.createElement('h1')
h1.textContent = 'Our Products'

row.before(h1)

let a = document.createElement('a')
a.textContent = 'Show More'

row.append(a)
a.href = '#'