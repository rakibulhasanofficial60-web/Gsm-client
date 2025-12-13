import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const BookCard = ({ book }) => {
    return (
        <div className="group relative bg-white border border-gray-200  overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full h-full flex flex-col">
            {/* Sale Badge */}
            <div className="absolute top-3 left-3 z-10">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-3 py-1 text-sm  shadow-md">
                    {book?.discount ? `-${book.discount}%` : 'Sale!'}
                </div>
            </div>

            {/* Image Container */}
            <div className="relative h-56 w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
                <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-black px-4 py-2 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col">
                {/* Category Tag */}
                {book?.category && (
                    <div className="mb-2">
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1">
                            {book.category}
                        </span>
                    </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 grow">
                    {book?.title}
                </h3>

                {/* Rating (Optional) */}
                {book?.rating && (
                    <div className="flex items-center mb-3">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4" fill={i < Math.floor(book.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">({book.rating})</span>
                    </div>
                )}

                {/* Price */}
                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="text-2xl font-bold text-gray-900">
                                ৳{book?.presentPrice?.toLocaleString()}
                            </span>
                            {book?.pastPrice && (
                                <span className="text-sm text-gray-400 line-through ml-2">
                                    ৳{book?.pastPrice?.toLocaleString()}
                                </span>
                            )}
                        </div>

                        {/* Savings */}
                        {book?.pastPrice && book?.presentPrice && (
                            <div className="text-xs bg-green-50 text-green-700 px-2 py-1 font-medium">
                                Save ৳{(book.pastPrice - book.presentPrice).toLocaleString()}
                            </div>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-gradient-to-r cursor-pointer from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95">
                        <FiShoppingCart className="text-lg" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;