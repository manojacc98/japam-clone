'use client';

const SiddhDelivery = () => {
  return (
    <section className="bg-[#252334] py-10 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Siddh Products Delivered To Your Home</h2>
      <p className="mb-6 max-w-3xl mx-auto text-gray-200">
        Each Siddh order comes with a Siddhi Prakriya Report (SPR) with a QR code to watch a short video of the Siddhi ceremony of your product.
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/LCrxcFGokJk?start=44"
            title="Japam Siddh Delivery"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SiddhDelivery;
