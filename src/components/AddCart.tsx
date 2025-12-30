import { ShoppingBag } from "lucide-react"

const AddCart = () => {
  return (
    <section id="cart" className="px-24 py-7 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-indigo-500 ">
        <div className="container flex items-center flex-col justify-center gap-4 mt-8 mb-8">
            <div className="max-w-2xl  min-w-md">
                <h2 className="text-white text-4xl lg:text-5xl mb-8">
                Begin your journey tonight
            </h2>
            <p className="text-white text-xl mb-8">
                Join thousands of readers who have discovered the magic. Available now in hardcover, paperback, and digital formats.
            </p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center text-sm lg:text-lg whitespace-nowrap bg-white text-purple cursor-pointer hover:bg-purple hover:text-white transition-all duration-300 py-2 px-4 lg:px-4 font-medium rounded-lg gap-3"><ShoppingBag className="h-5 w-5"/>Buy Now - $24.99</button>
                <button className="bg-white text-purple text-sm lg:text-lg whitespace-nowrap w-fit py-2 px-4 lg:px-10 cursor-pointer hover:bg-purple hover:text-white transition-all duration-300 font-medium rounded-lg text-center">Add to Cart</button>
            </div>
            <span className="text-white mt-4 whitespace-nowrap">Free shipping on orders over $35</span>
        </div>
    </section>
  )
}

export default AddCart