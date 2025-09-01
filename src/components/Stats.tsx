import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Lives Impacted",
      description: "People whose lives have been transformed"
    },
    {
      number: "30+",
      label: "Dedicated Teachers",
      description: "Committed educators making a difference"
    },
    {
      number: "6",
      label: "Types of Disabilities Supported",
      description: "Comprehensive support across disabilities"
    },
    {
      number: "1",
      label: "Mission: Empowerment",
      description: "Single focus on enabling independence"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;