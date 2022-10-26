const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active")
})

const cartIc = document.querySelector(".cartIcon")
const shippingCart = document.querySelector(".shippingCart")

const cartToggle = () => {
  shippingCart.classList.toggle("active")
  if (shippingCart.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
}

cartIc.addEventListener("click", () => {
  cartToggle()
})

const swiper = new Swiper(".swiper", {
  // Optional parameters

  slidesPerView: 3,
  spaceBetween: 20,

  loopFillGroupWithBlank: true,
  loop: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      mouseWheel: true,
      allowSlidePrev: true,
      allowSlideNext: true,
      slidesPerGroup: 1,
    },
    693: {
      slidesPerView: 2,
      spaceBetween: 30,
      mouseWheel: true,
      allowSlidePrev: true,
      allowSlideNext: true,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
      mouseWheel: true,
      allowSlidePrev: true,
      allowSlideNext: true,
      slidesPerGroup: 3,
    },
  },
})

let wrapper = document.querySelector(".swiper-wrapper")

const renderProducts = () => {
  products.forEach((product) => {
    wrapper.innerHTML += `
    <div class="swiper-slide">
    <div class="card">
         <div class="card-image">
    <img src="${product.img}"png" alt="" class="cardImg"/>
  </div>
  <div class="description">
    <span class="name">${product.title}</span>
    <span class="priceIt">${product.price}</span>
  </div>
  <button class="addBtn" onclick="addToCart(${product.id}), cartToggle()">
    Add to cart <iconify-icon inline icon="akar-icons:shopping-bag" style="color: white;" width="24" height="24" class="bagIcon"></iconify-icon>
  </button>
</div>
</div>
    `
  })
}

renderProducts()

let cart = []

const addToCart = (id) => {
  if (cart.some((item) => item.id === id)) {
    alert("error")
  } else {
    const item = products.find((product) => product.id === id)
    cart.push({
      ...item,
      numberOfProd: 1,
    })
  }
  renderCart()
}

const cartgrid = document.querySelector(".cart-grid")

const renderCart = () => {
  cartgrid.innerHTML = ""
  cart.forEach((items) => {
    cartgrid.innerHTML += `
    <div class="cartItem">
    <div class = "imgItem">
          <img src="${items.img}" alt="" width="60px" height="60px" class="imgDress" /></div>
          <span class="title">${items.title}</span>
          <span class="price">${items.price}</span>
          <select name="numbers" id="numItem">
            <option value="1">${items.numberOfProd}</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        
    `
  })
}

let wrapper2 = document.querySelector(".container2")

const renderProducts2 = () => {
  products2.forEach((product) => {
    wrapper2.innerHTML += `
    <div class="swiper-slide">
    <div class="card">
         <div class="card-image">
    <img src="${product.img}"png" alt="" class="cardImg"/>
  </div>
  <div class="description">
    <span class="name">${product.title}</span>
    <span class="priceIt">${product.price}</span>
  </div>
  <button class="addBtn" onclick="addToCart2(${product.id}), cartToggle()">
    Add to cart <iconify-icon inline icon="akar-icons:shopping-bag" style="color: white;" width="24" height="24" class="bagIcon"></iconify-icon>
  </button>
</div>
</div>
    `
  })
}

renderProducts2()

const renderCart2 = () => {
  cartgrid.innerHTML = ""
  cart.forEach((items) => {
    cartgrid.innerHTML += `
    <div class="cartItem">
    <div class = "imgItem">
          <img src="${items.img}" alt="" width="60px" height="60px" class="imgDress" /></div>
          <span class="title">${items.title}</span>
          <span class="price">${items.price}</span>
          <select name="numbers" id="numItem">
            <option value="1">${items.numberOfProd}</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        
    `
  })
}

let cart2 = []

const addToCart2 = (id) => {
  if (cart.some((item) => item.id === id)) {
    err
  } else {
    const item = products2.find((product) => product.id === id)
    cart.push({
      ...item,
      numberOfProd: 1,
    })
  }
  renderCart2()
}