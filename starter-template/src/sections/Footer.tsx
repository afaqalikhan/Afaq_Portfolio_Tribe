import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
   {
     title : 'Vercel',
     href : 'https://vercel.com/afaqalikhans-projects',
   },
   {
    title : 'Portfolio2',
    href : 'https://afaq-portfolio-tribe-24.vercel.app/',
  },
  {
    title : 'GitHub',
    href : 'https://github.com/afaqalikhan',
  },
  {
     title : 'LinkedIn',
     href : 'https://www.linkedin.com/in/afaq-ali-khan-61a6611a6/',
  }
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute bg-emerald-300/30 w-[1600px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 [mask-image: radial-gradient(50%_50%_at_bottom_center, black, transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
          <div className="text-white/40">&copy; Afaq Ali Khan. All right reserved.</div>
          <nav className="flex flex-col md:flex-row gap-8">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5 hover:text-gray-950" target="_blank"  rel="noopener noreferrer">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
