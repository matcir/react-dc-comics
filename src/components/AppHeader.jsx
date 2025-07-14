import Logo from "./AppDCLogo"

export default function() {
    return (
        <>
        <header className="app-header container justify-content-between">
            <Logo />
            <nav className="navbar navbar-expand-lg d-inline-block">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">CHARACTERS</a>
                    <a className="nav-item nav-link" href="#">COMICS</a>
                    <a className="nav-item nav-link" href="#">MOVIES</a>
                    <a className="nav-item nav-link" href="#">TV</a>
                    <a className="nav-item nav-link" href="#">GAMES</a>
                    <a className="nav-item nav-link" href="#">COLLECTIBLES</a>
                    <a className="nav-item nav-link" href="#">VIDEOS</a>
                    <a className="nav-item nav-link" href="#">FANS</a>
                    <a className="nav-item nav-link" href="#">NEWS</a>
                    <a className="nav-item nav-link" href="#">SHOP</a>
                </div>
            </nav>
        </header>
        </>
    )
}