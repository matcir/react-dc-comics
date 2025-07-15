import series from "../database/comics"

export default function() {
   
    return(
        <>
        <div className="app-series">
            <div className="container position-relative">               
                <div className="row row-cols-6 py-5 ps-4">
                    {series.map((serie, id) => (
                        <div key={serie.id} className="col pb-2">
                            <div className="card-img-top">                                                           
                                <img className="thumb-img" src={serie.thumb} alt={serie.title}/>
                            </div>   
                            <div className="card-body">
                                <p className="py-2">{serie.series}</p>
                            </div>
                        </div>
                    ))}                  
                </div>  
                <div>
                    <button className="p-2 bg-primary current ">CURRENT SERIES</button>
                    <div className="text-center">
                        <button className="p-2 bg-primary load-more mb-3">LOAD MORE</button>
                    </div>
                </div>  
            </div>
        </div>
        </>
    )
}