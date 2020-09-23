$.ajax({
	url: "https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json",
	method: 'GET',
  	success: function(result) {
	    //console.log(result);
	    renderUser(JSON.parse(result));
  	},
  	error: function(result){
  		result.xhrStatus;
  	}
})

function renderCar(color, img){
  let carImg = $('.cars__image img');
      carImg.attr('src',img);
      carImg.attr('alt',color.replace('-', ' '));
  $('.cars__image .text').html(color.replace('-', ' '));
}

function renderUser(data) {
  let carIndex = 0;
  for(car in data){
    if(carIndex === 0){
      renderCar(car, data[car]);
      console.log(car, data[car]);
    }
    $('#color-container')
      .append(`<div class="mini ${carIndex === 0 ? `active` : `` } "data-name="${car}" data-img="${data[car]}"></div>`);
    carIndex++;
  }
}

$('body').on('click', '.mini', (ev)=>{
  $('.mini').removeClass('active');
  ev.target.classList.add('active');
  renderCar(ev.target.dataset.name, ev.target.dataset.img);
  console.log(ev.target.dataset.name, ev.target.dataset.img);
}); 
