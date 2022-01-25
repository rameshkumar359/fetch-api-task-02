var body=document.querySelector("body")
body.innerHTML=`<div class="navbar"><div class="image"><img src="thrivalluvar.jpg" alt="img" height="150px"></div></br>
<div class="heading"><h1>THIRUKURAL THE LORD OF WISDOM</h1></div></div>`

async function getdata(){
    try{
        for(var i=1;i<=100;i++){
            var data=await fetch(`https://api-thirukkural.vercel.app/api?num=${i}`).then((data)=>data.json()).then((data)=>{
                body.innerHTML=body.innerHTML+`
                <div class="total">
                <div class="card text-center">
  <div class="card-header">
    ${data.number}           )${data.sect_tam}
  </div>
  <div class="card-body">
    <h3>VERSUS</h3>
    <p class="tamil-kural">${data.line1}</p>
    <p class="tamil-kural">${data.line2}</p>
    <p class="card-text">${data.eng}</p>
  </div>
  <div class="card-footer text-muted">
    <h3>EXPLAINATION</h3>
    <p class="tamil-kural">${data.tam_exp}</p>
    <p class="card-text">${data.eng_exp}</p>
  </div>
</div>
</div><br>`



        
            })
        }
    }
    catch(error){
        console.log(error)
    }
}

getdata()