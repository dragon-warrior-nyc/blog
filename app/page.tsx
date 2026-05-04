import Image from 'next/image';

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <section className="relative">
        <div className="md:float-left md:pr-8 md:pb-4 mb-4 md:mb-0">
          <Image
            src="/profile.jpg"
            alt="Cun (Matthew) Mu"
            width={300}
            height={300}
            className="rounded-lg mx-auto md:mx-0"
            priority
          />
        </div>
        <div className="space-y-4 clear-none">
          <p>
            {`Hi, I'm Cun (Matthew) Mu, a Director of Data Science at Walmart Labs, responsible for search ranking algorithms at Walmart.com. I earned my B.S. with Double Majors in Quantitative Finance & Statistics from the National University of Singapore, and later completed my Ph.D. in Operations Research at Columbia University in New York.`}
          </p>
          <p>
            {`My research interests lie at the intersection of AI-powered search, large language models, and learning to rank. I'm passionate about bridging rigorous academic research with real-world engineering impact, which inspired me to start this blog. It's a space where I share what I've learned—and continue to learn—about data science, machine learning, and technology. Everything here is MIT licensed, so feel free to use and share it. If you have feedback, I'd love to hear from you!`}
          </p>
          <p>
            {`The opinions expressed here are my own and do not represent the views of my employer.`}
          </p>
          <p>
            {`If you'd like to connect, feel free to reach out at mucun1988@gmail.com.`}
          </p>
        </div>
      </section>
    </section>
  );
}
