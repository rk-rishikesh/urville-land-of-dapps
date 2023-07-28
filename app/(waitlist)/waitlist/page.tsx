import "./waitlist.css"
import bg from "./bg.png";

export default function Waitlist() {
    return (
        <section className="waitlist">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Become an Early Urville Member and Unlock Exclusive Perks</h1>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOAP9zs1tX2ZuBeGB1ZQlKCjNXuBMqfIc0cOjzqRgosYBhiw/viewform?embedded=true" width="750" height="1143">Loading…</iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}