import { useState } from "react";
import axios from "axios";
import "./FileUpload.css"
const FileUpload = ({ contract, account, provider }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No image selected");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            // console.log(process.env.PINATA_API_KEY)
            // console.log(process.env.PINATA_SECRET_API_KEY)
            try {
                const formData = new FormData();
                formData.append("file", file);
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        // pinata_api_key: `$process.env.PINATA_API_KEY,
                        // pinata_secret_api_key: `${process.env.PINATA_SECRET_API_KEY}`,/

                    },
                });
                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                contract.add(account, ImgHash);
                alert("Successfully Image Uploaded");
                setFileName("No image selected");
                setFile(null);
            } catch (e) {
                alert("Unable to upload image to Pinata");
                console.log(e)
            }
        }
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
    };
    const retrieveFile = (e) => {
        const data = e.target.files[0]; //files array of files object
        // console.log(data);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };
    return (
        <div className="m-[40px]">
            <form className="flex flex-row items-center justify-center" onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className="bg-gradient-to-br from-green-400 to-green-600 rounded-md text-white px-2 py-1 mr-2">
                    Choose Image
                </label>
                <input
                    disabled={!account}
                    type="file"
                    id="file-upload"
                    name="data"
                    onChange={retrieveFile}
                />
                <span className="textArea">Image: {fileName}</span>
            </form>
            <div className="flex items-center justify-center">
                <button type="submit" className="my-6 border-2 border-red-500 bg-blue-600 text-white px-2 py-1 rounded-md mr-2 transition-colors duration-300 hover:bg-blue-400 disabled:border-black disabled:bg-gray-300 disabled:text-black" disabled={!file}>
                    Upload File
                </button>
            </div>
        </div>
    );
};
export default FileUpload;
