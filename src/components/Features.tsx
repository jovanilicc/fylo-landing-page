import iconCollaboration from "../assets/images/icon-collaboration.svg";
import iconAccess from "../assets/images/icon-access-anywhere.svg";
import iconSecurity from "../assets/images/icon-security.svg";
import iconFile from "../assets/images/icon-any-file.svg";
import Feature from "./Feature";
const featureInfo = [
  {
    title: "Access your files, anywhere",
    text: "The ability to use a samrtphone, tablet, or computer to access your account means your files follow you everywhere.",
    imageUrl: iconAccess,
  },
  {
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",

    imageUrl: iconSecurity,
  },
  {
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    imageUrl: iconCollaboration,
  },
  {
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    imageUrl: iconFile,
  },
];
export default function Features() {
  return (
    <section className="max-w-[870px] grid grid-cols-1 md:grid-cols-2 mx-auto text-white gap-24 md:gap-30 text-base pb-30">
      {featureInfo.map((feature) => {
        return (
          <Feature
            key={feature.title}
            icon={feature.imageUrl}
            text={feature.text}
            title={feature.title}
          />
        );
      })}
    </section>
  );
}
