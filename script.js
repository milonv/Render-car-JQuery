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

function renderUser(data) {
  console.log(data);

  let cars = ``;
  let cars_image, cars_text;

  $(".mini").on("click", function() {

    //$(".mini").removeClass("active");
    //$(this).addClass("active");

    let type = $(this).data("mini");
     
        switch(type) {

          case 'solid-black':
            cars_image = solid-black;
            cars_text = 'Solid black';
            break;
          case 'midnight-silver':
            cars_image = midnight-silver;
            cars_text = 'Midnight silver';
            break;
          case 'obsidian-black':
            cars_image = obsidian-black;
            cars_text = 'Obsidian black';
            break;
          case 'deep-blue':
            cars_image = deep-blue;
            cars_text = 'Deep blue';
            break;
          case 'silver':
            cars_image = silver;
            cars_text = 'Silver';
            break;
          case 'white':
            cars_image = white;
            cars_text = 'White';
            break;
          case 'red':
            cars_image = red;
            cars_text = 'Red';
            break;
          case 'orange':
            cars_image = orange;
            cars_text = 'Orange';
            break;
          case 'yellow':
            cars_image = yellow;
            cars_text = 'Yellow';
            break;
          case 'glacier-blue':
            cars_image = glacier-blue;
            cars_text = 'Glacier blue';
            break;
          case 'electric-blue':
            cars_image = electric-blue;
            cars_text = 'Electric blue';
            break;
          case 'green-lotus':
            cars_image = green-lotus;
            cars_text = 'Green lotus';
            break;
        }
  })

    cars += `
            <header class="header">
              <img src="./img/tesla-logo.png" class="logo" alt="tesla-logo">
            </header>
            <div class="title">
              <h1>Tesla</h1>
              <h2>Roadster</h2>
              <h3>Colors</h3>
            </div>
            <div id="cars-container">
               <div class="cars__image fade" style="display: block;">
                 <img src="${this.cars_image}" style="width: 100%" alt="${this.cars_text}">
                 <div class="text">${this.cars_text}</div>
               </div>
            </div>
            <div id="color-container">
              <div class="mini solid-black"></div>
              <div class="mini midnight-silver"></div>
              <div class="mini obsidian-black"></div>
              <div class="mini deep-blue"></div>
              <div class="mini silver"></div>
              <div class="mini white"></div>
              <div class="mini red"></div>
              <div class="mini orange"></div>
              <div class="mini yellow"></div>
              <div class="mini glacier-blue"></div>
              <div class="mini electric-blue"></div>
              <div class="mini green-lotus"></div>
            </div>
            <footer class="footer">
    
              <div class="more">
                  <div class="more-on">
                      <p>more on</p>
                  </div>
                  <div class="links">
                      <a href="#">twitter</a>
                      <a href="#">github</a>
                      <a href="#">behance</a>
                      <a href="#">product hunt</a>
                  </div>
              </div>
              <div>
                  <p>Just for fun ❤</p>
              </div>
            </footer>
          `;
  
  document.body.innerHTML = cars;
}  
