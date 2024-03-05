// bicycles data
var bicycles = [
    {
      model: "Model XYZ 1",
      brand: "XYZ Bikes",
      type: "MMX",
      price: 209.99,
      discount_amount: 20.99,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-209-99$.webp",
      discount: true,
      condition: "new",
      location: "Kampot",
      new_arrival: true,
    },
    {
      model: "Model XYZ 2",
      brand: "XYZ Bikes",
      type: "MMX",
      price: 269,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-269$.jpg",
      discount: false,
      condition: "new",
      location: "Battambang",
      new_arrival: true,
    },
    {
      model: "Model ABC 1",
      brand: "ABC Cycles",
      type: "Electric",
      price: 599,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-599$.jpg",
      discount: false,
      condition: "new",
      location: "Phnom Penh",
      new_arrival: true,
    },
    {
      model: "Model ABC 2",
      brand: "ABC Cycles",
      type: "Electric",
      price: 1399,
      discount_amount: 279.8,
      discount_percentage: 20,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.jpg",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Siemreap",
      new_arrival: true,
    },
    {
      model: "Model ABC 3",
      brand: "ABC Cycles",
      type: "Electric",
      price: 1399,
      discount_amount: 559.6,
      discount_percentage: 40,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Kep",
      new_arrival: false,
    },
    {
      model: "Model PQR 1",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 27,
      discount_amount: 2.7,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 1",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 27,
      discount_amount: 13.5,
      discount_percentage: 50,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
      discount: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 2",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 160.98,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-160-98$.jpg",
      discount: false,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 3",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 309,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-309$.jpg",
      discount: false,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 4",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 27,
      discount_amount: 2.7,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-2-27$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 5",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 375,
      discount_amount: 37.5,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-375$.jpg",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 599.99,
      discount_amount: 29.99,
      discount_percentage: 5,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599.99$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 599,
      discount_amount: 59.9,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 799.99,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-799-99$.webp",
      discount: false,
      free_delivery: true,
      condition: "used",
      location: "Siemreap",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 749.99,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-749-99$.jpg",
      discount: false,
      free_delivery: true,
      condition: "new",
      location: "Phnom Penh",
      new_arrival: false,
    },
  ];

 
  // document.getElementById("filter").innerHTML+= ''

  // for (let i=0; i<bicycles.length; i++){
  //   console.log("bicycle")
  // }

  
  // const choose = document.getElementById("filter");
  // var contentHTML = "";
  // for (let i = 0; i < 3; i++) {
  // contentHTML += `
  //     <div class="bike-card">
  //     <img src="${bicycles[i].image}">
  //     ${bicycles[i].model}
  //     ${bicycles[i].brand}
  //     ${bicycles[i].type}
  //     ${bicycles[i].discount_amount}
  //     ${bicycles[i].discount_percentage}
  //     ${bicycles[i].discount}
  //     ${bicycles[i].free_delivery}
  //     ${bicycles[i].condition}
  //     ${bicycles[i].location}
  //     ${bicycles[i].new_arrival}
  //     </div>
  //   `;
  // }
  // choose.innerHTML = `
  //   ${contentHTML}
  // `;

  


  

  // document.getElementById("searchInput").addEventListener("input", function() {
  //   var filter = this.value.toLowerCase();
  //   var items = document.querySelectorAll("#itemsList li");
  
  //   items.forEach(function(item) {
  //     var text = item.textContent.toLowerCase();
  //     if (text.indexOf(filter) !== -1) {
  //       item.style.display = "block";
  //     } else {
  //       item.style.display = "none";
  //     }
  //   });
  // });
  




  function getBicyclesByType(textbicycle) {
    let results = [];
    for (let i = 0; i < bicycles.length; i++) {
      if (bicycles[i].type === textbicycle) {
        results.push(bicycles[i]);
      }
    }
    return results;
  }
  
  function display3Bicycles(declare, data) {
    let i = 0;
    for (let index = 1; index <= 3; index++) {
      document.getElementById(declare).innerHTML += createBicycleCardHTML(
        data[i]
      );
      i++;
    }
  }
  
  function createBicycleCardHTML(bicycle) {
    return `
      <div style="border: 1px solid black; padding: 16px; border-radius:25px ; margin-top:5%; width:20%; margin-left:2%; width:380px;height:380px">
          <img src="${bicycle.image}" / style="width:70%; height:60%; margin-left:40px; margin-top:30px;">  

        <div style= " display:flex; width:100%; margin-top:30px; margin-left:5px;">
        
          <div style=" width:50%;"> <h1>${bicycle.brand}</h1>
               <p style="font-size:20px;">${bicycle.model}</p>
          </div>
          <div style=" width:30%; margin-left:30%;">  <p style="font-size:20px;">${bicycle.condition}
         $${bicycle.price} </p>
          </div>

        </div>
      </div>

      `;
  }
  
  let roadList = getBicyclesByType("Road");
  let mountainList = getBicyclesByType("Mountain");
  let electricList = getBicyclesByType("Electric");
  let MMXList = getBicyclesByType("MMX");
  
  display3Bicycles("road", roadList);
  display3Bicycles("mountain", mountainList);
  display3Bicycles("electric", electricList);
  display3Bicycles("MMX", MMXList);
  