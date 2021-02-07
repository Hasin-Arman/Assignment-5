
document.getElementById('searchButton').addEventListener('click',function(){
    const foodInput=document.getElementById('foodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`)
    .then(res=>res.json())
    .then(data=>{
        
        displayFood(data.meals)
    })
})

const displayFood=food=>{
    const foodContainer=document.getElementById('allFood');
    // console.log(food);
 for (let i = 0; i < food.length; i++) {
     const foodItem = food[i];
     const foodDiv=document.createElement('div');
     const foodName=`
     <img  onClick="foodDetails('${foodItem.strMeal}')" src="${foodItem.strMealThumb}">
     <h2  onClick="foodDetails('${foodItem.strMeal}')" >${foodItem.strMeal}</h2>
     
     `
     foodDiv.className='food'
     foodDiv.innerHTML=foodName;

   
    foodContainer.appendChild(foodDiv);
  
     
 }
}
const foodDetails=foodList=>{
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodList}`)
    .then(res=>res.json())
    .then(data=>{
        showDetails(data.meals);
    })
}

const showDetails=details=>{
   
    for (let i = 0; i < details.length; i++) {
        const detailsContainer=document.getElementById('showDetails');
      
        const item = details[i];
        console.log(item);
        const detailsDiv=document.createElement('div');
        const foodDetails=`
         <img src="${item.strMealThumb}">
          <h1>${item.strMeal}</h1>
            <h2>Ingredients:</h2>
          `
    detailsDiv.className='foodDetails'
     detailsDiv.innerHTML=foodDetails;
     const li=document.createElement('li');
     li.innerText=item.strIngredient1;
     const li1=document.createElement('li');
     li1.innerText=item.strIngredient2;
     const li2=document.createElement('li');
     li2.innerText=item.strIngredient3;
     const li3=document.createElement('li');
     li3.innerText=item.strIngredient4;
     const li4=document.createElement('li');
     li4.innerText=item.strIngredient5;
     const li5=document.createElement('li');
     li5.innerText=item.strIngredient6;
     const li6=document.createElement('li');
     li6.innerText=item.strIngredient7;
     const li7=document.createElement('li');
     li7.innerText=item.strIngredient8;
     const li8=document.createElement('li');
     li8.innerText=item.strIngredient9;
     const li9=document.createElement('li');
     li9.innerText=item.strIngredient10;
    


     detailsDiv.appendChild(li);
     detailsDiv.appendChild(li1);
     detailsDiv.appendChild(li2);
     detailsDiv.appendChild(li3);
     detailsDiv.appendChild(li4);
     detailsDiv.appendChild(li5);
     detailsDiv.appendChild(li6);
     detailsDiv.appendChild(li7);
     detailsDiv.appendChild(li8);
     detailsDiv.appendChild(li9);
    detailsContainer.appendChild(detailsDiv);
        
    }
}
