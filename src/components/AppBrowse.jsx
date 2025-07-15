export default function() {
    
    const items = [
        {
            classNameImage: "icon",
            src: "/img/buy-comics-digital-comics.png",
            classNameLink: "link",
            text: "DIGITAL COMICS"
        },
        {
            classNameImage: "icon",
            src: "/img/buy-comics-merchandise.png",
            classNameLink: "link",
            text: "DC MERCHANDISE"
        },
        {
            classNameImage: "icon",
            src: "/img/buy-comics-subscriptions.png",
            classNameLink: "link",
            text: "DIGITAL COMICS"
        },
        {
            classNameImage: "icon",
            src: "/img/buy-comics-shop-locator.png",
            classNameLink: "link",
            text: "COMIC SHOP LOCATOR"
        },
        {
            classNameImage: "icon",
            src: "/img/buy-dc-power-visa.svg",
            classNameLink: "link",
            text: "DC POWER VISA"
        },
    ]
    
    return(
        <>
        <div className="bg-primary browse-area">
            <div className="container d-flex justify-content-around pt-5">
                {items.map((item, id) => (
                    <div className="item" key={id}>
                        <img className={item.classNameImage} src={item.src} alt={item.text} />
                        <a className={item.classNameLink} href="#">{item.text}</a>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}