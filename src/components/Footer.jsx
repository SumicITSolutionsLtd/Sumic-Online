import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './AppIcon';
import PaymentIcons from './PaymentIcons';
import Logo from "../media/dark_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Transaction Services</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Agreement for non-EU/UK Consumers</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Terms and Conditions for EU/EEA/UK Consumers (Transactions)</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Take our feedback survey</Link></li>
            </ul>
          </div>

          {/* Shopping with us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shopping with us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Making payments</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Delivery options</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Buyer Protection</Link></li>
            </ul>
          </div>

          {/* Collaborate with us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Collaborate with us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Partnerships</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Affiliate program</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">DS Center</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Seller Log In</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">中国卖家入驻</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Non-Chinese Seller Registration</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors">Become a payment partner with us</Link></li>
            </ul>
          </div>

          {/* Pay with */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Pay with</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <PaymentIcons.Visa className="hover:opacity-80 transition-opacity cursor-pointer" size={36} />
              <PaymentIcons.Mastercard className="hover:opacity-80 transition-opacity cursor-pointer" size={36} />
              <PaymentIcons.JCB className="hover:opacity-80 transition-opacity cursor-pointer" size={36} />
              <PaymentIcons.AmericanExpress className="hover:opacity-80 transition-opacity cursor-pointer" size={36} />
            </div>
          </div>

          {/* Stay connected */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay connected</h3>
            <div className="flex space-x-3">
              <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Icon name="Facebook" size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Icon name="Twitter" size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Icon name="Instagram" size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Icon name="Phone" size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-200">
          
          {/* Help */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Help Center, Disputes & Reports, Return&refund policy, Report IPR infringement, 
              Regulated Information, Integrity Compliance, Transparency Center.
            </p>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors block mt-2">
              Submit report (non-registered users)
            </Link>
          </div>

          {/* Browse by Category */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Browse by Category</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog, Video
            </p>
          </div>

          {/* Multi-Language Sites */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sumic Multi-Language Sites</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, 
              Vietnamese, Arabic, Hebrew, Polish
            </p>
          </div>

          {/* Company Group */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sumic Group</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sumic Group Website, SumicAcademy, Neexa AI, SumicIT, Sumic International, SumicWorkflow
            </p>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="Sumic Online Logo" className="h-8" />
          </div>
          <p className="text-sm text-gray-600 mb-4 max-w-md">
            Your trusted B2B marketplace connecting manufacturers, suppliers, and business buyers worldwide. 
            Find quality products, negotiate better prices, and build lasting business relationships.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} color="#6B7280" />
              <span className="text-sm text-gray-600">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} color="#6B7280" />
              <span className="text-sm text-gray-600">Verified Suppliers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} color="#6B7280" />
              <span className="text-sm text-gray-600">Trade Assurance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-0">
              <Link to="#" className="hover:text-gray-300 transition-colors">Intellectual Property Protection</Link>
              <span>-</span>
              <Link to="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <span>-</span>
              <Link to="#" className="hover:text-gray-300 transition-colors">Sitemap</Link>
     
             
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;