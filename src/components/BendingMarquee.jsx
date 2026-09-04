import './BendingMarquee.css';

const marqueeItems = ['CBNCC', 'CODE. CREATE. COLLABORATE.', 'BUILD THE FUTURE', 'STUDENT INNOVATORS'];

const MarqueeTrack = ({ className = '' }) => {
  const content = marqueeItems.map((item) => (
    <span className="bending-marquee__item" key={item}>
      {item}
      <span className="bending-marquee__mark" aria-hidden="true">✳</span>
    </span>
  ));

  return (
    <div className={`bending-marquee__track ${className}`.trim()}>
      <div className="bending-marquee__track-inner">
        <div className="bending-marquee__track-set">{content}</div>
        <div className="bending-marquee__track-set" aria-hidden="true">{content}</div>
      </div>
    </div>
  );
};

export default function BendingMarquee({ className = '' }) {
  return (
    <section className={`bending-marquee ${className}`.trim()} aria-label="CBNCC community highlights">
      <MarqueeTrack />
    </section>
  );
}
