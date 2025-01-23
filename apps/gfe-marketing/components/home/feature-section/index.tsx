import {
  Album,
  CheckCircle,
  CircleDollarSign,
  Pencil,
  RefreshCcw,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: <Album />,
    title: 'Infinite Download',
    description:
      'No caps, no limits. Download as much as you want, whenever you want. This includes photos, wallpapers, and templates.',
  },
  {
    icon: <Pencil />,
    title: 'Purely Handcrafted',
    description:
      'Not AI-driven, but built by talented designers and creators. Checkmarks, gradients, styles – all made with care.',
  },
  {
    icon: <CheckCircle />,
    title: 'All Are Under License',
    description:
      'Whether digital or print use, all assets come with proper licenses that allow their use without worries.',
  },
  {
    icon: <CircleDollarSign />,
    title: 'Cancel Anytime',
    description:
      'Subscription plans can be stopped at any time. No hard strings, just easy control for flexibility.',
  },
  {
    icon: <Users />,
    title: 'Empowering for Team',
    description:
      'Share with your team members, enabling easy access to premium assets for any single purpose.',
  },
  {
    icon: <RefreshCcw />,
    title: 'No Limitations',
    description:
      'Use assets for any project, from presentations to professional keynotes or personal transformations.',
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3>Premium abstract images</h3>
        <h2 className="mb-4 font-bold text-3xl text-gray-800">
          Easy access to top quality images
        </h2>
        <p className="mb-12 text-gray-600 text-lg">
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md"
            >
              {feature.icon}
              <h3 className="mt-4 mb-2 font-semibold text-gray-800 text-xl">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
