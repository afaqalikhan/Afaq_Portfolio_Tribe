'use client';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";


export const ContactSection = () => {

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923174330020?text=feel%20free%20for%20DM", "_blank");
  };
  
  return (
  <div className="py-16 lg:py-24 pt-14 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-10 py-8 rounded-3xl text-center relative overflow-hidden z-0 md:text-left ">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
                  backgroundImage : `url(${grainImage.src})`,
              }}>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
         <div>
            <h2 className="font-serif text-2xl md:text-3xl">  Let&apos;s create something amazing together</h2>
            <p className="text-sm mt-2 md:text-base"> Ready to bring your next project to life? Let&apos;s connect and discuss how i can help you acheive your goals </p>
         </div>
         <div>
            <button onClick={handleWhatsAppClick} className="bg-gray-900 text-white inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:border-white hover:bg-white hover:text-gray-950">
              <span id = "header-contact" className="font-semibold hover:font-bold"> Contact Me </span>
              <ArrowUpRightIcon className = "size-4" />
            </button>
         </div>
        </div>
      </div>
    </div>
  </div>
);
};
