export default function SubscribeSection() {
  return (
    <section className="py-20 bg-primary text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
      <div className="flex justify-center items-center mb-4">
        <input
          type="email"
          className="p-3 border border-white rounded-l"
          placeholder="Enter your email address"
        />
        <button className="bg-white text-blue-600 p-3 rounded-r">
          Subscribe
        </button>
      </div>
      <p>Don't worry, we only send great content, no SPAM.</p>
    </section>
  );
}
