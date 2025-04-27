import { FaRegCommentDots, FaBoxOpen } from 'react-icons/fa';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FaPlaneDeparture } from 'react-icons/fa6';

const highlights = [
  {
    icon: <FaRegCommentDots size={30} />,
    title: 'Happy to help',
    description: 'Chat or email',
    link: '/contact',
  },
  {
    icon: <FaBoxOpen size={30} />,
    title: 'Check order status',
    description: 'Updates & tracking',
    link: '/track-order',
  },
  {
    icon: <BsArrowReturnLeft size={30} />,
    title: 'Returns & exchanges',
    description: 'Quick & hassle-free',
    link: '/returns',
  },
  {
    icon: <FaPlaneDeparture size={30} />,
    title: 'Free delivery',
    description: 'All over India',
    link: '/shipping-policy',
  },
];

const FooterHighlights = () => {
  return (
    <div className="bg-white w-full border-t border-b border-gray-200 py-6 px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-6">
      {highlights.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className="flex flex-col items-center justify-center hover:text-red-600 transition"
        >
          <div className="text-2xl mb-2 text-black">{item.icon}</div>
          <h4 className="font-semibold text-base">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
        </a>
      ))}
    </div>
  );
};

export default FooterHighlights;
