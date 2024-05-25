export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">What our subscribers say</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="font-bold">Matt Cannon</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
        </div>
        {/* Repeat for other testimonials */}
      </div>
    </section>
  );
}
