import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import aboutHero from "../../assets/about-hero.jpg";

const About = () => {
  const stats = [
    { num: 100, label: "Templates Available" },
    { num: 10000, label: "Happy Users" },
    { num: 5, label: "Years in Business" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const countRefs = useRef(stats.map(() => null));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const animateCount = (index, end, duration = 1500) => {
      const start = 0;
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setCounts((prevCounts) => {
          const updated = [...prevCounts];
          updated[index] = value;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            animateCount(idx, stats[idx].num);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    countRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section className="pt-28 px-4 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-xl p-10">
            <div className="space-y-16">
              {/* Title */}
              <div data-aos="fade-down" className="text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-indigo-800">
                  About Us
                </h1>
                <p className="text-indigo-600 text-lg max-w-2xl mx-auto">
                  We craft modern and responsive HTML/CSS templates to help developers and creators launch faster.
                </p>
              </div>

              {/* Content + Image */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div data-aos="fade-right" className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Our mission is to make beautiful UI templates affordable and accessible for everyone.
                    Whether you're a student, freelancer, or business owner, our hand‑crafted templates help
                    you build faster with clean, responsive code.
                  </p>
                  <p>
                    Every template is optimized for SEO, performance, and modern best practices.
                    We believe in quality, accessibility, and open design — and our free and premium templates reflect that.
                  </p>
                  <p>
                    Built with ❤️ by passionate front‑end designers and developers.
                    We're constantly adding new designs — stay tuned!
                  </p>
                </div>
                <div data-aos="zoom-in-up" className="overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={aboutHero}
                    alt="Team working together"
                    className="w-full h-auto transform hover:scale-105 transition duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Stats */}
              <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {stats.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-indigo-50 rounded-lg shadow p-6 hover:shadow-2xl transition duration-300"
                    ref={(el) => (countRefs.current[idx] = el)}
                  >
                    <h3 className="text-4xl font-extrabold text-indigo-600">
                      {counts[idx].toLocaleString()}+
                    </h3>
                    <p className="text-gray-600 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default About;
