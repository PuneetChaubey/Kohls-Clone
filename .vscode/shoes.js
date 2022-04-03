// console.log('welcome')

// Shoes Categories

var catArr = [
  {
    catLink:
      'https://www.kohls.com/catalog/womens-shoes.jsp?CN=Gender:Womens+Department:Shoes+Promotions:Sale&BL=y&icid=sale-VN1-Shoes&pfm=internal%20campaign%20p13n_control%20Visual%20Nav&kls_sbp=27109065748123984492919780852936830659',
    catImg:
      'https://media.kohlsimg.com/is/image/kohls/3505308_White?wid=125&hei=125&op_sharpen=1',
    catName: 'Womens Shoes',
  },
  {
    catLink:
      'https://www.kohls.com/catalog/mens-shoes.jsp?CN=Gender:Mens+Department:Shoes+Promotions:Sale&BL=y&icid=sale-VN2-Shoes',
    catImg:
      'https://media.kohlsimg.com/is/image/kohls/4503164_Gray_Black?wid=125&hei=125&op_sharpen=1',
    catName: 'Mens Shoes',
  },
  {
    catLink:
      'https://www.kohls.com/catalog/girls-shoes.jsp?CN=Gender:Girls+Department:Shoes+Promotions:Sale&BL=y&icid=sale-VN3-Shoes&pfm=internal%20campaign%20p13n_control%20Visual%20Nav&kls_sbp=27109065748123984492919780852936830659',
    catImg:
      'https://media.kohlsimg.com/is/image/kohls/4248364_Multi?wid=125&hei=125&op_sharpen=1',
    catName: 'Girls Shoes',
  },
  {
    catLink:
      'https://www.kohls.com/catalog/boys-shoes.jsp?CN=Gender:Boys+Department:Shoes+Promotions:Sale&BL=y&icid=sale-VN4-Shoes&pfm=internal%20campaign%20p13n_control%20Visual%20Nav&kls_sbp=27109065748123984492919780852936830659',
    catImg:
      'https://media.kohlsimg.com/is/image/kohls/4867413_Navy_Lime?wid=125&hei=125&op_sharpen=1',
    catName: 'Boys Shoes',
  },
]

catArr.map(function (ele, ind, arr) {
  var div = document.createElement('div')

  var link = document.createElement('a')
  link.href = ele.catLink

  var img = document.createElement('img')
  img.src = ele.catImg
  img.style.width = '75%'

  var head4 = document.createElement('h4')
  head4.innerText = ele.catName

  link.append(img, head4)

  div.append(link)

  document.querySelector('#shoesCat').append(div)
})

// End of Shoes Categories

// Shoes list

var shoesList = [
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-3962079/sonoma-goods-for-life-catahoula-womens-slip-on-shoes.jsp?color=Taupe&prdPV=1',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/3962079_Taupe?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$39.99',
    regular: '$49.99',
    shoeName: "Sonoma Goods For Life® Catahoula Women's Slip-On Shoes",
    shoeRatings: ' ',
    reviews: '(2081)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-3760099/skechers-street-uno-stand-on-air-womens-sneakers.jsp?color=Black&prdPV=2',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/3760099_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$74.99',
    regular: 'Regular $79.99',
    shoeName: "Skechers® Street Uno Stand On Air Women's Sneakers",
    shoeRatings: ' ',
    reviews: '(2140)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4827855/asics-gel-contend-7-womens-running-shoes.jsp?color=Sheet%20Rock%20Pink&prdPV=3',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4827855_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$59.99 - $60.00',
    regular: 'Regular $64.99 - $65.00',
    shoeName: "ASICS GEL-Contend 7 Women's Running Shoes",
    shoeRatings: ' ',
    reviews: '(1537)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4842391/under-armour-zone-preschool-kids-basketball-shoes.jsp?prdPV=4',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4842391?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$49.99',
    regular: 'Regular $55.00',
    shoeName: "Under Armour Zone Preschool Kids' Basketball Shoes",
    shoeRatings: ' ',
    reviews: '(34)',
    sponsored: 'sponsored',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4926732/nike-downshifter-11-womens-running-shoe.jsp?color=Black%20Gray&prdPV=5',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4926732_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller:
      'https://www.kohls.com/snb/media/44.0.0-1594/images/new_product_badges/BestSeller@2x.png',
    shoeColors: ' ',
    sale: ' ',
    price: 'For Price, Add to Cart',
    regular: 'Regular $60.00',
    shoeName: "Nike Downshifter 11 Women's Running Shoes",
    shoeRatings: ' ',
    reviews: '(603)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4842390/under-armour-zone-grade-school-kids-basketball-shoes.jsp?prdPV=6',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4842390?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$54.99',
    regular: 'Regular $60.00',
    shoeName: "Under Armour Zone Grade School Kids' Basketball Shoes",
    shoeRatings: ' ',
    reviews: '(55)',
    sponsored: 'sponsored',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4825796/asics-gel-venture-8-womens-trail-running-shoes.jsp?color=Black%20Ivory&prdPV=7',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4825796_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$64.99 - $65.00',
    regular: 'Regular $69.99 - $70.00',
    shoeName: "ASICS GEL-Venture 8 Women's Trail Running Shoes",
    shoeRatings: ' ',
    reviews: '(720)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4484489/adidas-puremotion-adapt-womens-running-shoes.jsp?color=Black%20Dark%20Brown&prdPV=8',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4484489_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$59.99',
    regular: 'Regular $64.99 - $69.99',
    shoeName: "adidas Cloudfoam Puremotion Adapt Women's Running Shoes",
    shoeRatings: ' ',
    reviews: '(2593)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4299625/adidas-lite-racer-adapt-30-mens-sneakers.jsp?color=Black%20Black%20White&prdPV=9',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4299625_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller:
      'https://www.kohls.com/snb/media/44.0.0-1594/images/new_product_badges/BestSeller@2x.png',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$54.99 - $59.99',
    regular: '$64.99',
    shoeName: "adidas Lite Racer Adapt 3.0 Men's Sneakers",
    shoeRatings: ' ',
    reviews: '(3817)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-3938443/nike-court-vision-low-womens-sneakers.jsp?color=White&prdPV=10',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/3938443_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: ' ',
    price: 'For Price, Add to Cart',
    regular: 'Regular $65.00 - $70.00',
    shoeName: "Nike Court Vision Low Women's Sneakers",
    shoeRatings: ' ',
    reviews: '(694)',
    sponsored: ' ',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4988786/adidas-racer-tr21-mens-shoes.jsp?color=Black%20Orange%20Rush&prdPV=11',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4988786_Black_Orange_Rush?wid=245&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: ' ',
    sale: 'Sale ',
    price: '$69.99',
    regular: 'Regular $74.99',
    shoeName: "adidas Racer TR21 Men's Shoes",
    shoeRatings: ' ',
    reviews: '(857)',
    sponsored: 'sponsored',
  },
  {
    ShoeLink:
      'https://www.kohls.com/product/prd-4321364/skechers-summits-cool-classic-womens-shoes.jsp?color=White%20Silver&prdPV=12',
    shoeImg:
      'https://media.kohlsimg.com/is/image/kohls/4321364_ALT?wid=240&hei=240&op_sharpen=1',
    bestSeller: ' ',
    shoeColors: '',
    sale: 'Sale ',
    price: '$54.99',
    regular: 'Regular $59.99',
    shoeName: "Skechers® Summits Cool Classic Women's Shoes",
    shoeRatings: '',
    reviews: '(712)',
    sponsored: '',
  },
  // {
  //   ShoeLink: '',
  //   shoeImg: '',
  //   bestSeller: '',
  //   shoeColors: '',
  //   sale: 'Sale',
  //   price: '',
  //   regular: 'Regular',
  //   shoeName: '',
  //   shoeRatings: '',
  //   reviews: '()',
  //   sponsored: '',
  // },
]

shoesList.map(function (ele, ind, arr) {
  var card = document.createElement('div')

  var imglink = document.createElement('a')
  imglink.href = ele.ShoeLink

  var shoesImage = document.createElement('img')
  shoesImage.src = ele.shoeImg
  shoesImage.style.width = '240px'
  shoesImage.style.height = '240px'

  imglink.append(shoesImage)

  // var bSellerDiv = document.createElement('div')
  // bSellerDiv.setAttribute('class', 'bSellerDiv')

  // var bestSellerImg = document.createElement('img')
  // bestSellerImg.src = ele.bestSeller
  // bestSellerImg.style.width = '130px'
  // bestSellerImg.style.height = '100%'

  // bSellerDiv.append(bestSellerImg)

  var shoebtn = document.createElement('button')
  shoebtn.innerText = 'Add to Cart'
  shoebtn.setAttribute('class', 'shoebtn')
  shoebtn.addEventListener('click', function () {
    shoesCartFun(ele)
  })

  var colorContainer = document.createElement('div')
  colorContainer.setAttribute('class', 'colorContainer')

  var colours = document.createElement('img')
  colours.src = ele.shoeColors

  colorContainer.append(colours)

  var salePriceText = document.createElement('h4')
  salePriceText.innerText = ele.sale
  salePriceText.style.color = '#bd0f1b'

  var salePriceSpan = document.createElement('span')
  salePriceSpan.innerText = ele.price
  salePriceSpan.style.fontSize = '23px'

  salePriceText.append(salePriceSpan)

  var regular = document.createElement('p')
  regular.innerText = ele.regular
  regular.setAttribute('class', 'regular')

  var textLink = document.createElement('a')
  textLink.href = ele.ShoeLink

  var name = document.createElement('p')
  name.innerText = ele.shoeName
  name.setAttribute('class', 'shoeName')

  textLink.append(name)

  var ratingLink = document.createElement('a')
  ratingLink.href = ele.ShoeLink

  var ratingReview = document.createElement('div')
  ratingReview.setAttribute('class', 'ratingReview')

  var rating = document.createElement('p')
  rating.innerText = ele.shoeRatings

  var reviews = document.createElement('p')
  reviews.innerText = ele.reviews

  ratingReview.append(rating, reviews)

  ratingLink.append(ratingReview)

  var sponsored = document.createElement('p')
  sponsored.innerText = ele.sponsored
  sponsored.setAttribute('class', 'sponsored')

  card.append(
    imglink,
    // bSellerDiv,
    shoebtn,
    // colorContainer,
    salePriceText,
    regular,
    textLink,
    ratingLink,
    sponsored
  )

  document.querySelector('#shoesList').append(card)
})

// End of Shoes list
//  {
//   ShoeLink: '',
//   shoeImg: '',
//   bestSeller: '',
//   shoeColors: '',
//   sale: 'Sale',
//   price: '',
//   regular: 'Regular',
//   shoeName: '',
//   shoeRatings: '',
//   reviews: '()',
//   sponsored: '',
// }

var shoesCartArr = JSON.parse(localStorage.getItem('cart')) || []

function shoesCartFun(ele) {
  // console.log(ele)

  shoesCartArr.push(ele)

  // console.log(shoesCartArr)

  localStorage.setItem('cart', JSON.stringify(shoesCartArr))
}
