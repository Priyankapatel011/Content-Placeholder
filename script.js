const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated_bg_text');


setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="image" />'

    title.innerHTML = 'Lorem ipsum dolor sit amet'

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veritatis!'

    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="image"></img>'

    name.innerHTML = 'Zenny Smith'
    date.innerHTML = 'Nov 06, 2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}


