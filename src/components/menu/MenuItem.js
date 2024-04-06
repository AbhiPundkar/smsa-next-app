export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div>
        <img
          src="samosa.jpeg"
          alt="samosa"
          className="max-h-24 max-w-auto block mx-auto"
        />
      </div>

      <h4 className="font-semibold text-xl my-3">Samosa</h4>
      <p className="text-grey-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart 50 INR
      </button>
    </div>
  );
}
