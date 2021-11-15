const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row  space-y-2 items-center justify-between text-xs border-t border-white border-opacity-25 text-gray-400 font-semibold py-4">
            <span>&copy; {new Date().getFullYear()} Abidemi Harry. All Rights Reserved</span>
            <span>Built with Next.js and TailwindCSS</span>
        </div>
    )
}

export default Footer
