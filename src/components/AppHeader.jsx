import Logo from "./AppDCLogo"
import links from "../database/links"

export default function() {

    return (
        <>
        <header className="app-header container justify-content-between">
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <Logo />
                <ul className="navbar-nav">
                    {links.map((link, id) => (
                        <li key={id}>
                            <a className="nav-item nav-link" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        </>
    )
}