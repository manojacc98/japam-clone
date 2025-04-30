import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f3f3f3] text-gray-800 text-sm px-6 md:px-20 py-10 border-t border-gray-200">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <img src="/footerlogo.png" alt="Japam Logo" className="h-10 mb-2" />
          <p className="text-red-600 font-medium text-xs mb-2">300,000+ Happy Customers</p>
          <h3 className="font-semibold mb-2">Authentic Spiritual Accessories</h3>
          <p className="text-sm text-gray-600">
            Bringing stories of Indian tradition alive through our unique range of wearables, decor, and puja accessories.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-black">
            <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>  
            <a href="https://wa.me/919000000000" target="_blank"><FaWhatsapp /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/track-order" className="hover:underline">Track Order</a></li>
            <li><a href="/bulk" className="hover:underline">Bulk/Wholesale</a></li>
            <li><a href="/returns" className="hover:underline">Returns/Exchange</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="https://www.amazon.in" className="hover:underline" target="_blank">Japam on Amazon</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-bold mb-2">Policies</h4>
          <ul className="space-y-2">
            <li><a href="/refund-policy" className="hover:underline">Refund & Return Policy</a></li>
            <li><a href="/shipping-policy" className="hover:underline">Shipping Policy</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-2">Get In Touch</h4>
          <p className="text-sm mb-2">
            Japam Sevak will help you with tracking, return, cancellations, and more.
          </p>
          <p className="text-sm italic text-gray-600 mb-4">
            22,  Industrial Area, tirupur, 638752, India
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border rounded-l-md w-full focus:outline-none"
            />
            <button className="bg-black text-white px-4 rounded-r-md">→</button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 Japam.
      </div>
    </footer>
  );
};

export default Footer;
