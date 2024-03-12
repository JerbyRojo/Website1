import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Products */}
          <div className="footer-section">
            <h3 className="font-bold text-lg text-rose-600 mb-4">Products</h3>
            <ul className="list-disc list-inside">
              <li>Mobile App</li>
              <li>Analytics Dashboard</li>
              <li>Token Lists Explorer</li>
              <li>DeFi Services</li>
            </ul>
          </div>

          {/* Developers */}
          <div className="footer-section">
            <h3 className="font-bold text-lg text-rose-600 mb-4">Developers</h3>
            <ul className="list-disc list-inside">
              <li>API Documentation</li>
              <li>SDKs & Libraries</li>
              <li>Developer Tools</li>
              <li>Community Forums</li>
            </ul>
          </div>

          {/* Governance */}
          <div className="footer-section">
            <h3 className="font-bold text-lg text-rose-600 mb-4">Governance</h3>
            <ul className="list-disc list-inside">
              <li>Voting Platform</li>
              <li>Proposal Tracker</li>
              <li>Governance Tokens</li>
              <li>Community Governance</li>
            </ul>
          </div>

          {/* Community */}
          <div className="footer-section">
            <h3 className="font-bold text-lg text-rose-600 mb-4">Community</h3>
            <ul className="list-disc list-inside">
              <li>Events & Meetups</li>
              <li>Social Media</li>
              <li>Community Projects</li>
              <li>Community Forums</li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-section">
            <h3 className="font-bold text-lg text-rose-600 mb-4">About</h3>
            <ul className="list-disc list-inside">
              <li>Company Overview</li>
              <li>Leadership Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;