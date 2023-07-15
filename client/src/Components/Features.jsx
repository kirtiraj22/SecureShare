
const Features = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed finibus elit, et dignissim tellus.
          </p>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Feature 1</h3>
              
              <p className="mt-2 text-sm text-gray-500">
              Feature 1: Decentralized storage. Your files are stored on a network of nodes, not on a single server. This makes them more secure and resistant to censorship. 

              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Feature 2</h3>
              <p className="mt-2 text-sm text-gray-500">
              Feature 2: End-to-end encryption. Your files are encrypted before they are stored, so only you can access them. This ensures that your privacy is protected. 
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Feature 3</h3>
              <p className="mt-2 text-sm text-gray-500">
              Feature 3: Scalability. The file system can scale to accommodate more users and files. This means that you can be confident that your files will always be accessible. 
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Feature 4</h3>
              <p className="mt-2 text-sm text-gray-500">
              Feature 4: Cost-effectiveness. The file system is free to use and there are no monthly fees. This makes it a great option for budget-minded users. 
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Feature 5</h3>
              <p className="mt-2 text-sm text-gray-500">
              Feature 5: User-friendly interface. The file system is easy to use and navigate. This makes it a great option for users of all levels of technical expertise. 
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Feature 6</h3>
              <p className="mt-2 text-sm text-gray-500">
              Feature 6: Open source. The file system is open source, so you can be confident that it is secure and transparent. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

