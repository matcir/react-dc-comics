export default function Card({serie}) {
    return(
        <div key={serie.id} className="col pb-2">
            <div className="card-img-top">                                                           
                <img className="thumb-img" src={serie.thumb} alt={serie.title}/>
            </div>   
            
            <div className="card-body">
                <p className="py-2">{serie.series}</p>
            </div>
        </div>
    )
}