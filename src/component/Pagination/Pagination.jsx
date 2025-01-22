import style from './Pagination.module.css'
export default function Pagination({count,onClick,current}) {
    const pag=[];
    for(let i=1;i<=count;i++){
        pag.push(<div key={i} className={style.paginationBtn} onClick={()=>onClick(i)} >{i}</div>)
    }
    
  return (
    <div className={style.paginationContainer}>
     {pag}
    </div>
  )
}
