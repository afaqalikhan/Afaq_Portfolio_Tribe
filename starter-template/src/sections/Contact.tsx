'use client';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";


export const ContactSection = () => {
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
            <button onClick={() => window.open("https://accounts.google.com/v3/signin/challenge/pwd?TL=AE--LlyYN1YR0ooNE6i29D8-JoJiusd96v-7TMtDgUwrF3NfZtjve0xoDgmb3-dw&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F2%2F&ddm=1&emr=1&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F2%2F&hl=en-GB&ifkv=AeZLP997GaaodqJCfljqsuFOZFGxsbv18OQSNHheL5ASOJ7b6hTqdrYBMk24MTTDxm28pSq9PwBz&osid=1&service=mail", "_blank")} className="bg-gray-900 text-white inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
              <span className="font-semibold"> Contact Me </span>
              <ArrowUpRightIcon className = "size-4" />
            </button>
         </div>
        </div>
      </div>
    </div>
  </div>
);
};
