const $ = (e) => document.querySelector(e);

const cards = [
	{
		id: 1,
		title: "Full Stack Web Development",
		rating: 5,
		description: "Learn the skills needed to become a full stack web developer",
		price: 99.99,
	},
	{
		id: 2,
		title: "Data Science Fundamentals",
		rating: 3,
		description: "Explore the world of Data Science and analytics",
		price: 79.99,
	},
	{
		id: 3,
		title: "Python Progamming Fundamentals",
		rating: 5,
		description: "Explore the world of Python Programming",
		price: 87.99,
	},
	{
		id: 4,
		title: "Data Analytics",
		rating: 4,
		description: "Learn the skills needed to become a Data Scientist",
		price: 59.99,
	},
	{
		id: 5,
		title: "Full Stack Web Development",
		rating: 5,
		description: "Learn the skills needed to become a full stack web developer",
		price: 99.99,
	},
	{
		id: 6,
		title: "Data Science Fundamentals",
		rating: 3,
		description: "Explore the world of Data Science and analytics",
		price: 79.99,
	},
	{
		id: 7,
		title: "Python Progamming Fundamentals",
		rating: 5,
		description: "Explore the world of Python Programming",
		price: 87.99,
	},
	{
		id: 8,
		title: "Data Analytics",
		rating: 4,
		description: "Learn the skills needed to become a Data Scientist",
		price: 59.99,
	},
];
const generateCards = () => {
	cards.map((card) => {
		//? Destructure the properties of the object
		let { id, title, rating, description, price } = card;
		$(".card-cont").innerHTML += `
        <div class="card">
            <div class="sect-1">
                <img src="./images/profile-${id}.jpeg" alt="" />
            </div>
            <div class="sect-2">
                <h2>${title}</h2>
                <i class="rating">${rating} stars</i>
                <p class="description">
                    ${description}
                </p>
                <p class="price">$${price}</p>
            </div>
        </div>
    `;
	});
};

window.onload = () => {
	generateCards();
};
