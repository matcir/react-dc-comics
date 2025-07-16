import comicsDCLinks from "../database/comicsDCLinks"
import comicsShopLinks from "../database/comicsShopLinks"
import comicsDCInfo from "../database/comicsDCInfo"
import comicsDCSites from "../database/comicsDCSites"

export default function() {
   
    return(
       <>
       <div className="footer-about-us position-relative overflow-hidden">
            <div className="container d-flex">
                <div className="p-3">
                    <h4>DC COMICS</h4>
                    <ul className="list-unstyled"> 
                        {comicsDCLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul> 


                    <h4>SHOP</h4>
                    <ul className="list-unstyled">
                        {comicsShopLinks.map((link) => (
                            <li key={`shop-${link.id}`}> 
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                
                <div className="p-3">
                    
                    <h4>DC</h4>
                    <ul className="list-unstyled">
                        {comicsDCInfo.map((link) => (
                            <li key={`info-${link.id}`}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                
                <div className="p-3">
                    
                    <h4>SITES</h4>
                    <ul className="list-unstyled">
                        {comicsDCSites.map((link) => (
                            <li key={`sites-${link.id}`}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>

                </div>
                
                <div>
                    <img id="bg-logo" className="position-absolute" src="/img/dc-logo-bg.png"/> 
                </div>
            </div>
        </div>
        </>
    )
}