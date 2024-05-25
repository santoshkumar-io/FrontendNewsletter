export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="font-bold text-xl mb-4">Emailer X</p>
        <nav>
          <ul className="flex justify-center space-x-4 mb-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Newsletter</li>
            <li className="cursor-pointer">Newsletter Engine</li>
          </ul>
        </nav>
        <p className="text-gray-600">
          &copy; Emailer X | Designed by BRIX Templates | Powered by Webflow
        </p>
      </div>
    </footer>
  );
}
