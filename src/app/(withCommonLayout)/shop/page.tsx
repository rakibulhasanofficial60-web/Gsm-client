"use client";
import BookCard from "@/components/UI/BookCard/BookCard";
import { useEffect, useState } from "react";

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const loadBook = async () => {
            const res = await fetch("/book.json");
            const books = await res.json();
            setBooks(books);
        }
        loadBook();
    }, [])

    return (
        <div className="bg-white">
            <div className="flex items-center justify-center bg-black md:h-[400px]">
                <p className="text-white md:text-3xl lg:text-5xl font-bold">Shop</p>
            </div>

            <div className="bg-white max-w-6xl mx-auto -top-18 relative">
                <div className="sm:flex items-center justify-between md:px-8 md:pt-20 md:pb-10">
                    <p className="border-l border-gray-400 pl-2.5 text-2xl">Showing 1–12 of 14 results</p>
                    <p className="border-l border-gray-400 pl-2.5 text-2xl">Sort by Price</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-2">
                    {
                        books.map((book, idx) => (
                            <div key={idx} className="p-2">
                                <BookCard book={book} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;