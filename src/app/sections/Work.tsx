import { Container } from "@/components/Container";
import WorkItem from "@/components/WorkItem";

export default function Work() {
  return (
    <section>
      <Container>
        <div>
          <h2>Work</h2>
          <p className="text-2xl">
            I primarily engage in contractual work, although I occasionally
            freelance or undertake projects for enjoyment. Below are a few of my
            recent endeavors:
          </p>
        </div>

        <WorkItem
          title="Spoticlone"
          description="Spoticlone is a mobile application designed to mimic the functionality of the widely-used music streaming platform, Spotify. Using the Spotify API, it retrieves and plays music seamlessly. Developed using React Native and TypeScript, Spoticlone enables users to effortlessly search for songs and also mark them as favorites."
          image="/assets/spoticlone-mockup.jpg"
          tags={["React Native", "TypeScript", "Expo", "GraphQL"]}
          codeUrl="https://github.com/DJ-MrJay/spoticlone"
          liveUrl="https://spoticlone-demo.vercel.app"
        />

        <WorkItem
          title="Donga Carspa"
          description={
            <>
              I had the privilege of creating a website for Donga Carspa, a
              renowned leader in automotive care solutions. Drawing on my deep
              expertise in{" "}
              <a
                href="https://www.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                WordPress
              </a>
              , I successfully developed and launched the website within just
              five days. The result was a polished, professional online presence
              that perfectly embodies the brand’s dedication to quality and
              excellence.
            </>
          }
          image="/assets/donga-screenshot.jpg"
          tags={["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"]}
          codeUrl="https://github.com/you/dashboardx"
          liveUrl="https://donga.co.ke"
          reverse
        />

        <WorkItem
          title="Super Wheels Car Rentals"
          description={
            <>
              A dynamic web application built with a React front-end and a Ruby
              on Rails back-end, streamlining the process of scheduling car test
              drives. Developed as part of a collaborative effort at{" "}
              <a
                href="https://www.microverse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Microverse
              </a>
              , the project features a robust Rails API that provides endpoints
              for managing cars, allowing users to create, retrieve, update, and
              delete listings, as well as handling reservations and user
              authentication.
            </>
          }
          image="/assets/super-wheels.png"
          tags={["React", "Redux", "Ruby On Rails", "CSS3"]}
          codeUrl="https://github.com/Itswali/Rental-Cars"
          liveUrl="https://supercarsrentals.onrender.com/"
        />

        <WorkItem
          title="Money Matters"
          description={
            <>
              This Ruby on Rails budgeting app is a powerful mobile tool
              designed to help users take control of their finances. It allows
              seamless transaction management, enabling users to add expenses,
              categorize spending, and gain valuable insights into their
              financial habits. I developed this application as part of my
              Remote Full Stack Web Development Program at{" "}
              <a
                href="https://www.microverse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Microverse
              </a>
              , combining clean functionality with intuitive design to create a
              practical solution for everyday budgeting.
            </>
          }
          image="/assets/money-matters.png"
          tags={["Ruby", "HTML5", "CSS3", "JavaScript"]}
          codeUrl="https://github.com/DJ-MrJay/Money-Matters"
          liveUrl="https://money-matters-p0pp.onrender.com/"
          reverse
        />

        <WorkItem
          title="Blog App"
          description="A dynamic Ruby on Rails platform that empowers users to create, engage with, and interact through posts. With features like commenting and liking, it fosters a community-driven space for sharing ideas. I developed this application independently as part of my Remote Full Stack Web Development Program at Microverse, honing my skills in building robust, user-friendly web applications from the ground up."
          image="/assets/blog-app.png"
          tags={["Ruby", "HTML5", "CSS3", "JavaScript"]}
          codeUrl="https://github.com/DJ-MrJay/My-Blog-App"
        />

        <WorkItem
          title="Neo Lite Energies"
          description={
            <>
              I had the opportunity to design and develop a professional website
              for a forward-thinking energy firm specializing in petroleum
              products and services. Leveraging my expertise in{" "}
              <a
                href="https://www.joomla.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Joomla
              </a>
              , I efficiently built and launched the fully functional site in
              just three days, delivering a sleek and responsive digital
              presence that aligns with the company’s innovative vision.
            </>
          }
          image="/assets/neolite.jpg"
          tags={["Joomla", "PHP", "HTML5", "CSS3", "JavaScript"]}
          liveUrl="https://neolite.co.ke/"
          reverse
        />

        <WorkItem
          title="Bookstore CMS"
          description={
            <>
              An interactive web application designed to organize and manage
              your personal book collection with ease. Built with React and
              Redux, the app allows users to dynamically display their book
              lists while seamlessly adding or removing titles. I developed this
              project independently as part of my Remote Full Stack Web
              Development Program at{" "}
              <a
                href="https://www.microverse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Microverse
              </a>
              , refining my skills in state management and responsive front-end
              development.
            </>
          }
          image="/assets/bookstore-CMS.png"
          tags={["React", "Redux", "HTML5", "CSS3"]}
          codeUrl="https://github.com/DJ-MrJay/Awesome-books"
          liveUrl="https://dj-mrjay.github.io/bookstore/"
        />

        <WorkItem
          title="Brandchamp Marketing"
          description={
            <>
              A website for an innovative brand marketing agency specializing in
              identity services. Drawing on my deep expertise in{" "}
              <a
                href="https://www.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                WordPress
              </a>{" "}
              development, I delivered a visually compelling and functionally
              robust website within an impressive three-day timeframe. The
              result is a polished online presence that effectively showcases
              the agency's services and portfolio, reflecting their commitment
              to excellence in brand marketing.
            </>
          }
          image="/assets/money-matters.png"
          tags={["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"]}
          liveUrl="https://brandchamp.co.ke/"
          reverse
        />
      </Container>
    </section>
  );
}
