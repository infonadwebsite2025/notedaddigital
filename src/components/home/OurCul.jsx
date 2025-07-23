import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const OurCul = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentWord, setCurrentWord] = useState(0);
    const headingWords = ["Our", "Culture", "=", "Our", "Accessories"];
    useEffect(() => {
        setIsVisible(true);
        const wordInterval = setInterval(() => {
            setCurrentWord((prev) =>
                prev < headingWords.length - 1 ? prev + 1 : prev,
            );
        }, 500);
        return () => clearInterval(wordInterval);
    }, []);
    const products = [
        {
            title: "Fresh Branded Accessories",
            description:
                "From customized tees to slick visiting cards — we drop 4+ fresh branded accessories every year.",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20collection%20of%20modern%20branded%20corporate%20accessories%20including%20customized%20tees%20business%20cards%20and%20promotional%20items%20arranged%20on%20minimalist%20white%20surface%20with%20soft%20lighting&width=800&height=500&seq=2&orientation=landscape",
        },
        {
            title: "Meeting Essentials",
            description: "Got a meeting with us? You're leaving with a mug.",
            image:
                "https://readdy.ai/api/search-image?query=stylish%20branded%20coffee%20mug%20on%20modern%20conference%20table%20with%20minimal%20corporate%20setting%20and%20soft%20ambient%20lighting%20perfect%20for%20business%20meetings&width=800&height=500&seq=3&orientation=landscape",
        },
        {
            title: "Premium Stationary",
            description:
                "Elevate your workspace with our premium branded stationary collection.",
            image:
                "https://readdy.ai/api/search-image?query=luxury%20branded%20corporate%20stationery%20items%20including%20notebooks%20pens%20and%20organizers%20arranged%20aesthetically%20on%20clean%20white%20surface%20with%20professional%20lighting&width=800&height=500&seq=4&orientation=landscape",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://readdy.ai/api/search-image?query=modern%20minimalist%20office%20workspace%20with%20creative%20accessories%20and%20branded%20items%20arranged%20on%20a%20clean%20white%20desk%20with%20soft%20natural%20lighting%20and%20subtle%20gradient%20background&width=1440&height=600&seq=1&orientation=landscape)",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent"></div>
                </div>
                <div className="relative container mx-auto px-6 h-full flex items-center">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-bold mb-8 flex flex-wrap gap-3">
                            {headingWords.map((word, index) => (
                                <span
                                    key={index}
                                    className={`transform transition-all duration-1000 ${index <= currentWord
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-full opacity-0"
                                        }`}
                                >
                                    {word}
                                </span>
                            ))}
                        </h1>
                        <p
                            className={`text-xl mb-8 transform transition-all duration-1000 delay-2000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                        >
                            Culture isn't just talked about, it's worn.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Products section with slider */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="!pb-12"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className="px-10"> {/* Left/Right spacing */}
                                    <Card
                                        className="w-full h-[400px] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                        cover={
                                            <img
                                                alt={product.title}
                                                src={product.image}
                                                className="object-cover w-full h-[200px]"
                                            />
                                        }
                                    >
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">{product.description}</p>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

           </div>
    );
};
export default OurCul;
