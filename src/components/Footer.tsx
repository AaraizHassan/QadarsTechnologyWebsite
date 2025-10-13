import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

import Image from 'next/image';
import logoimage from '../app/qadarslogo.png'; // adjust path if needed

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111827] text-[#E5E7EB] py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Logo and Description */}
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logoimage}
                            alt="Qadars Technology Logo"
                            width={90}
                            height={90}
                            className="rounded"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer text-[#E5E7EB]">
                            {siteDetails.siteName}
                        </h3>
                    </Link>

                    <p className="mt-3.5 text-[#9CA3AF]">
                        {footerDetails.subheading}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#E5E7EB]">Quick Links</h4>
                    <ul className="text-[#9CA3AF]">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link 
                                    href={link.url} 
                                    className="hover:text-[#2563EB] transition-colors duration-200"
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#E5E7EB]">Contact Us</h4>

                    {footerDetails.email && (
                        <a 
                            href={`mailto:${footerDetails.email}?subject=Inquiry%20from%20Qadars%20Technology%20Website&body=Hi%20Qadars%20Technology%2C%0D%0A`}
                            className="block text-[#9CA3AF] hover:text-[#2563EB] transition-colors duration-200"
                        >
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a 
                            href={`tel:${footerDetails.telephone}`}
                            className="block text-[#9CA3AF] hover:text-[#2563EB] transition-colors duration-200"
                        >
                            Phone: {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="text-[#E5E7EB] hover:text-[#2563EB] transition-colors duration-200"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 md:text-center text-[#9CA3AF] px-6 border-t border-gray-700 pt-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
