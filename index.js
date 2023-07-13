var submitBtn = document.getElementById('submit-btn');  
        submitBtn.addEventListener('click', getAnswer)
          
        function getAnswer(){
           
            var total = 5
            var score = 0
            var q1 = document.querySelector('input[name="q1"]:checked');
            var q2 = document.querySelector('input[name="q2"]:checked');
            var q3 = document.querySelector('input[name="q3"]:checked');
            var q4 = document.querySelector('input[name="q4"]:checked');
            var q5 = document.querySelector('input[name="q5"]:checked');
            var display = document.getElementById('display')
            var answers = ['11','Cherry Blossom','13', 'Red Kangaroo','Incan']

            //validation
            if (q1 === null || q2 === null || q3 === null || q4 === null || q5 === null) {
      alert('Please select an option for all questions.');
      return; // Exit the function if any question is unanswered
    }

            if(q1.value === answers[0]){
                score++
            }
            if(q2.value === answers[1]){
                score++
            }
            if(q3.value === answers[2]){
                score++
            }
            if(q4.value === answers[3]){
                score++
            }
            if(q5.value === answers[4]){
                score++
            }

            alert(score)
            display.innerHTML = `You scored ${score} out of ${total}`
            display.style.display ='block'
        }
        

            
        