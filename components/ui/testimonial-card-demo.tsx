import { TestimonialCard } from "@/components/ui/testimonial-card";

export default function TestimonialCardDemo() {
  return (
    <div className="max-w-md mx-auto p-8">
      <TestimonialCard
        name="Will Smith"
        title="Harper Education"
        quote="Collaborating on this project was seamless. The vision was clearly understood, and the designs genuinely reflect my brand identity."
        avatarSrc="https://images.unsplash.com/photo-1752496906365-d5c662900cc1?w=400&auto=format&fit=crop&q=80"
        rating={5.0}
      />
    </div>
  );
}
