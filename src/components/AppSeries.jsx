import series from "../database/comics"
import Card from "./Card"

export default function() {
   
    return(
        <>
        <div className="app-series">
            <div className="container position-relative">               
                <div className="row row-cols-6 py-5 ps-4">
                    {series.map((serie) => (
                        <Card key={serie.id} serie={serie} />
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