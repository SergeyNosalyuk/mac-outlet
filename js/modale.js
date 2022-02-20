function hideModale(){
    const modale = document.querySelector('.modale-close');
    modale.remove();    
}

const filterSection = document.getElementById('filter-section');

function createModalWindow(item) {
    const modale = document.createElement('div');
    modale.addEventListener("click", function (){
        hideModale()
    })
        modale.innerHTML = `
        <div id="modale-close" class="modale-close">
              <div class="modale-box">
                <div class="modale-image">
                  <img src="${item.imgUrl}" alt="Device image" class="device-img">
                </div>
                <div class="modale-body">
                  <span class="body-top">${item.name}</span>
                  <div class="body-bottom">
                    <img class="bottom-icon-like" src="img/icons/like_filled.svg" alt="Like filled icon">
                    <p class="bottom-column-reviews"><strong>${item.orderInfo.reviews}%</strong> Positive reviews <br>Above avarage</p>
                    <p class="bottom-column-orders"><strong>999</strong><br>orders</p>
                  </div>
                  <div class="body-box">
                    <p><span>Color: </span>${item.color}</p>
                    <p><span>Operating System: </span>${item.os}</p>
                    <p><span>Chip: </span>${item.chip.name}</p>
                    <p><span>Height: </span>${item.size.height}</p>
                    <p><span>Width: </span>${item.size.width}</p>
                    <p><span>Depth: </span>${item.size.depth}</p>
                    <p><span>Weight: </span>${item.size.weight}</p>
                  </div>
                </div>
                <div id="modale-bottom" class="modale-bottom">
                  <span class="modale-bottom-price">$ ${item.price}</span>
                  <span class="modale-bottom-stock">Stock: <b>${item.orderInfo.inStock}</b> pcs.</span>
                  <button type="button" class="bottom-btn-active">Add to cart</button>
                </div>
              </div>
            </div>`;  
     
            
            filterSection.appendChild(modale);            
            modale.querySelector('.modale-box').addEventListener("click", (e)=>e.stopPropagation())
}