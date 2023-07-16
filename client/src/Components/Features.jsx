import aboutImage from "../assets/feature1.jpg";
import aboutImage2 from "../assets/feature2.jpg";
import aboutImage3 from "../assets/feature3.jpg";
import aboutImage4 from "../assets/feature4.jpeg";
import aboutImage5 from "../assets/feature5.jpeg";
import aboutImage6 from "../assets/feature6.jpeg";

const Features = () => {
  return (
    <div className="bg-white py-16" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl mb-4 font-extrabold text-blue-900">Features</h2>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mt-2 text-center  text-blue-900 font-semibold">Decentralized Storage</h3>
            <div className="p-6">
              <img
                src={aboutImage}
                alt="Feature 1"
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <p className="mt-2 text-lg text-gray-600">
                SecureShare leverages IPFS (InterPlanetary File System) to store files in a decentralized manner across multiple nodes. This eliminates reliance on a single centralized server, making the storage more secure and resilient to data loss.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mt-2 text-center  text-blue-900 font-semibold">Content Addressing and Linking</h3>
            <div className="p-6">
              <img
                src={aboutImage2}
                alt="Feature 2"
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <p className="mt-2 text-lg text-gray-600">
                SecureShare utilizes content addressing to generate unique cryptographic hashes for each file stored on IPFS. These hashes act as permanent, immutable links that can be used to access and share files.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mt-2 text-center  text-blue-900 font-semibold">Enhanced Security</h3>
            <div className="p-6">
              <img
                src={aboutImage3}
                alt="Feature 3"
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <p className="mt-2 text-lg text-gray-600">
                SecureShare employs advanced encryption techniques to secure the files during storage and transmission. This ensures that only authorized individuals can access the files, providing an added layer of security.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mt-2 text-center  text-blue-900 font-semibold">Efficient File Sharing</h3>
            <div className="p-6">
              <img
                src={aboutImage4}
                alt="Feature 4"
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <p className="mt-2 text-lg text-gray-600">
                Fast and  SecureShare leverages IPFS, a peer-to-peer file sharing protocol, which allows for faster and more efficient file sharing. Files are distributed across multiple nodes, enabling quicker downloads and reducing network congestion.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mt-2 text-center  text-blue-900 font-semibold">Blockchain Transparency</h3>
            <div className="p-6">
              <img
                src={aboutImage5}
                alt="Feature 5"
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <p className="mt-2 text-lg text-gray-600">
                The use of blockchain technology provides transparency and auditability. Users can verify the integrity of their files and track any changes made to them, ensuring a higher level of trust in the system.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-xl mt-2 text-center  text-blue-900 font-semibold">Cross-Platform Compatibility</h3>
            <div className="p-6">
              <img
                src={aboutImage6}
                alt="Feature 6"
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <p className="mt-2 text-lg text-gray-600">
                SecureShare is designed to be compatible with multiple platforms and devices, including desktop computers, laptops, smartphones, and tablets. This enables users to access their files from anywhere, using their preferred device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
