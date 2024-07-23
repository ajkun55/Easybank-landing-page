function Articles() {
  const contents = [
    {
      image: "/images/image-currency.jpg",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      paragraph:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "/images/image-restaurant.jpg",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      paragraph:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: "/images/image-plane.jpg",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      paragraph:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: "/images/image-confetti.jpg",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      paragraph:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];

  return (
    <section className="cards">
      <div className="container">
        <h2>Latest Articles</h2>

        <div className="row">
          {contents.map((c) => (
            <div className="card" key={c.title}>
              <img src={c.image} alt="" />
              <div className="text">
                <p>{c.author}</p>
                <h4>{c.title}</h4>
                <p>{c.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
