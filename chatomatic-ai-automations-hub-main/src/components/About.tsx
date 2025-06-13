
import { Target, Award, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "95%", label: "Efficiency Improvement" },
    { number: "24/7", label: "AI Support Availability" },
    { number: "10x", label: "ROI Average Increase" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision-Driven",
      description: "We deliver exact solutions tailored to your specific business challenges and objectives."
    },
    {
      icon: Award,
      title: "Excellence First",
      description: "Our commitment to quality ensures every AI solution exceeds expectations and industry standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "We stay ahead of AI trends to bring you the most advanced automation technologies available."
    },
    {
      icon: TrendingUp,
      title: "Growth Oriented",
      description: "Every solution is designed to scale with your business and drive sustainable growth."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chatomatic AI
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Chatomatic AI, we're pioneering the future of business automation. Our team of AI experts 
              and automation specialists work tirelessly to transform how companies operate, making intelligent 
              automation accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on the belief that AI should augment human capabilities rather than replace them, 
              we create solutions that free your team to focus on strategy, creativity, and growth while 
              our AI handles the routine tasks.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8">Our Mission</h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  "To democratise AI automation and empower every business to achieve unprecedented 
                  efficiency and growth through intelligent technology solutions."
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and drive our commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
