export default function AboutValues() {
  const values = [
    {
      title: "Reputation",
      subtitle: "Uy tín",
      letter: "R"
    },
    {
      title: "Empathy",
      subtitle: "Tận tâm",
      letter: "E"
    },
    {
      title: "Adaptability",
      subtitle: "Linh hoạt",
      letter: "A"
    },
    {
      title: "Love",
      subtitle: "Yêu thương",
      letter: "L"
    }
  ];

  return (
    <section className="relative w-full bg-[#FFEEE2] text-[#3a2c2c] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl font-light tracking-[0.2em] text-[#3a2c2c] uppercase">Giá trị</h2>
          <p className="text-[#3a2c2c]/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Chúng tôi cam kết mang lại giá trị thật cho khách hàng qua giá trị văn hóa - REAL
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-6 group">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-[#3a2c2c] opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-light text-[#3a2c2c]">{value.letter}</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light tracking-[0.1em] text-[#3a2c2c] uppercase">{value.title}</h3>
                <p className="text-[#3a2c2c]/80 text-lg">{value.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 