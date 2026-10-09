import React from "react";
import Image from "next/image";
import { BRAND_INFO } from "@/data/brand";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export function InstagramDiscovery() {
  const posts = [
    {
      src: "/editorial/western-opening.png",
      alt: "Bloom & Belle evening slip dress styling",
      caption: "Timeless looks. Effortless you.",
    },
    {
      src: "/products/summer-bow-shirt-story.png",
      alt: "Bloom & Belle summer bow shirt reel storyboard",
      caption: "Summer wardrobe favourite in seafoam & buttercream",
    },
    {
      src: "/editorial/festive-lookbook.png",
      alt: "Bloom & Belle festive outfit guide",
      caption: "Timeless. Elegant. Festive.",
    },
    {
      src: "/editorial/capsule-flatlay.png",
      alt: "Bloom & Belle capsule wardrobe styling",
      caption: "Buy better. Style more. Spend less.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-brand-ivory border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block">
              Join Our Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-emerald font-normal mt-1">
              Follow {BRAND_INFO.social.instagramHandle}
            </h2>
          </div>

          <a
            href={BRAND_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-emerald text-brand-ivory text-xs font-sans tracking-[0.16em] uppercase hover:bg-brand-emerald-dark transition-colors font-medium border border-brand-emerald"
          >
            <InstagramIcon className="w-4 h-4 text-brand-gold" />
            <span>Follow On Instagram</span>
          </a>
        </div>

        {/* 4-post Instagram Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={BRAND_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-white border border-brand-gold/20 block"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-emerald-deep/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-brand-ivory">
                <InstagramIcon className="w-6 h-6 text-brand-gold mb-2" />
                <p className="font-serif text-xs italic font-light line-clamp-2">
                  &ldquo;{post.caption}&rdquo;
                </p>
                <span className="text-[9px] uppercase tracking-widest text-brand-gold mt-2 font-medium">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
