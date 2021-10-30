const Contact = () => {
    return (
        <div className="py-10" id="contact">
            <p className="flex items-center space-x-4 px-6 font-bold tracking-wide text-gray-600">
            <span className="text-xs">Reach Me </span>
            <span className="border-b w-36 h-1 border-gray-600"></span>
            </p>
            <div className="px-6 font-semibold text-gray-400 py-3">
            <h3 className="text-4xl font-bold mb-10"><span className="text-primary text-opacity-70">{">_"}</span> contacts</h3>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-6 justify-between">
                <div>
                    <p className="text-sm text-gray-600 font-semibold cursor-pointer">Email 📧</p>
                    <a href="mailto:opeabidemi@gmail.com" className="text-2xl">opeabidemi@gmail.com</a>
                </div>
                <div>
                    <p className="text-sm text-gray-600 font-semibold cursor-pointer">Phone (NG) 📞</p>
                    <p className="text-2xl">+(234) 902 244 9670</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
