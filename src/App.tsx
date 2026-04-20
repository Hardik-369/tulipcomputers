import { motion, useScroll, useTransform } from "motion/react";
import { Star, ArrowRight, Play, Laptop, TreePine, Heart, MapPin, GraduationCap, Users, Calendar, Instagram, Facebook, Twitter, Mail, Phone, ChevronRight, ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    // Elegant entrance for background
    gsap.fromTo(
      ".hero-bg-video",
      { opacity: 0, scale: 1.15 },
      { opacity: 1, scale: 1, duration: 2.5, ease: "expo.out" }
    );
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => (
    <div className="flex flex-col mb-16">
      <span className="font-geist text-[12px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2">{subtitle}</span>
      <h2 className="font-geist font-medium text-[40px] md:text-[64px] tracking-[-0.04em] leading-[1.1] text-[#1a1a1a]">
        {title}
      </h2>
    </div>
  );

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative bg-white selection:bg-[#ff5a5f] selection:text-white overflow-x-hidden">
      {/* Background Video Layer - Cinematic & Abstract */}
      <motion.div style={{ opacity }} className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video w-full h-full object-cover [transform:scaleY(-1)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[10%] from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.4)] to-[75%] to-white" />
      </motion.div>

      {/* Premium Navigation Bar */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 py-4 md:py-6"
      >
        <div className="flex items-center justify-between w-full max-w-[1400px] h-16 px-4 md:px-8 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-full shadow-sm">
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer overflow-hidden">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-xl flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-[20deg] group-hover:scale-110 shadow-lg shadow-black/20 shrink-0">
              <Laptop size={18} className="md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col -gap-1 truncate">
              <span className="font-geist font-bold text-[16px] md:text-[20px] tracking-tight leading-none truncate">Tulip Computers</span>
              <span className="font-geist text-[8px] md:text-[10px] font-bold text-black/40 uppercase tracking-widest translate-y-[1px] md:translate-y-[2px]">NGO Satara</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {["Typing Hub", "Community Work", "Founder", "Curriculum"].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="font-geist text-[14px] font-medium text-gray-900/60 hover:text-black transition-all relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden xl:flex items-center gap-1 opacity-50 px-4">
              <MapPin size={14} />
              <span className="text-[12px] font-medium font-geist">Satara, MH</span>
            </div>
            <button 
              onClick={scrollToFooter}
              className="bg-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-geist text-[12px] md:text-[13px] font-semibold transition-all hover:bg-[#333] hover:shadow-xl active:scale-[0.98]"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Redesigned for Premium Editorial Feel */}
      <section className="relative min-h-[90vh] md:min-h-[110vh] flex items-center justify-center pt-[100px] md:pt-[120px] pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[50vh] md:h-[60vh] z-0 overflow-hidden">
             <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-bg-video w-full h-full object-cover [transform:scaleY(-1)]"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
        </div>

        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end"
        >
          {/* Left Column: Massive Typography */}
          <div className="lg:col-span-8 flex flex-col items-start gap-6 md:gap-8 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="h-[1px] w-8 md:w-12 bg-black/20" />
              <span className="font-geist text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-black/40">Established 2001</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-geist font-medium text-[42px] sm:text-[64px] md:text-[110px] lg:text-[130px] leading-[0.95] md:leading-[0.85] tracking-[-0.05em] text-[#1a1a1a] drop-shadow-sm"
            >
              Empowering <br />
              <span className="font-instrument italic font-normal text-[50px] sm:text-[72px] md:text-[120px] lg:text-[145px]">youth</span> thru <br />
              Digital Skill.
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mt-4 w-full">
               <button 
                 onClick={scrollToFooter}
                 className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-black text-white rounded-full font-geist font-bold text-[14px] md:text-[16px] transition-all hover:scale-[1.05] hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3"
               >
                  Start Your Journey <ArrowRight size={20} />
               </button>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white">
                     <Play size={14} className="md:w-4 md:h-4" fill="currentColor" />
                  </div>
                  <span className="font-geist font-bold text-[12px] md:text-[14px] uppercase tracking-widest text-black/60">Watch Heritage</span>
               </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Narrative & Floating Metrics */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12 pb-4 md:pb-8 order-1 lg:order-2">
             <motion.div 
               variants={itemVariants}
               className="p-6 md:p-8 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[32px] md:rounded-[40px] shadow-sm flex flex-col gap-4 md:gap-6"
             >
                <p className="font-geist text-[16px] md:text-[20px] leading-relaxed text-[#373a46] opacity-80">
                  Tulip Computers isn't just an institute; it's a legacy of <span className="text-black font-semibold">Jagannath Valmik Kawale</span>'s vision to transform Satara.
                </p>
                <div className="h-[1px] w-full bg-black/5" />
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shrink-0">
                           <img src={`https://picsum.photos/seed/stu${i}/100/100`} alt="Graduate" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                   </div>
                   <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-black/40">2,500+ Graduates</span>
                </div>
             </motion.div>

             <motion.div 
               variants={itemVariants}
               className="grid grid-cols-2 gap-4"
             >
                <div className="flex flex-col gap-1 px-2 md:px-4">
                   <span className="text-[20px] md:text-[24px] font-bold tracking-tighter">23+</span>
                   <span className="text-[8px] md:text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Years Legacy</span>
                </div>
                <div className="flex flex-col gap-1 px-2 md:px-4 border-l border-black/5">
                   <span className="text-[20px] md:text-[24px] font-bold tracking-tighter">MH-Gov</span>
                   <span className="text-[8px] md:text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Partner Hub</span>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Impact Indicators - Visual Pillars */}
      <section className="relative z-10 py-16 md:py-12 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[ { icon: <TreePine size={20} />, title: "Environment First", desc: "Tree plantation drives across Satara." },
                 { icon: <Heart size={20} />, title: "Community Soul", desc: "Continuous donations during local Jayantis." },
                 { icon: <GraduationCap size={20} />, title: "Digital Excellence", desc: "Professional typing certifications." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group cursor-default">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-black/30 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:rotate-6 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] md:text-[14px] font-bold text-black uppercase tracking-widest">{item.title}</span>
                    <span className="text-[10px] md:text-[12px] font-medium text-black/40">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>


      {/* Section 1: The Legacy & Impact (Bento Grid) */}
      <section id="typing-hub" className="relative z-10 py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <SectionTitle subtitle="Heritage & Growth" title="Two decades of digital excellence in Satara." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-24 md:auto-rows-[300px]">
            {/* Feature 1: Large Video/Image Concept */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative aspect-[16/10] md:aspect-auto rounded-[32px] md:rounded-3xl overflow-hidden group shadow-2xl"
            >
              <img src="https://picsum.photos/seed/tulip1/1200/800" alt="Tulip Computers Lab" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
                <span className="text-[10px] md:text-[12px] font-bold text-white/60 uppercase tracking-[0.2em] mb-3 md:mb-4">Core Center</span>
                <h3 className="text-white text-[24px] sm:text-[32px] md:text-[48px] font-medium leading-tight mb-4">The Typing Mastery Hub</h3>
                <p className="text-white/70 text-[14px] md:text-[16px] max-w-[500px]">Equipped with modern machinery and legacy techniques to ensure every student hits 40+ wpm with 100% accuracy.</p>
              </div>
            </motion.div>

            {/* Feature 2: Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#fcfcfc] border border-gray-100 rounded-[32px] md:rounded-3xl p-8 md:p-10 flex flex-col justify-center"
            >
              <Users size={32} className="mb-6 text-gray-400 group-hover:text-black transition-colors" />
              <span className="text-[40px] md:text-[48px] font-bold tracking-tighter leading-none mb-2">2,500+</span>
              <span className="text-[12px] md:text-[14px] font-bold text-black/40 uppercase tracking-widest">Lives Transformed</span>
            </motion.div>

            {/* Feature 3: Govt Jobs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#1d1d1d] text-white rounded-[32px] md:rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
            >
              <GraduationCap size={32} className="mb-6 opacity-40 shrink-0" />
              <span className="text-[32px] md:text-[48px] font-bold tracking-tighter leading-none mb-2">Government</span>
              <span className="text-[14px] md:text-[16px] font-medium text-white/50">Placements across MH Department</span>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl shrink-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Certified Curriculum - Refined Premium Layout */}
      <section id="curriculum" className="relative z-10 py-20 md:py-32 bg-[#fcfcfc]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="max-w-[700px]"
            >
              <span className="font-geist text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-black/40 mb-4 block">Our Curriculum</span>
              <h2 className="font-geist font-medium text-[42px] sm:text-[56px] md:text-[84px] tracking-[-0.05em] leading-[0.95] text-[#1a1a1a]">
                Professional <span className="font-instrument italic font-normal">certifications</span> that matter.
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="font-geist text-[16px] md:text-[18px] text-black/50 max-w-[340px] leading-relaxed pb-0 md:pb-4"
            >
              Tailored courses designed to meet Maharashtra State government standards and private sector demands.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden rounded-[32px] md:rounded-[48px]">
             {[
               { lang: "English", wpm: ["30", "40"], desc: "Master the global standard for digital communication. Focus on speed, accuracy, and professional formatting.", icon: "En", accent: "text-blue-500" },
               { lang: "Marathi", wpm: ["30", "40"], desc: "The gold standard for local government careers. Native layout mastery with localized terminology.", icon: "म", accent: "text-[#ff5a5f]" },
               { lang: "Hindi", wpm: ["30", "40"], desc: "Bridging the national gap. Perfect for central government roles and official corporate documentation.", icon: "हि", accent: "text-green-600" },
             ].map((course, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-16 flex flex-col min-h-[400px] md:h-[520px] group transition-all duration-700 hover:bg-black hover:text-white"
                >
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <span className={`font-instrument italic text-[48px] md:text-[64px] leading-none ${course.accent} group-hover:text-white transition-colors`}>{course.icon}</span>
                    <span className="font-geist text-[12px] md:text-[14px] font-bold text-black/20 group-hover:text-white/20">0{idx + 1}</span>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-[28px] md:text-[36px] font-bold tracking-tighter mb-4 leading-tight">{course.lang} <br className="hidden md:block" />Mastery</h4>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
                      {course.wpm.map(speed => (
                        <span key={speed} className="px-4 md:px-5 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-black/50 group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-white transition-all">GCC-TBC {speed}</span>
                      ))}
                    </div>
                    <p className="text-[14px] md:text-[16px] text-black/60 group-hover:text-white/70 leading-relaxed transition-colors">{course.desc}</p>
                    
                    <button 
                      onClick={scrollToFooter}
                      className="mt-8 md:mt-10 flex items-center gap-3 font-geist text-[12px] md:text-[13px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                      Enroll Now <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 2: Community Pillars (Interactive Cards) */}
      <section id="community-work" className="relative z-10 py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <SectionTitle subtitle="More than just a school" title="Rooted in Satara's soul through social service." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#fcfcfc] p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 md:mb-8 transition-transform group-hover:-rotate-6">
                <TreePine size={24} className="md:w-7 md:h-7" />
              </div>
              <h4 className="text-[24px] md:text-[28px] font-medium mb-4">Green Initiative</h4>
              <p className="text-[#373a46] opacity-70 mb-6 md:mb-8 text-[14px] md:text-[16px] leading-relaxed">We believe in a sustainable future. Every year, our students and staff plant hundreds of trees around Satara to combat climate change.</p>
              <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden mb-6">
                <img src="https://picsum.photos/seed/tree/600/400" alt="Tree Plantation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <button 
                onClick={scrollToFooter}
                className="flex items-center gap-2 font-geist font-bold text-[12px] md:text-[13px] uppercase tracking-widest hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#fcfcfc] p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6 md:mb-8 transition-transform group-hover:-rotate-6">
                <Heart size={24} className="md:w-7 md:h-7" />
              </div>
              <h4 className="text-[24px] md:text-[28px] font-medium mb-4">Social Solidarity</h4>
              <p className="text-[#373a46] opacity-70 mb-6 md:mb-8 text-[14px] md:text-[16px] leading-relaxed">Dedicated to community spirit, we organize massive donation drives during Shiv-Jayanti and other local festivities since our inception.</p>
              <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden mb-6">
                <img src="https://picsum.photos/seed/donation/600/400" alt="Donation Drive" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <button 
                onClick={scrollToFooter}
                className="flex items-center gap-2 font-geist font-bold text-[12px] md:text-[13px] uppercase tracking-widest hover:gap-4 transition-all"
              >
                Support Us <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Success Stories - Typographic Alumni Register (No Images) */}
      <section id="our-impact" className="relative z-10 py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            
            {/* Left: Sticky Context */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="w-12 h-1 bg-black mb-6 md:mb-8" />
                <span className="font-geist text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-black/40 mb-4 md:mb-6 block">The Alumni Register</span>
                <h2 className="font-geist font-medium text-[42px] sm:text-[56px] md:text-[72px] tracking-[-0.05em] leading-[0.9] text-[#1a1a1a] mb-6 md:mb-8">
                  Satara's <br />
                  <span className="font-instrument italic font-normal">Civic Pride.</span>
                </h2>
                <p className="font-geist text-[16px] md:text-[18px] text-black/50 leading-relaxed max-w-[320px] mb-8 md:mb-12">
                  A verification of trust and excellence since 2001. Thousands graduates, zero compromises on skill.
                </p>
                <div className="flex flex-row md:flex-col gap-8 md:gap-4">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                    <span className="text-[28px] md:text-[32px] font-bold tracking-tighter">2.5k+</span>
                    <span className="text-[10px] md:text-[12px] font-bold text-black/30 uppercase tracking-widest shrink-0">Total Alumni</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                    <span className="text-[28px] md:text-[32px] font-bold tracking-tighter">96%</span>
                    <span className="text-[10px] md:text-[12px] font-bold text-black/30 uppercase tracking-widest shrink-0">Exam Success</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: The High-End List */}
            <div className="lg:col-span-8">
               <div className="flex flex-col w-full border-t border-black/5">
                  {[
                    { name: "Pratiksha Deshmukh", year: "2018", dept: "Finance Dept, Mantralaya", role: "Clerk Typist" },
                    { name: "Siddharth More", year: "2015", dept: "Maha-Public Health Dept", role: "Steward Admin" },
                    { name: "Anjali Kulkarni", year: "2021", dept: "Setu Kendra Operations", role: "Sr. Executive" },
                    { name: "Rahul Jagtap", year: "2012", dept: "Police Dept, Satara", role: "Technical Asst." },
                    { name: "Snehal Salunkhe", year: "2019", dept: "Revenue Dept, MH", role: "Junior Clerk" },
                    { name: "Vikram Pawar", year: "2010", dept: "Water Resources Dept", role: "Draftsman" },
                    { name: "Pooja Shinde", year: "2022", dept: "Agricultural Board", role: "Assistant" },
                    { name: "Amit Kadam", year: "2014", dept: "District Court, Satara", role: "Typist-Copyist" }
                  ].map((alumni, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="group relative flex flex-col md:flex-row md:items-center py-8 md:py-12 border-b border-black/5 hover:px-0 md:hover:px-6 transition-all duration-500 cursor-default"
                    >
                       <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-0 md:w-[15%]">
                          <span className="text-[10px] md:text-[12px] font-bold text-black/20 group-hover:text-black transition-colors shrink-0">{alumni.year}</span>
                          <div className="h-[1px] flex-1 bg-black/5" />
                       </div>

                       <div className="md:w-[40%]">
                          <h4 className="font-instrument italic text-[28px] sm:text-[32px] md:text-[44px] leading-[1.1] mb-2 md:mb-0 transition-transform duration-500 md:group-hover:-translate-x-2">
                            {alumni.name}
                          </h4>
                       </div>

                       <div className="md:w-[35%] flex flex-col">
                          <span className="text-[13px] md:text-[14px] font-bold text-black group-hover:text-[#ff5a5f] transition-colors">{alumni.dept}</span>
                          <span className="text-[10px] md:text-[11px] font-bold text-black/30 uppercase tracking-[0.2em]">{alumni.role}</span>
                       </div>

                       <div className="hidden md:flex md:w-[10%] justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="-rotate-45" size={24} />
                       </div>

                       {/* Hover Background */}
                       <div className="absolute inset-0 bg-[#fcfcfc] scale-x-0 md:group-hover:scale-x-100 origin-left transition-transform duration-700 -z-10" />
                    </motion.div>
                  ))}
               </div>
               
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="mt-12 md:mt-20 p-8 md:p-12 bg-black text-white rounded-[32px] md:rounded-[40px] flex flex-col sm:flex-row items-center gap-8 md:gap-10"
               >
                  <div className="flex-1 text-center sm:text-left">
                     <h5 className="text-[24px] md:text-[28px] font-medium leading-tight mb-2">Are you a Tulip Alumnus?</h5>
                     <p className="text-white/50 text-[14px] md:text-[16px]">We are building a digital archive of all 2,500+ professionals. Help us complete the register.</p>
                  </div>
                  <button 
                    onClick={scrollToFooter}
                    className="w-full sm:w-auto whitespace-nowrap px-8 py-4 bg-white text-black rounded-full font-geist font-bold text-[13px] md:text-[14px] hover:scale-105 active:scale-95 transition-all"
                  >
                    Submit Your Story
                  </button>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Founder's Vision (Storytelling Section) */}
      <section id="founder" className="relative z-10 py-20 md:py-32 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/founder/800/1000" alt="Jagannath Kawale" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-black text-white p-6 md:p-8 rounded-2xl md:rounded-3xl max-w-[240px] md:max-w-[280px] shadow-2xl">
                <span className="font-instrument italic text-[20px] md:text-[24px] block mb-2 leading-tight">"True education is not just about typing, it's about character."</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-50">— Jagannath V. Kawale</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
              <SectionTitle subtitle="Original Vision" title="A journey of constant giving." />
              <p className="text-[18px] md:text-[20px] text-slate-custom opacity-80 leading-relaxed mb-6 md:mb-8">
                In 2001, Tulip Computers was a dream to bridge the digital divide in Satara. Founder Jagannath Kawale envisioned a hub where technology serves as a tool for economic upliftment and community service.
              </p>
              <p className="text-[16px] md:text-[18px] text-slate-custom opacity-70 leading-relaxed mb-8 md:mb-10">
                Today, that vision has turned into a pillar of the educational sector, helping thousands secure their livelihoods and planting the seeds of change in every community corner.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-8 md:gap-10">
                <div className="flex flex-col">
                  <span className="text-[28px] md:text-[32px] font-bold tracking-tight">2001</span>
                  <span className="text-[10px] md:text-[12px] font-bold text-black/40 uppercase tracking-widest">Inception</span>
                </div>
                <div className="w-[1px] h-10 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-[28px] md:text-[32px] font-bold tracking-tight">Satara</span>
                  <span className="text-[10px] md:text-[12px] font-bold text-black/40 uppercase tracking-widest shrink-0">Operations Base</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section: The Heritage Timeline - Refined Immersive Layout */}
      <section className="relative z-10 py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionTitle subtitle="Our History" title="A journey of constant growth." />
          
          <div className="relative mt-16 md:mt-24">
             {/* Dynamic Progress Line */}
             <motion.div 
               style={{ scaleY: scrollYProgress }} 
               className="absolute left-0 md:left-[120px] top-0 bottom-0 w-[2px] bg-black origin-top z-0 hidden xs:block" 
             />
             <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-[1px] bg-gray-100 z-[-1] hidden xs:block" />
             
             {[
               { year: "2001", title: "The First Keystroke", desc: "Jagannath Kawale founds Tulip Computers with just 5 machines and a clear vision for Satara's youth.", icon: <Play size={16} />, image: "https://picsum.photos/seed/hist1/600/400" },
               { year: "2008", title: "Educational Pillar", desc: "Recognized as a premier typing institute, graduating over 500 students in a single academic year.", icon: <GraduationCap size={16} />, image: "https://picsum.photos/seed/hist2/600/400" },
               { year: "2015", title: "Social Expansion", desc: "Launch of official NGO status and structured community service programs like Tree Plantation.", icon: <Heart size={16} />, image: "https://picsum.photos/seed/hist3/600/400" },
               { year: "2024", title: "Modern Legacy", desc: "Over 2,500+ successful graduates and a legacy of social trust that spans two generations.", icon: <Laptop size={16} />, image: "https://picsum.photos/seed/hist4/600/400" },
             ].map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative pl-6 sm:pl-12 md:pl-[240px] mb-20 md:mb-32 last:mb-0 group"
                >
                   {/* Massive Floating Year */}
                   <div className="absolute left-6 sm:left-12 md:left-0 top-0 pointer-events-none opacity-20 sm:opacity-100">
                      <span className="font-geist font-bold text-[60px] sm:text-[80px] md:text-[140px] leading-none tracking-[-0.08em] text-black/5 group-hover:text-black/10 transition-colors duration-700 select-none shrink-0">
                        {milestone.year}
                      </span>
                   </div>

                   {/* Year Marker */}
                   <div className="absolute left-0 md:left-[120px] top-[30px] md:top-[60px] w-3 h-3 md:w-4 md:h-4 bg-white border-[3px] md:border-4 border-black rounded-full -translate-x-1/2 z-10 transition-transform group-hover:scale-150 hidden xs:block" />
                   
                   <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                      <div className="flex-1 w-full text-left">
                         <h5 className="font-geist font-bold text-[24px] md:text-[40px] tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 leading-tight">{milestone.title}</h5>
                         <p className="text-[16px] md:text-[20px] text-black/50 leading-relaxed max-w-[500px] mb-6 md:mb-8">{milestone.desc}</p>
                         <div className="flex items-center gap-4 text-black/20">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">{milestone.icon}</div>
                            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest leading-none">Milestone Phase {idx + 1}</span>
                         </div>
                      </div>
                      
                      <div className="w-full lg:w-[400px] xl:w-[480px] aspect-[16/10] rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl relative shrink-0">
                         <img src={milestone.image} alt={milestone.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" referrerPolicy="no-referrer" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (CTA) */}
      <section className="relative z-10 py-20 md:py-32 bg-[#1d1d1d] text-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-white/40 mb-6 block">Join the movement</span>
              <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-medium leading-[1.1] tracking-tighter mb-8 md:mb-10">Help us empower another 2,500 students.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={scrollToFooter}
                    className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-4 rounded-full font-geist font-bold text-[14px] md:text-[16px] transition-all hover:scale-[1.05] active:scale-95 shadow-xl"
                  >
                    Contact Admissions
                  </button>
                  <button 
                    onClick={scrollToFooter}
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 md:px-10 py-4 rounded-full font-geist font-bold text-[14px] md:text-[16px] transition-all hover:bg-white/20 hover:scale-[1.05] active:scale-95"
                  >
                    Support NGO Work
                  </button>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Footer - Redesigned for Premium Editorial Theme */}
      <footer id="footer" className="relative z-10 pt-24 md:pt-40 pb-16 md:pb-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 mb-20 md:mb-32">
            
            {/* Branding Column */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-start text-left">
              <div className="flex items-center gap-4 mb-4 md:mb-10 group cursor-pointer shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[15deg] shrink-0">
                  <Laptop size={28} />
                </div>
                <div className="flex flex-col truncate">
                  <span className="font-geist font-bold text-[24px] md:text-[32px] tracking-tighter leading-none">Tulip Computers</span>
                  <span className="font-geist text-[10px] md:text-[12px] font-bold text-black/30 uppercase tracking-[0.3em] mt-1 shrink-0">NGO Satara • Since 2001</span>
                </div>
              </div>
              <p className="font-geist text-[18px] md:text-[20px] text-black/50 leading-relaxed max-w-[450px] mb-8 md:mb-12">
                We are dedicated to bridging the digital divide in Satara, empowering the next generation through skill and community service.
              </p>
              <div className="flex items-center gap-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300 shrink-0">
                    <Icon size={18} className="md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-6 xl:col-span-3 flex flex-col">
              <span className="font-geist text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-black/40 mb-6 md:mb-10">Navigation</span>
              <ul className="flex flex-col gap-4 md:gap-6">
                {["Typing Hub", "Our Impact", "Community Work", "Founder", "Curriculum"].map(i => (
                  <li key={i}>
                    <a href={`#${i.toLowerCase().replace(" ", "-")}`} className="font-geist text-[16px] md:text-[20px] font-medium text-black/60 hover:text-black transition-all flex items-center gap-2 group">
                      {i} <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Map Column */}
            <div className="lg:col-span-6 xl:col-span-4 flex flex-col mt-8 lg:mt-0">
              <span className="font-geist text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-black/40 mb-6 md:mb-10">Visit Our Hub</span>
              
              <div className="flex flex-col gap-6 md:gap-8">
                 <a href="mailto:jvkawale1237@gmail.com" className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-black/20 transition-colors group-hover:bg-black group-hover:text-white shrink-0">
                       <Mail size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Email Us</span>
                       <span className="text-[16px] md:text-[18px] font-semibold text-black group-hover:underline truncate max-w-[200px] xs:max-w-none">jvkawale1237@gmail.com</span>
                    </div>
                 </a>

                 <a href="tel:8329717705" className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-black/20 transition-colors group-hover:bg-black group-hover:text-white shrink-0">
                       <Phone size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Call Support</span>
                       <span className="text-[16px] md:text-[18px] font-semibold text-black">+91 83297 17705</span>
                    </div>
                 </a>

                 <a 
                   href="https://maps.app.goo.gl/QcmTzjKAfUQu8sPC6" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="mt-2 md:mt-4 relative group w-full"
                 >
                    <div className="w-full h-32 md:h-48 rounded-[24px] md:rounded-[32px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg border border-gray-100">
                       <img src="https://picsum.photos/seed/map/800/400" alt="Location Map" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="bg-white px-4 md:px-6 py-2 rounded-full shadow-2xl flex items-center gap-2 scale-90 group-hover:scale-100 transition-all">
                             <MapPin size={14} className="text-[#ff5a5f] md:w-4 md:h-4" />
                             <span className="text-[11px] md:text-[13px] font-bold font-geist shrink-0">Google Maps</span>
                          </div>
                       </div>
                    </div>
                 </a>
              </div>
            </div>
          </div>

          <div className="pt-10 md:pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2">
               <span className="font-instrument italic text-[16px] md:text-[18px]">Designed for Satara</span>
               <div className="hidden md:block w-1 h-1 rounded-full bg-black/20" />
               <p className="text-[12px] md:text-[14px] text-gray-400 font-medium text-center">
                © 2024 Tulip Computers NGO. All Rights Reserved.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-full font-geist text-[12px] md:text-[13px] font-bold uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
               Back to Top <ArrowUp size={16} className="animate-bounce shrink-0" />
            </motion.button>
          </div>
        </div>
      </footer>
      
      {/* Floating Sign-off */}
      <div className="fixed bottom-12 left-12 z-50 pointer-events-none hidden lg:block opacity-20">
         <span className="font-instrument italic text-[14px] text-black">Satara's Pride Since 2001</span>
      </div>
    </main>
  );
}
