import Upload from "../artifacts/contracts/Upload.sol/Upload.json"
import { ethers } from "ethers"
import { useState, useEffect } from "react";
import FileUpload from "./FileUpload";
import Display from "./Display"
import "./Main.css"
function Main() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const loadProvider = async () => {
            if (provider) {
                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);
                let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

                const contract = new ethers.Contract(
                    contractAddress,
                    Upload.abi,
                    signer
                );
                //console.log(contract);
                setContract(contract);
                setProvider(provider);
            } else {
                console.error("Metamask is not installed");
            }
        };
        provider && loadProvider();
    }, []);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-0">
                <div className="text-right">
                    <p style={{ color: "black" }}>{account ? account : "Connect Wallet"}
                    </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-0">
                    <div className="mx-auto max-w-screen-xl px-4"></div>
                    <FileUpload
                        account={account}
                        provider={provider}
                        contract={contract}
                    ></FileUpload>
                    <div className="text-center">

                        <Display contract={contract} account={account}></Display>
                        {!modalOpen && (
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded shadow-md mb-8"
                                onClick={() => setModalOpen(true)}
                            >
                                Share
                            </button>
                        )}
                        {modalOpen && (
                            <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main

