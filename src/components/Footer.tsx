import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaMediumM } from "react-icons/fa";
import { Container } from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <Container>
      <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center text-center">

          {/* Left Text */}
          <div className="text-sm">
            <p>
              © {year}. Developed with <span style={{ color: "red" }}>♥</span>{" "}
              by yours truly!
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
