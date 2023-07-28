import "./reg.css"
import bg from "./bg.png";

export default function Registration() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Register and get listed on Urville dApp Store</h1>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfloAdrwSOk5ph13C1rjdLp0cfRLuhDW4zvMxOjUnE15IpPnQ/viewform?embedded=true">Loading…</iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}