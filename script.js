// ========== BÀI 1: SẢN PHẨM ==========
const products=[{name:'Cà phê Arabica',price:120000},{name:'Cà phê Robusta',price:90000},{name:'Bánh quy bơ',price:50000},{name:'Trà sữa nâu',price:45000},{name:'Chocolate handmade',price:150000}];
function renderProducts(listId,msgId){
    const list=document.getElementById(listId);
    const msg=document.getElementById(msgId);
    list.innerHTML='';
    products.filter(p=>p.name.toLowerCase().includes(search.value.toLowerCase().trim())).forEach(p=>{const d=document.createElement('div');
        d.className='card';d.innerHTML=`<span class='badge'>SALE</span><h3>${p.name}</h3><p class='price'>${p.price.toLocaleString()} đ</p>`;
        list.appendChild(d)});if(!list.children.length)msg.innerText='Không tìm thấy sản phẩm';else msg.innerText='';
}

// ========== BÀI 2: FORM ==========
function handleRegister(e){
    e.preventDefault();
    const emailR=/^\S+@\S+\.\S+$/;
    const passR=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!emailR.test(email.value)||!passR.test(password.value)||!agree.checked){
        formMsg.innerText='Thông tin không hợp lệ';
        formMsg.style.color='red';
        return;
    }localStorage.setItem('user',JSON.stringify({
        name:name.value,email:email.value}));
        formMsg.innerText='Đăng ký thành công';
        formMsg.style.color='green';
}

// ========== BÀI 3: COUNTDOWN ==========
function startTimer(){
    let t=600;
    const el=document.getElementById('timer');
    const i=setInterval(()=>{t--;
        el.textContent=`${String(Math.floor(t/60)).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`;
    if(t<=60)el.classList.add('warning');
    if(t<=0){clearInterval(i);
        alert('Hết thời gian!')}},1000);
    }
