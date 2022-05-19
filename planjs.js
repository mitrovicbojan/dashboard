const cabins = [
    {
        id: 1,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin A",
        cat: "a",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./seychelles.jpg" 
    },
    {
        id: 1,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin A",
        cat: "a",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./seychelles.jpg" 
    },
    {
        id: 1,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin A",
        cat: "a",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./seychelles.jpg" 
    },
    {
        id: 1,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin A",
        cat: "a",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./seychelles.jpg" 
    },
    {
        id: 2,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin B",
        cat: "b",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./rangers.png" 
    },
    {
        id: 3,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin C",
        cat: "c",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./greece.jpg" 
    },
    {
        id: 4,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin P",
        cat: "p",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./tahiti.jpg" 
    },
    {
        id: 5,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin P",
        cat: "p",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./tahiti.jpg" 
    },
    {
        id: 6,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin P",
        cat: "p",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./tahiti.jpg" 
    },
    {
        id: 7,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin P",
        cat: "p",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./tahiti.jpg" 
    },
    {
        id: 8,
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        cabineType: "Cabin P",
        cat: "p",
        gusetOne: "Janos",
        gusetTwo: "Slavko",
        photo: "./tahiti.jpg" 
    },


]

const cabinPlan = document.querySelector('.cabin-plan');
const filterBtn = document.querySelectorAll('.plna-btn');

window.addEventListener('DOMContentLoaded', function() {
    showCabinCat(cabins)
})

filterBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id

        const cabinCategory = cabins.filter(function(cabItem) {
            if(cabItem.cat === category) {
                return cabItem                
            }
        })
        if(category === 'all') {
            showCabinCat(cabins)
        }
        else {
            showCabinCat(cabinCategory)
        }
    })
})

function showCabinCat(cabinCats) {
    let showCabin = cabinCats.map(function(item) {
        return `<div class="cabin-types">
        <div class="cabin-img">
            <img src=${item.photo}>
        </div>
        <div class="cabin-plan-cat">
            <h3>${item.cabineType}</h3>
        </div>
        <div class="cabin-pax">
            <p>${item.gusetOne}</p>
            <p>${item.gusetTwo}</p>
        </div>
        <div class="cabin-remarks">
            <p>Remarks:</p>
            <p>${item.remarks}</p>
        </div>
    </div>`
    });
    showCabin = showCabin.join('');
    cabinPlan.innerHTML = showCabin
}