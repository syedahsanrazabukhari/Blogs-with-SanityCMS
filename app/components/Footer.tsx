export default function Footer() {
    return (
        <>
            <footer>
                <div className="text-black bg-white py-10 text-center text-[19px]  grid grid-cols-2 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h4>Exclusive</h4>
                        <p className="text-xl">Subscribe</p>
                        <p>Get 10% off your first order</p>
                    </div>
                    <div className="space-y-3">
                        <p className="font-medium text-xl"> Support</p>
                        <div className="space-y-4">
                            <p>My Account</p>
                            <p>Login / Register</p>
                            <p>Cart</p>
                            <p>Wishlist</p>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="font-medium text-xl"> Quick Link</p>
                        <div className="space-y-4">
                            <p>Privacy Policy</p>
                            <p>Terms Of Use</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className=" border-t border-[rgb(0,0,0)]  ">
                    <div className="flex gap-x-1 mt-4 justify-center" >
                        <p className="w-5 h-5 ">©</p>
                        <p className="text-black text-[18px] text-center"> Copyright Rimel 2022. All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}