class item_thub extends HTMLElement{
    constructor(){
        super();
        let atb = this.attributes;
        let img = this.attributes.img.value;

        const stl = this.style;
        const title = document.createElement("h3");
        title.classList.add("thub_title");
        title.innerText = atb.title.value;
        // this.appendChild(title);

        const btn = document.createElement("a");
        btn.setAttribute('type','button');
        const com_soon = this.attributes.com_soon.value;
        if(com_soon == "false"){
            btn.setAttribute('href', atb.dLink.value);
            btn.setAttribute('download', atb.download.value);
            btn.classList.add('btn-3');
            btn.innerText = atb.btnName.value;
        }else{
            btn.classList.add('btn-4');
            // btn.setAttribute('href', '#');
            // btn.setAttribute('download','#');
            btn.innerText = 'Comming Soon';
        }
        btn.disabled = true;
        // btn.style = 'position:relative; top:90%; left:15%;padding:3% 25% 3% 25%;'
        // this.appendChild(btn);

        const des = document.createElement('p');//description
        des.innerText = atb.des.value;
        des.classList.add('thub_des');
        // des.style = 'text-align:center; position:relative; top:105px;'
        // this.appendChild(des);

        const div = document.createElement("div");
        div.style = `display:flex; width:100%; height:100%;flex-direction:column;
        align-items:center; justify-content:center;`;

        // div.appendChild(title);
        const i = document.createElement("div");
        i.style = `background-image:url(${img});
            background-size:contain;position:center;
            width:300px; height:300px;background-position:center;margin:20px;
            background-repeat: no-repeat;`;
        div.appendChild(i);

        div.appendChild(title);
        div.appendChild(des);
        div.appendChild(btn);
        // this.style = `background-image:url(${img}`;
        this.appendChild(div);
    }
} 
window.customElements.define('item-thub', item_thub);

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else{
        //     entry.target.classList.remove('show');
        // }
    });
});
const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

const aboutBtn = document.getElementById('aboutBtn');
const about_sep = document.getElementById('about_sep');

const HomeBtn = document.getElementById('homeBtn');
const header = document.getElementById('header');

const ContactBtn = document.getElementById('contactBtn');
const contact_sep = document.getElementById('contact_sep');

const AppsGamesBtn = document.getElementById('apps_games_btn');
const AppsGames_sep = document.getElementById('apps_games_sep');

const learnBtn = document.getElementById('learnBtn');

function ScrollToAboutSection(){
    about_sep.scrollIntoView({
        behavior:'smooth'
    });
}
HomeBtn.onclick = () => {
    header.scrollIntoView({
        behavior:'smooth'
    });
}
ContactBtn.onclick = () => {
    contact_sep.scrollIntoView({
        behavior:'smooth'
    });
}
AppsGamesBtn.onclick = () => {
    AppsGames_sep.scrollIntoView({behavior:'smooth'});
}