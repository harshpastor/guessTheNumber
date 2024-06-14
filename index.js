let i=10
const arr=[]
while(i>0){
  let form = document.querySelector("form")
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    i--
    let number=Math.floor((Math.random()*100))+1
    let choi=form.guessField.value
    let choice= parseInt(choi)
    if(choice===number){

    }
    else{
        arr.push(number)
    }
    let guess=document.querySelector(".guesses");
    let guessed=""
    for(let j=0;j<arr.length;i++){
        guessed+=toString(arr[j])
    }
    guess.innerHTML=`<h3>${guessed}</h3>`
    console.log(guessed)
  })


}