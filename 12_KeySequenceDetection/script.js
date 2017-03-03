const pressed =[];
const secretCode = 'annmarie';

window.addEventListener('keyup',(e) => {
	console.log(e.key);
	pressed.push(e.key);
	pressed.splice(-secretCode.lenth-1,pressed.length -secretCode.length);
	console.log(pressed);
	if(pressed.join('').includes(secretCode)){
		console.log('DING DING! You did it');
		cornify_add();
	}
})