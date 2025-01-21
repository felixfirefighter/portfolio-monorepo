import { Button } from '@repo/design-system/components/ui/button';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between py-16 gap-8">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Well crafted
            <br />
            <span className="text-gray-700">abstract images</span>
          </h1>

          <p className="text-gray-600 text-lg">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>

          <div className="flex gap-4">
            <Button variant="outline" className="text-gray-700">
              Learn more
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              See pricing
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract geometric shapes */}
                <div className="w-48 h-48 relative"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
