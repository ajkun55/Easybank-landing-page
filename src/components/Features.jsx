function Features() {
  const contents = [
    {
      image: "/images/icon-online.svg",
      title: "Online Banking",
      paragraph:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: "..//images/icon-budgeting.svg",
      title: "Simple Budgeting",
      paragraph:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      image: "/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      paragraph:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      image: "/images/icon-api.svg",
      title: "Open API",
      paragraph:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why choose Easybank?</h2>
        <p className="feature-text">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        <div className="row">
          {contents.map((c) => (
            <div key={c.title}>
              <img src={c.image} alt="" />
              <h3>{c.title}</h3>
              <p>{c.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
