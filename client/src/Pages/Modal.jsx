import { useEffect } from "react";
import "./Modal.css"
const Modal = ({ setModalOpen, contract }) => {
    const sharing = async () => {
        const address = document.querySelector(".address").value;
        await contract.allow(address);
        setModalOpen(false);
    };
    useEffect(() => {
        const accessList = async () => {
            const addressList = await contract.shareAccess();
            let select = document.querySelector("#selectNumber");
            const options = addressList;

            for (let i = 0; i < options.length; i++) {
                let opt = options[i];
                let e1 = document.createElement("option");
                e1.textContent = opt;
                e1.value = opt;
                select.appendChild(e1);
            }
        };
        contract && accessList();
    }, [contract]);
    return (
        <>
            <div className="w-screen h-screen bg-black bg-opacity-20 fixed flex justify-center items-center">
                <div className="w-500 h-200 rounded-12 bg-white shadow-md flex flex-col p-25 text-center">
                    <div className="inline-block text-center font-bold text-xl">Share with</div>
                    <div className="flex flex-col justify-center items-center text-center text-2xl">

                        <input
                            type="text"
                            className="address block mx-auto h-30 w-330 text-center"
                            placeholder="Enter Address"
                        ></input>
                    </div>
                    <form id="myForm">
                        <select id="selectNumber">
                            <option className="address block mx-auto h-30 w-330 text-center border border-red-500">People With Access</option>
                        </select>
                    </form>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => {
                                setModalOpen(false);
                            }}
                            id="cancelBtn"
                            className="w-24 h-9 mx-2 bg-red-500 text-white rounded-lg text-base cursor-pointer"

                        >
                            Cancel
                        </button>
                        <button onClick={() => sharing()}
                            className="w-24 h-9 mx-2 bg-blue-500 text-white rounded-lg text-base cursor-pointer"
                        >Share</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Modal;