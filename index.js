const q = document.querySelector.bind(document)
const qa = document.querySelectorAll.bind(document)
gsap.registerPlugin(ScrollToPlugin,ScrollTrigger)


var body1_swiper = new Swiper('.body1-swiper',{
    slidesPerView:3,
    spaceBetween:10,
    breakpoints:{
        1:{
            slidesPerView:1.5,
            centeredSlides:true,
        },
        1080:{
            slidesPerView:3,
        }
    }
})


// body2 
// q('.body2-card').addEventListener('mousemove',(e)=>{
//     let top = q('.body2-card').getBoundingClientRect().top
//     let left =q('.body2-card').getBoundingClientRect().left
//     let width = q('.body2-card').getBoundingClientRect().width
//     let height = q('.body2-card').getBoundingClientRect().height
//     let x = e.pageX - left
//     let y = e.pageY - document.documentElement.scrollTop - top
//     let X
//     let Y
//     X = Math.round( x - width / 2)
//     Y = Math.round(height / 2 - y)
//     q('.body2-card').style.transform = `perspective(500px) rotateX(${X / 20}deg) rotateY(${Y / 20}deg)`
// })
// q('.body2-right').addEventListener('mouseleave',()=>{
//     q('.body2-card').style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
// })

gsap.set('.body2-amima',{autoAlpha:0,xPercent:-100})
// var body2_anim = gsap.timeline()
// body2_anim.to('.body2-amima',{autoAlpha:1,xPercent:0,duration:.5})
// body2_anim.to('.body2-amima',{autoAlpha:1,xPercent:100,duration:.5})
// body2_anim.set('.body2-amima',{autoAlpha:0,xPercent:-100})
// body2_anim.pause()
function body2_click(e){
    // body2_anim.restart()
    qa('.body2-click').forEach(item=>{
        item.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    body2_ck = e.currentTarget.innerText
    theme = body2_data[body2_ck].theme
    // setTimeout(() => {
        q('.body2-card-img').src = body2_data[body2_ck].img
        q('.body2-card-title').innerText = body2_data[body2_ck].title
        q('.body2-card-text').innerHTML = body2_data[body2_ck].text
        q('.body2-card-date').innerText = body2_data[body2_ck].date
    // }, 500);
    mobile()
}




// body3

var body3_btn_swiper = new Swiper('.body3-swiper',{
    slidesPerView:2,
    breakpoints:{
        1:{
            slidesPerView:1.5,
            centeredSlides:true,
        },
        1080:{
            slidesPerView:2,
        },
    }
})

var body3_card_swiper = new Swiper('.body3-card-swiper',{
    slidesPerView:4,
    spaceBetween:10,
    breakpoints:{
        1:{
            slidesPerView:1.5,
            centeredSlides:true,
        },
        1080:{
            slidesPerView:4
        },
    }
})

body3_btn.forEach((item,index)=>{
    body3_btn_swiper.appendSlide(`
    <div class="swiper-slide df jcc aic">
        <div id="${item}" class="eeee ${item === body3_click ?'active':''}  ${index === 0 ?'body3-btn':'body3-btn2'}" onclick="body3_c(event)">
            <h1 class="f5 fw">${item}</h1>
        </div>
    </div>
    `)
})
gsap.to('.body3-btn',{
    y:50,
    duration:2,
    yoyo:true,
    repeat:-1
})
gsap.to('.body3-btn2',{
    y:-50,
    duration:2,
    yoyo:true,
    repeat:-1
})
// var super_shy = gsap.timeline()
gsap.set('.super-shy',{autoAlpha:0})
gsap.set('.super-shy li',{yPercent:100})
// super_shy.to('.super-shy',{autoAlpha:1})
// super_shy.to('.super-shy li',{yPercent:0,duration:.3,stagger:.1},'<')
// super_shy.to('.super-shy li',{yPercent:-100,duration:.3,stagger:.1})
// super_shy.set('.super-shy li',{yPercenter:100,duration:.1})
// super_shy.set('.super-shy',{autoAlpha:0,duration:.1},'<')
// super_shy.pause()

function mobile(){
    body3_card_swiper.removeAllSlides()
    body3_data[body3_click][theme].forEach(item=>{
        body3_card_swiper.appendSlide(`
        <div class="swiper-slide">
            <div class="card body3-card">
                <img src="${item.img}" alt="" class="card-img-top body3-card-img lightbox-click">
                <div class="card-body">
                    <h1 class="card-title f5 fw text-center">${item.title}</h1>
                    <p class="card-text f6">${item.text}</p>
                </div>
            </div> 
        </div>
        `)
    })
    lightbox_click()
}

function body3_c(e){
    // super_shy.restart()
    body3_click = e.currentTarget.id
    qa('.eeee').forEach(i=>{
        i.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    setTimeout(() => {
        mobile()
    }, 700);
}
mobile()

gsap.from('.body3-card-swiper',{
    xPercent:100,
    scrollTrigger:{
        trigger:'#body3',
        start:'top center',
        end:'center center',
        scrub:true,
        // markers:true,
    }
})

// body4

var body4_swiper = new Swiper('.body4-swiper',{
    spaceBetween:10,
    grabCursor:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    pagination:{
        el:'.body4-pagination',
        clickable:true
    },
    navigation:{
        nextEl:'.body4-next',
        prevEl:'.body4-prev',
    }
})


Chart.defaults.font.size = 18
Chart.defaults.color = '#79BA78'
var body4_chart = new Chart(q('#body4-chart'),{
    type:'doughnut',
    data:{
        labels:['歷史之旅','城市大自然','街頭藝術之旅','多元文化探索'],
        datasets:[{
            label:'萬人',
            data:['20','25','30','25',],
            backgroundColor:[
                '#79BA78',
                '#E9B824',
                '#FF8080',
                '#6699E9',
            ]
        }]
    }
})


// body5

body5_btn.forEach(item=>{
    q('.traffic-box ul').innerHTML +=`
        <li class="traffic-btn my-3 fw ${item === body5_btn_click ?'active':''}" onclick="body5_click(event)">${item}</li>
    `
})
function body5_click(e){
    body5_btn_click = e.target.innerText
    qa('.traffic-btn').forEach(item=>{
        item.classList.remove('active')
    })
    e.target.classList.add('active')
    q('.traffic-text').innerHTML = body5_data[body5_btn_click]
    gsap.fromTo('.traffic-text',{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:1})
}


var mess_data = []

function message_submit(e){
    if(q('.body5-right input').value != ''){
        alert('感謝您的留言，已為您添加到後端')
        e.preventDefault()
        mess_data.push({
            name:q('.message-name').value,
            email:q('.message-email').value,
            text:q('.message-text').value,
        })
        localStorage.setItem('mess-data',JSON.stringify(mess_data))
        body4_swiper.appendSlide(`
        <div class="swiper-slide">
            <div class="forum">
                <div>
                    <h1 class="f5 fw forum-name">${q('.message-name').value}</h1>
                    <p class="f7 text-end">${q('.message-email').value}</p>
                </div>
                <div class="forum-content p-3">
                    <p class="f7">${q('.message-text').value}</p>
                </div>
            </div>
        </div>
        `)
        q('.message-name').value = ''
        q('.message-email').value = ''
        q('.message-text').value = ''
        location.href = '#body4'
        body4_swiper.slideTo(body4_swiper.slides.length - 1 , 0)
        body4_swiper.autoplay.start()
    }
}
window.addEventListener('load',()=>{
    var local_data = JSON.parse(localStorage.getItem('mess-data'))
    local_data.forEach(item=>{
        body4_swiper.appendSlide(`
        <div class="swiper-slide">
            <div class="forum">
                <div>
                    <h1 class="f5 fw forum-name">${item.name}</h1>
                    <p class="f7 text-end">${item.email}</p>
                </div>
                <div class="forum-content p-3">
                    <p class="f7">${item.text}</p>
                </div>
            </div>
        </div>
        `)
    })
    mess_data = mess_data.concat(local_data)
})





// 

function lightbox_click(){
    qa('.lightbox-click').forEach(item=>{
        item.addEventListener('click',(e)=>{
            q('.lightbox-img').src = e.target.src
            gsap.fromTo('.lightbox',{autoAlpha:0},{autoAlpha:1,duration:.5})
            q('.lightbox').style.display = 'flex'
            document.body.style.overflowY = 'hidden'
        })
    })
}
q('.lightbox').addEventListener('click',()=>{
    gsap.to('.lightbox',{
        autoAlpha:0,
        duration:.5,
        onComplete:()=>{
            q('.lightbox').style.display = 'none'
        }
    })
    document.body.style.overflowY = 'auto'
})
q('.lightbox-x').addEventListener('click',()=>{
    gsap.to('.lightbox',{
        autoAlpha:0,
        duration:.5,
        onComplete:()=>{
            q('.lightbox').style.display = 'none'
        }
    })
    document.body.style.overflowY = 'auto'
})
lightbox_click()



// 
var log = 0
const login_modal = new bootstrap.Modal('#login')
const logout_modal = new bootstrap.Modal('#logout')

q('.nav-login').addEventListener('click',()=>{
    if(log === 0){
        qa('#login input').forEach(element => {
            element.value = ''
        })
        login_modal.show()
    }else{
        logout_modal.show()
    }
})
function login(){
    log = 1
    qa('#login input').forEach(element => {
        element.value = ''
    })
    q('.nav-login').innerHTML +='<span class="f8 fw color2">B034</span>'
    logout_modal.show()
}
function logout(){
    log = 0
    q('.nav-login').innerHTML ='<img src="./images/nav-login.png" alt="" class="nav-icon">'
    q('.nav-login').click()
}



var s = 'sun'
const color_data = {
    'sun':{
        '--bg--color':'#79BA78',
        '--bg--color2':'#E8B724',
        '--body--bg':'#fff',
        '--body--color':'#000',
    },
    'moon':{
        '--bg--color':'#E8B724',
        '--bg--color2':'#79BA78',
        '--body--bg':'#272829',
        '--body--color':'#fff',
    },
}

function sun(){
    if(s === 'sun'){
        s = 'moon'
        q('.nav-sun').src = './images/nav-moon.png'
    }
    else{
        s = 'sun'
        q('.nav-sun').src = './images/nav-sun.png'
    }
    for(let key in color_data[s]){
        document.documentElement.style.setProperty(key,color_data[s][key])
    }
}

var rrr = 0
q('.robot-btn').addEventListener('click',()=>{
    gsap.from('.robot-btn img',{
        autoAlpha:0,
        duration:.5,
    })
    q('.robot-box').classList.toggle('active')
    q('.robot-btn img').src = ['./images/x.png','./images/robot.png'][rrr++%2]
})

function robot_submit(){
    if(q('.robot-input').value != ''){
        q('.robot-body').innerHTML += `
        <p class="df jcc align-items-end fdc">
            <span class="f7 fw text-dark">您</span>
            <span class="f8 robot-mess2">
                ${q('.robot-input').value}
            </span>
        </p>
        `
        let ans = '感謝您的詢問，小寶將幫您告知網頁管理員為您回復'

        setTimeout(() => {
            q('.robot-body').innerHTML += `
            <p>
                <span class="f7 fw text-dark">小寶</span>
                <span class="f8 robot-mess">
                    ${ans}
                </span>
            </p>
            `
            q('.robot-body').scrollTo({
                top:q('.robot-body').scrollHeight,
                behavior:'smooth'
            })
        }, 500);
        q('.robot-input').value = ''
    }
}
q('.robot-input').addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        robot_submit()
    }
})

var f = 1
const fs_data = {
    '--fs--title':80,
    '--fs--1':70,
    '--fs--2':60,
    '--fs--3':50,
    '--fs--4':40,
    '--fs--5':30,
    '--fs--6':23,
    '--fs--7':20,
    '--fs--8':17,
}
function fs(){
    f = f % 3 + 1
    for(let key in fs_data){
        document.documentElement.style.setProperty(key,fs_data[key] + 3 * (f-1) +'px')
    }
    q('.fs-btn').innerText = 'A' +'+'.repeat(f-1)
}

function gsap_title(i){
    gsap.from(i,{
        autoAlpha:0,
        x:50,
        scrollTrigger:{
            trigger:i,
            start:'top 85%',
            end:'center 85%',
            toggleActions:'play none none reverse',
            // markers:true,
        }
    })
}
function gsap_title2(i){
    gsap.from(i,{
        autoAlpha:0,
        x:-50,
        scrollTrigger:{
            trigger:i,
            start:'top 85%',
            end:'center 85%',
            toggleActions:'play none none reverse',
            // markers:true,
        }
    })
}

gsap_title(q('.title'))
gsap_title2(q('.title2'))
gsap_title(q('.title3'))
gsap_title2(q('.title4'))
gsap_title(q('.title5'))