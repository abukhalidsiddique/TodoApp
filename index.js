let array=
[
  {
    item:'reading',
    date:'2024/09/05'
  },
  {
    item:'exam',
    date:'2024/09/08'
  }
];
display();
function add()
{
   let input=document.querySelector('#inp');
   let  input2=document.querySelector('#date');
   let itemX=input.value;
   let itemY=input2.value;
   array.push({item:itemX, date:itemY});
   input.value='';
   input2.value='';
   display();
}

 function display()
 { 
    let html='';
    for(let i=0;i<array.length;i++)
    {
       let item=array[i].item;
       let date=array[i].date;
      
      html+=` 
      <span>${item}</span>   
      <span>${date}</span> 
       <button class="dlt" onclick="array.splice(${i},1);display()">Delete</button> `
    }
    document.querySelector('#list2').innerHTML=html;
    localStorage.setItem('data', JSON.stringify(array));
 }
 function delet()
 {
  localStorage.removeItem('data');
 }