export default function PerformanceMetrics() {
  const metrics = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "<200ms", label: "Average Response Time" },
    { value: "500K+", label: "Websites Hosted" }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center space-y-2"
              data-testid={`metric-${index}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary" data-testid={`text-metric-value-${index}`}>
                {metric.value}
              </div>
              <div className="text-lg text-muted-foreground" data-testid={`text-metric-label-${index}`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
