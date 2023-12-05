import React from 'react'

export default function Menu({itoms,ctg}) {


    return (
        <>
    <div className="mnc">
        {itoms.map((menuitems)=>{
            const {id,ctgry,img,ttl,price,desc} =menuitems;
            if(ctg==='All'){
                return(
                    <article key={id} className='menuitms'>
                        <div className="photo">
                        <img src={img} alt={ttl}  height='250vw'/>
                        </div>
                        <div className="info">
                            <h4>{ttl}</h4>
                            <div className="pric">{price}Rs</div>
                        </div>
                            <p className='desc'>{desc}</p>
            
                    </article>
                );
            }
            else if(ctgry===ctg){
                return(
                <article key={id} className='menuitms'>
                    <div className="photo">
                    <img src={img} alt={ttl}  height='250vw'/>
                    </div>
                    <div className="info">
                        <h4>{ttl}</h4>
                        <div className="pric">{price}Rs</div>
                    </div>
                        <p className='desc'>{desc}</p>
        
                </article>
            );
        }
        })}
    </div>
    </>
  )
}
