import { Link } from 'react-router-dom';
import { FileText, Home, CreditCard, Globe, School, Users, Check, ExternalLink, Download } from 'lucide-react';

// App icons
const appIcons = {
  LINE:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/2048px-LINE_logo.svg.png",
  PayPay:"https://play-lh.googleusercontent.com/AieC1ypSSh_2rctvrNtVggyFRP9cNtvnEIPkVmzZGFlhN8bNdHCl3GZbxK7O8vCe7A",
  Suica:"https://img.icons8.com/color/512/suica.png",
  PASMO: "https://res.cloudinary.com/teepublic/image/private/s--UfOM8b_B--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1050,x_-64,y_-76/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1050/fl_layer_apply,g_north_west,x_-64,y_-76/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:51/co_ffffff,e_outline:inner_fill:51/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1581718091/production/designs/7983292_1.jpg",
  GoogleTranslate: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png",
  Mercari: "https://o.qoo-img.com/ggpht/r3ej9chUEQ8p7pM0XN79WcTePSAjRaJaRvKYyyvjwGGQlFkZgwaNfuIVomWG8CNE80Q"
};

const movingGuideSteps = [
  {
    id: "visa",
    category: "BEFORE ARRIVAL",
    title: "Get a Visa",
    content: (
      <>
        <p className="mb-4">
          To move to Japan, you'll need a visa — the most common are a <b>Work Visa</b> (requires a job offer) or the new <b>Digital Nomad Visa</b> (for remote workers from select countries). Other common visas include a dependent/spouse visa and a student visa. If you're job hunting, check out:
        </p>
        <ul className="mb-4 space-y-1 list-disc ml-6">
          <li><a href="https://jobs.gaijinpot.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">GaijinPot</a></li>
          <li><a href="https://jobsinjapan.com" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Jobs in Japan</a></li>
          <li><a href="https://careerforum.net/en/event/bos/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Boston Career Forum</a></li>
          <li><a href="https://jetprogramme.org/en/positions/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">JET Programme</a></li>
        </ul>
        <p>
          Once you've got your Certificate of Eligibility, apply for your visa through your <a href="https://www.mofa.go.jp/j_info/visit/visa/index.html" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">local Japanese embassy</a>. Apply at least 1.5 months before departure from your home country, not while in Japan.
        </p>
      </>
    )
  },
  {
    id: "name",
    category: "BEFORE ARRIVAL",
    title: "Set Up Your Japanese Name",
    content: (
      <>
        <p className="mb-2">
          Create your katakana name — it'll be used in forms and legal docs. Try this <a href="https://nihongotools.com/foreign-name-to-japanese-name-converter/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">name converter tool</a>.
        </p>
      </>
    )
  },
  {
    id: "preparations",
    category: "BEFORE ARRIVAL",
    title: "Do preparations in your home country",
    content: (
      <>
        <ul className="mb-4 space-y-4">
          <li>
            <strong className="block mb-1">Finances:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Get international ATM access</li>
              <li>Apply for a travel-friendly credit card</li>
              <li>For money transfers, people recommend Wise or OFX</li>
            </ul>
          </li>
          <li>
            <strong className="block mb-1">Driving:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Apply for an <a href="https://jp.usembassy.gov/services/driving-in-japan/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">International Driving Permit</a></li>
            </ul>
          </li>
          <li>
            <strong className="block mb-1">Medication:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Check if your meds are legal in Japan</li>
              <li>Bring printed prescriptions</li>
            </ul>
          </li>
          <li>
            <strong className="block mb-1">Electronics:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Japan uses Type A/B plugs, 100V voltage</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "housing",
    category: "BEFORE ARRIVAL",
    title: "Find Housing",
    content: (
      <>
        <p className="mb-4">
          You'll need at least temporary housing to get a phone number and bank account.
        </p>
        <div className="mb-4">
          <strong className="block mb-2">Long-term rental listings:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.athome.co.jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">At Home</a></li>
            <li><a href="https://suumo.jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Suumo</a></li>
            <li><a href="https://apartments.gaijinpot.com/en" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">GaijinPot Apartments</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <strong className="block mb-2">Short-term/foreigner-friendly housing:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li>Monthly rentals: <a href="https://www.realestate-tokyo.com/rent/monthly-apartments/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Real Estate Tokyo</a> / <a href="https://atinn.jp/en" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">At Inn</a></li>
            <li>Sharehouses: <a href="https://www.sakura-house.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Sakura House</a> / <a href="https://www.oakhouse.jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Oak House</a></li>
          </ul>
        </div>
        <p className="text-sm text-gray-600">Note: Some rentals don't accept foreigners or pets and may require a guarantor. Use google chrome to translate the websites into your native language.</p>
      </>
    )
  },
  {
    id: "registration",
    category: "AFTER ARRIVAL",
    title: "Complete Legal Registration",
    content: (
      <>
        <ul className="list-disc ml-6 space-y-2">
          <li>Get your residence (zairyu) card at the airport</li>
          <li>Register your address at your local ward office within 14 days</li>
          <li>Enroll in National Health Insurance (covers 70% of medical costs)</li>
        </ul>
      </>
    )
  },
  {
    id: "phone",
    category: "AFTER ARRIVAL",
    title: "Get a Phone Number",
    content: (
      <>
        <p className="mb-4">
          You'll need a Japanese phone number to open a bank account or sign a lease.
        </p>
        <div className="mb-4">
          <strong className="block mb-2">Foreigner friendly providers offering English support:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.sakuramobile.jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Sakura Mobile</a></li>
            <li><a href="https://www.mobal.com/japan/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Mobal</a></li>
            <li><a href="https://www.iijmio.jp/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">IIJmio</a></li>
          </ul>
        </div>
        <p>Bring your passport and residence card.</p>
      </>
    )
  },
  {
    id: "bank",
    category: "AFTER ARRIVAL",
    title: "Get a Bank Account",
    content: (
      <>
        <p className="mb-4">
          Required for receiving salary, signing leases, and setting up utilities.
        </p>
        <div className="mb-4">
          <strong className="block mb-2">Foreigner-friendly banks:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.smbctb.co.jp/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">SMBC Prestia</a></li>
            <li><a href="https://www.shinseibank.com/english/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Shinsei Bank</a></li>
          </ul>
        </div>
        <p>These banks proved to offer the most English customer support and understanding of expats needs/concerns. <p></p><br></br>Bring passport, residence card, Japanese phone number, and proof of address.</p>
      </>
    )
  },
  {
    id: "credit",
    category: "AFTER ARRIVAL",
    title: "Get a Credit Card",
    content: (
      <>
        <div className="mb-4">
          <strong className="block mb-2">Recommended cards that are more foreigner friendly:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.rakuten-card.co.jp/e_card/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Rakuten Card</a></li>
            <li><a href="https://www.eposcard.co.jp/international/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">EPOS Card</a></li>
          </ul>
        </div>
        <p>Japanese credit card applications can be hard to pass for expats. Fill in the forms precisely. <p></p><br></br>Bring residence card, phone number, and income information.</p>
      </>
    )
  },
  {
    id: "utilities",
    category: "AFTER ARRIVAL",
    title: "Set Up Your Utilities",
    content: (
      <>
        <p className="mb-4">
          You'll need a Japanese bank account and phone number to set up internet, gas, water, and electricity.
        </p>
        <p>Utility providers often offer online forms — have your move-in date and address ready.</p>
      </>
    )
  },
  {
    id: "essentials",
    category: "AFTER ARRIVAL",
    title: "Apply for Essentials",
    content: (
      <>
        <ul className="mb-4 space-y-3">
          <li>
            <strong className="block mb-1">MyNumber card (national ID):</strong> 
            Apply after address registration. <a href="https://www.kojinbango-card.go.jp/en-kofushinse/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">More info</a>
          </li>
          <li>
            <strong className="block mb-1">National Pension:</strong> 
            Visit local ward office to enroll or request exemption
          </li>
          <li>
            <strong className="block mb-1">Local Clinics & Schools:</strong> 
            Use Tokyo's <a href="https://www.himawari.metro.tokyo.jp/qq13/qqport/kenmintop/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">English-friendly clinic directory</a>.
            Also check <a href="https://www.reddit.com/r/japanlife/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">r/japanlife</a> for expat advice.
          </li>
        </ul>
        
        <div>
          <strong className="block mb-2">Popular Japanese Apps:</strong>
          <ul className="space-y-3">
            <li className="flex items-center">
              <img src={appIcons.LINE} alt="LINE" className="w-6 h-6 mr-2" />
              <span>LINE – Main messaging app: <a href="https://line.me/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.PayPay} alt="PayPay" className="w-6 h-6 mr-2" />
              <span>PayPay – Mobile payments: <a href="https://paypay.ne.jp/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.Suica} alt="Suica" className="w-6 h-6 mr-2" />
              <span>Suica (iOS): <a href="https://apps.apple.com/jp/app/suica/id1156875272" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a> / </span>
              <img src={appIcons.PASMO} alt="PASMO" className="w-6 h-6 mx-2" />
              <span>PASMO (Android): <a href="https://play.google.com/store/apps/details?id=jp.pasmo.app" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.GoogleTranslate} alt="Google Translate" className="w-6 h-6 mr-2" />
              <span>Google Translate – Menu/sign translation: <a href="https://translate.google.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.Mercari} alt="Mercari" className="w-6 h-6 mr-2" />
              <span>Mercari – Secondhand goods marketplace: <a href="https://www.mercari.com/jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
          </ul>
        </div>
      </>
    )
  }
];

const StepByStepGuide = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 rounded-lg overflow-hidden h-64">
            <img 
              src="/lovable-uploads/moving.avif" 
              alt="Moving to Japan: A Relocation Guide" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="mb-16 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-xl font-bold mb-4 text-tomodachi-black">Table of Contents</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">BEFORE ARRIVAL</h4>
                <ul className="space-y-2">
                  {movingGuideSteps.filter(step => step.category === "BEFORE ARRIVAL").map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 font-medium">{index + 1}.</span>
                      <button 
                        onClick={() => scrollToSection(step.id)}
                        className="text-tomodachi-red hover:underline text-left"
                      >
                        {step.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-700 mb-2">AFTER ARRIVAL</h4>
                <ul className="space-y-2">
                  {movingGuideSteps.filter(step => step.category === "AFTER ARRIVAL").map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 font-medium">{index + 5}.</span>
                      <button 
                        onClick={() => scrollToSection(step.id)}
                        className="text-tomodachi-red hover:underline text-left"
                      >
                        {step.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-8">BEFORE YOU ARRIVE IN JAPAN</h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {movingGuideSteps.filter(step => step.category === "BEFORE ARRIVAL").map((step, index) => (
                  <div key={index} id={step.id} className="mb-12 relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tomodachi-red text-white flex items-center justify-center font-bold text-lg z-10 relative  border-4 ">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-xl font-bold text-tomodachi-black mb-4">{step.title}</h4>
                          {step.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-8">WHEN YOU ARRIVE IN JAPAN</h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {movingGuideSteps.filter(step => step.category === "AFTER ARRIVAL").map((step, index) => (
                  <div key={index} id={step.id} className="mb-12 relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tomodachi-red text-white flex items-center justify-center font-bold text-lg z-10 relative  border-4 ">
                        {index + 5}
                      </div>
                      <div className="flex-grow">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-xl font-bold text-tomodachi-black mb-4">{step.title}</h4>
                          {step.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 py-10 bg-tomodachi-red bg-opacity-10 rounded-lg px-8">
            <h1 className="text-3xl font-bold text-tomodachi-black mb-4 text-center">Tomodachi Moving Checklist</h1>
            <p className="text-gray-600 mb-8 text-center">
              <img src="/lovable-uploads/guidep.png"><br></br><br></br>
              Download our free printable Moving to Japan checklist!
            </p>
            <div className="text-center">
              <a
                href="/lovable-uploads/tomodachi-moving-to-japan-printable-checklist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-tomodachi-red text-white rounded-md font-semibold shadow hover:bg-tomodachi-black transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Checklist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
