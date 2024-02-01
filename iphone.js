let month = document.querySelector(".money_per_month")
let mini_part1 = document.getElementById("mini_part1")
let mini_part2 = document.getElementById("mini_part2")
let pic = document.getElementById("iphone_picture");
let the_smallest = document.getElementById("256GB")
let the_medium = document.getElementById("512GB")
let the_biggest = document.getElementById("1TB")
let color_text = document.getElementById("color")

mini_part1.onclick = () => {
  iphone_picture.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693009279082";
    month.innerHTML = "From $999 or $41.62/mo. for 24 mo.*"
    mini_part1.style.border = "2px solid blue"
    mini_part2.style.border = "1px solid black"
  };

mini_part2.onclick = () => {
  iphone_picture.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693009284541";
    month.innerHTML = "From $1199 or $49.95/mo. for 24 mo.*"
    mini_part2.style.border = "2px solid blue"
    mini_part1.style.border = "1px solid black"
    the_smallest.innerHTML = "From  $1199 <br/> or $49.95/mo. <br/> for 24 mo"
    the_medium.innerHTML = "From  $1399 <br/> or $58.29/mo. <br/> for 24 mo"
    the_biggest.innerHTML = "From  $1599 <br/> or $66.62/mo. <br/> for 24 mo"
  };

  let btns = document.querySelectorAll("#buttons");

  let images = {
      Natural_Titanium: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993",
      Blue_Titanium: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609",
      White_Titanium: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180",
      Black_Titanium: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018",
  };


    btns.forEach((btn) => {
       let color = btn.getAttribute("data-color");
       
       btn.onclick = () => {
                  
       pic.style.opacity = 0;
            
      setTimeout(() => {
       pic.setAttribute("src", images[color]);
       color_text.innerText = color
                      
       pic.onload = () => {

        pic.style.opacity = 1;
      };
      }, 2000);
      };
    });

    
