export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="container px-4 py-8 md:flex md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold bg-gradient-to-r from-gold-500 to-amber-600 bg-clip-text text-transparent">SADOA</span>
                    <p className="mt-2 text-sm text-slate-400">
                        Інвестиції в прибуткову нерухомість.
                    </p>
                </div>
                <div className="flex flex-col space-y-2 md:flex-row md:space-x-8 md:space-y-0 text-sm text-slate-400">
                    <span>&copy; {new Date().getFullYear()} SADOA. Всі права захищені.</span>
                    <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
                </div>
            </div>
        </footer>
    );
}
