import {
  Brush,
  CheckCircle,
  CircleDollarSign,
  Download,
  RefreshCcw,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: <Download className="h-6 w-6" />,
    title: 'Infinite Download',
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    icon: <Brush className="h-6 w-6" />,
    title: 'Purely Handcrafted',
    description:
      ' No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'All Are Under License',
    description:
      'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).',
  },
  {
    icon: <CircleDollarSign className="h-6 w-6" />,
    title: 'Cancel Anytime',
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Empowering for Team',
    description:
      'We support multiple seats at once, requiring only a single payment.',
  },
  {
    icon: <RefreshCcw className="h-6 w-6" />,
    title: 'No Limitations',
    description:
      'Use as many as you want, from Dribbble presentations to PowerPoint presentations.',
  },
];

const FeatureSection = () => {
  return (
    <section className="container py-12" id="feature-section">
      <div className="text-center">
        <h3 className="mb-3 font-semibold text-primary">High quality images</h3>
        <h2 className="mb-5 font-semibold text-3xl text-gray-800 md:text-4xl">
          Easy access to top quality images
        </h2>
        <p className="mb-8 text-lg text-neutral-600">
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-lg bg-white text-center"
            >
              <div className="rounded-full p-3 text-primary shadow">
                {feature.icon}
              </div>
              <h3 className="mt-4 mb-2 font-semibold text-neutral-900 text-xl">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
