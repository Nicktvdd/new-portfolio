import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[390/844] rounded-[2.2rem] border-[7px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/25 ring-1 ring-white/10 ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-900" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 260px, 60vw"
        className="rounded-[1.7rem] object-cover object-top"
      />
    </div>
  );
}
