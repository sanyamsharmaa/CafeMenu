import React from 'react'

export default function Category({setctg}) {
// setctg('Cldrnk')
let slctgry=(val)=>{
    setctg(val.target.value);
    let act=document.getElementsByClassName('active')[0]
    act.classList.remove('active')
    const currele=val.target
    currele.classList.add('active')

}
  return (
    <div className="navbar">

        <button type="button" class="Allbtn btn active" onClick={slctgry} value='All'>All <span></span></button>
        <button type="button" class="Allbtn btn" onClick={slctgry} value='Htdrnk'>Hot</button>
        <button type="button" class="Cldbtn btn" onClick={slctgry} value='Cldrnk'>Cold</button>
        <button type="button" class="Allbtn btn" onClick={slctgry} value='BnP'>Pastries</button>
        <button type="button" class="Allbtn btn" onClick={slctgry} value='Dsrts'>Desserts</button>
        <button type="button" class="Allbtn btn" onClick={slctgry} value='food'>Food</button>

    </div>
  )
}
