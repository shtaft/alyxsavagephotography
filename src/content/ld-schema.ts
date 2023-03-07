export const ldSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alyxsavagephotography.com",
      url: "https://alyxsavagephotography.com/",
      name: "Alyx Savage | Victoria & Vancouver Island Photography",
      inLanguage: "en-US",
      description:
        "Alyx Savage is a Victoria BC based Photographer, focusing on e-commerce. Let's work together to elevate your online presence.",
      publisher: {
        "@id": "https://www.alyxsavagephotography.com/#/schema/person/",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://alyxsavagephotography.com/#webpage",
      url: "https://alyxsavagephotography.com/",
      name: "Alyx Savage | Victoria & Vancouver Island Photography",
      isPartOf: { "@id": "https://alyxsavagephotography.com/#website" },
      inLanguage: "en-US",
      about: { "@id": "https://alyxsavagephotography.com/#/schema/person/" },
      datePublished: "2022-11-20T13:19:50+00:00",
      dateModified: "2023-01-05T19:10:02+00:00",
      description:
        "I am a Victoria BC based Photographer, focusing on e-commerce. Let's work together to elevate your online presence.",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://alyxsavagephotography.com"],
        },
      ],
    },
  ],
};
