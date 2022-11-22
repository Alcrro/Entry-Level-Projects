//  using selectors inside the element

//used for specified section

//select all classes with question names
const questions = document.querySelectorAll('.question');

// foreach classes with questions name, select each item with random name "question"
questions.forEach(function(question){
	//console.log(question);

	//select inside question section where button have classes names "question-btn"
	const btn = question.querySelector('.question-btn')
	//console.log(btn);


	btn.addEventListener('click', function(){

		//select and show one and hide others
		// question vs item = same sheet
		questions.forEach(function(item){
			if(item !== question){
				item.classList.remove('show-text');
			}
		})

		//Toggle class question with remove or add "show-text" class
		question.classList.toggle('show-text');
	});
});



// traversing the DOM

// Select  all buttons
// const questionsBtn = document.querySelectorAll('.question-btn');

// questionsBtn.forEach(function(btn){
// 	btn.addEventListener('click', function(e){
// 		//Traversing the doom (parentElement)
// 		const question = e.currentTarget.parentElement.parentElement
// 		question.classList.toggle('show-text');
// 	})
// })