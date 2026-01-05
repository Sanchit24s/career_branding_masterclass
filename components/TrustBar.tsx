
import React from 'react';

const TrustBar: React.FC = () => {
  const row1 = [
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg' },
    { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Reliance', url: 'https://upload.wikimedia.org/wikipedia/en/9/99/Reliance_Industries_Logo.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/HCL_Technologies_logo.svg' },
  ];

  const row2 = [
    { name: 'ICICI Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
    { name: 'HDFC Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/HDFC_Bank_Logo.svg' },
    { name: 'Aditya Birla Group', url: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Aditya_Birla_Group_Logo.svg' },
    { name: 'Larsen & Toubro', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Larsen_%26_Toubro.svg' },
    { name: 'Flipkart', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg' },
    { name: 'Paytm', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg' },
  ];

  return (
    <div className="bg-white py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pill Header - Exact Match to Image */}
        <div className="flex justify-center mb-20 reveal">
          <div className="px-16 py-5 border-[1.5px] border-[#3B5998] rounded-full inline-flex items-center justify-center bg-white shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] tracking-tight">
              Our Students Shine At Top Companies
            </h2>
          </div>
        </div>

        {/* Logo Rows - Full Color as per Image */}
        <div className="space-y-16 reveal">
          {/* Row 1: 9 Logos */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
            {row1.map((logo) => (
              <div key={logo.name} className="h-9 md:h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain max-w-[130px]"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 6 Logos */}
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {row2.map((logo) => (
              <div key={logo.name} className="h-9 md:h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
