export const GA_TRACKING_ID = "G-DPW3RDS6H4";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackProjectClick = (
  projectTitle: string,
  linkType: "github" | "itch" | "website",
) => {
  event({
    action: "click",
    category: "Project Link",
    label: `${projectTitle} - ${linkType}`,
  });
};

export const trackResumeDownload = () => {
  event({
    action: "download",
    category: "Resume",
    label: "CV Download",
  });
};

export const trackSocialClick = (platform: string) => {
  event({
    action: "click",
    category: "Social Media",
    label: platform,
  });
};
