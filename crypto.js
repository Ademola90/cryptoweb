function navigateTo(page) {
    if (page === 'home') {
        window.location.href = 'index.html';
    } else if (page === 'brand') {
        window.location.href = 'storePage.html';
    }
}


const cardOne = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dybryo15k/image/upload/v1701882009/img_xeb6uc.png',
        heading: 'Create',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet ",
        btntext: "Get Started",
        arrow: "https://res.cloudinary.com/dybryo15k/image/upload/v1701882009/arrow_ccandi.png",
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dybryo15k/image/upload/v1701882009/img_1_w7egxy.png',
        heading: 'Login',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet ",
        btntext: "Find an ATM",
        arrow: "https://res.cloudinary.com/dybryo15k/image/upload/v1701882009/arrow_ccandi.png",
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dybryo15k/image/upload/v1701882009/img_2_isbv3t.png',
        heading: 'Manage',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet ",
        btntext: "Download the App",
        arrow: "https://res.cloudinary.com/dybryo15k/image/upload/v1701882009/arrow_ccandi.png",
    },
];

const cardContainer1 = document.querySelector('.card1');

const displayCard1 = (cards) => {
    cards.map((card) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <div class=" bg-[#1A1B23] p-3 lg:w-[280px] rounded-2xl justify-center grid items-center">

            <div class="flex justify-center items-center">
            <img class="box w-[80px] h-[80px] rounded-md" src="${card.image}" alt="${card.name}">
            </div>
                
                <div>
                    <p class="font-bold text-center  text-[32px] font-roboto">${card.heading}</p>
                    <p class="font-roboto text-center py-3">${card.text}</p>
                    
                    <div class="flex justify-center items-center">
                    <button class="flex items-center gap-2">
                        <p class=" text-[#B982FF] text-[16px]">${card.btntext}</p>
                        <img class="h-[16px] w-[12px]" src=${card.arrow} >
                    </button>
                    </div>
                   
                </div>
            </div>
        `;

        cardContainer1.appendChild(postElement);
    });
};

displayCard1(cardOne);