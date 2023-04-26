const date = new Date();

const renderdate = () => {
  
  // đưa ngày về đầu tháng
  date.setDate(1);
  const monthDays = document.querySelector(".days");

  //Tìm số Ngày của tháng hiện tại
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
  ).getDate();

  // tìm số ngày của tháng sau
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  //tìm vị trí thứ ngày hiện tại
  const firstDayIndex = date.getDay();

// tìm vị trí ngày cuối của tháng này
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

    //tìm vị trí thứ ngày hiện tại số phần tử tháng sau trong lịch
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ]

  document.querySelector('.content h3').innerHTML = months[date.getMonth()];
  document.querySelector('.content h4').innerHTML = date.getFullYear()
  document.querySelector('.content p').innerHTML = new Date().toDateString();
  document.querySelector('.more-chone p').innerHTML = months[date.getMonth()] +' '+ date.getFullYear();
  let days = "";

  // các ngày trước tháng đoá
  var years = date.getFullYear()
  var monthsss = date.getMonth()
  for (let x = firstDayIndex; x>0;x--){
    var kq = [prevLastDay - x + 1,monthsss,years]
    days += `<div class="next-days clickday" value='${kq}'>${prevLastDay - x + 1}</div>`
  }

  // tính cách ngày trong tháng này 
  for (let i = 1; i <= lastDay; i++){
    let kqtoday = [i,monthsss+1,years]
    if(i===new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear()=== new Date().getFullYear()){
      days += `<div class="today">${i}</div>`
    } else {
      days += `<div class="clickday"value='${kqtoday}' >${i}</div>`
    }
  }

    //tìm vị trí thứ ngày hiện tại số phần tử tháng sau trong lịch
  for(let j = 1; j <= nextDays; j++){
    let kqnext =[j,monthsss+2,years]
    days += `<div class="next-days clickday" value='${kqnext}' >${j}</div>`
    monthDays.innerHTML = days;
  }
};

// prew tháng
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    const abc = localStorage.getItem('vitri')
    renderdate();
    clickday()
})

// next tháng
document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderdate();
  clickday()
})

renderdate();
clickday()
function clickday(){
  var clickday = document.querySelectorAll('.clickday')
  var kqqq = localStorage.getItem('value')
  console.log(kqqq) 
for (let i = 0; i < clickday.length; i++) {
  clickday[i].classList.remove('colorr')
  const current = clickday[i].getAttribute('value');

  clickday[i].addEventListener('click',function(event){
    [...clickday].map(function(clday){
      clday.classList.remove('colorr')
    })
    var cookieValue = clickday[i].getAttribute('value');
    localStorage.setItem('value',cookieValue)
    console.log(cookieValue, kqqq)
    event.target.classList.add('colorr')
  })
  if(current === kqqq){
    clickday[i].classList.add('colorr')

  }
}
}


// backgroup lấy trên mạng
window.onload = function(){
  //get and store canvas & context
    var canvas = document.getElementById("sky");
    var ctx    = canvas.getContext("2d");
    var h     = window.innerHeight;
    var w     = window.innerWidth;
  //set dims to window
    canvas.height = h;
    canvas.width  = w;
  // Generate snowflakes 
    var mf = 100; // max flakes
    var flakes = [];
   // loop through the empty flakes 
    for(var i = 0; i < mf; i++){
      
      flakes.push({
        x: Math.random()*w,
        y: Math.random()*h,
        r: Math.random()*5+2, //min of 2px and max 7px
        d: Math.random() + 1  // density of flakes
        })
    }
    //draw flakes 
    function drawFlakes(){
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "white";
      ctx.beginPath();
      for(var i = 0; i < mf; i++){
         var f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
      }
      ctx.fill();
      moveFlakes();
    }
   //animate the flakes
    var angle = 0;
    function moveFlakes(){
      angle += 0.01;
      for(var i = 0; i < mf; i++){
        //store the current flake
        var f = flakes[i];
        //Upadte Y and X coordinate of each snow
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 2;
        //if the snow reach to the bottom send it to the top again
        if(f.y > h){
          flakes[i] = {x: Math.random()*w, y: 0, r: f.r, d: f.d};
          }
        }
      }
    setInterval(drawFlakes, 25);
    }
    function openmonth(){
        $('.more_chone-month').addClass("dpb")
        $('.days').addClass("dpn")
        $('.weekdays').addClass("dpn")
      const monthhhh = [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ]
    
      for (let i = 0; i < monthhhh.length; i++) {
        console.log(monthhhh[i])
        $('.month-row').append(`
        <div class="col-4 month_cell" onclick='targetmonth(${i})'>
       ${monthhhh[i]}
         </div>`
      )
        
      }
    const month_cell =document.querySelectorAll('.month_cell')
    const index = date.getMonth()
    month_cell[index].classList.add('blue')
      
    }

    function targetmonth(i){
     date.setMonth(i)
     $('.more_chone-month').removeClass("dpb")
     $('.days').removeClass("dpn")
     $('.weekdays').removeClass("dpn")
     $('.more_chone-month').addClass("dpn")
     $('.days').addClass("dpf")
     $('.weekdays').addClass("dpf")

      renderdate()
    }