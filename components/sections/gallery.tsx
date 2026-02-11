export function Gallery() {
    const images = [
        "/img/1-.jpg",
        "/img/4-.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
    ];

    return (
        <section className="container py-16 sm:py-24">
            <div className="mb-12 text-center">
                <h2 className="font-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
                    Галерея комплексу
                </h2>
                <p className="mx-auto max-w-2xl text-slate-400">
                    Сучасна архітектура, стильні інтер'єри та продуманий благоустрій.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-xl bg-white/5 ${index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                    >
                        <div className="aspect-[4/3] h-full w-full overflow-hidden">
                            <img
                                src={src}
                                alt={`SADOA Gallery Image ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    </div>
                ))}
            </div>
        </section>
    );
}
