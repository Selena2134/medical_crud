function Modal(props) {
    return (
        <div className="w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-10 flex justify-center items-center">
            <div className="bg-white p-4 w-4/6 text-black">
                {props.children}
                <div>
                    <button  className="mt-4 bg-[#5A7A0A] px-3 py-1 rounded-sm mb-5 text-white hover:cursor-pointer inline-block" onClick={props.close}>Close</button>
                </div>
            </div>
        
        </div>
    )
}

export default Modal;