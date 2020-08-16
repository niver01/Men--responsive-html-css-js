const headerBar = document.getElementById('header__bar');
const headerNav = document.getElementById('header__nav');

headerBar.addEventListener('click', () => {
	headerNav.classList.toggle('active');
	const icon = headerBar.querySelector('i');

	icon.className.includes('fa-bars')
		? icon.classList.replace('fa-bars', 'fa-times')
		: icon.classList.replace('fa-times', 'fa-bars');
});
