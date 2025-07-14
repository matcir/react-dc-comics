import AppContent from "./AppContent"
import AppContent from "./AppBrowse"
import AppContent from "./AppAboutUs"

export default function() {
    return (
        <>
        <div>
            <AppContent/>
        </div>
        <div>
            <AppBrowse/>
        </div>
        <div>
            <AppAboutUs/>
        </div>
        </>
    )
}