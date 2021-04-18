import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const animationInDuration = 0.5;
const animationOutDuration = 0.4;
const overviewScale0 = 0.8;

export const initScrollTriggers = (links, reactComponent) => {
  const routes = links.reduce((acc, link) => {
    acc.push(link.route);
    return acc;
  }, []);
  scrollTriggersAnchors(routes, reactComponent);
  scrollTriggersWines([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  scrollTriggersWineyard();
  ScrollTriggerTeam();
  ScrollTriggersContact();
  ScrollTriggerItems(document.querySelectorAll(".sectionTitle"));
  ScrollTriggerItems(document.querySelectorAll(".sectionSubtitle"));
};

const scrollTriggersAnchors = (routes, reactComponent) => {
  const triggerDown = (id, obj) => {
    // Action on navbar when scrolling down on an Anchor
    reactComponent.setState({ route: id });
  };
  const triggerUp = (id) => {
    // Action on navbar when scrolling up on an Anchor
    try {
      reactComponent.setState({ route: routes[routes.indexOf(id) - 1] });
    } catch {
      console.warn("Error on the sequence of nav items when moving upwards");
    }
  };
  routes.map((name) =>
    ScrollTrigger.create({
      trigger: "#Anchor_" + name,
      start: "50% 50%",
      end: "50% 50%",
      onEnter: (trigger) =>
        triggerDown(trigger.vars.trigger.split("#Anchor_")[1]), // Triggers when scrolling down (entering) a specific section
      onLeaveBack: (trigger) =>
        triggerUp(trigger.vars.trigger.split("#Anchor_")[1]), // // Triggers when scrolling up (leaving, going backwards from) a specific section
    })
  );
};

const scrollTriggersWines = (wines) => {
  ScrollTriggerItems(document.querySelectorAll(".wineHeaderText"));
  const wineUpPercent = 5;
  const wineContainerSlideXPercent = 10;

  // ==================
  // Wines overview
  // ==================
  const overviewScale0 = 0.8;
  gsap.to(".wineOverview", {
    opacity: 0,
    scale: overviewScale0,
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: ".winesTitle",
      start: "50% 60%",
      id: "overview",
      scrub: true,
      onEnter: () =>
        gsap.to(".wineOverview", {
          opacity: 1,
          scale: 1,
          duration: animationInDuration,
        }),
      onLeaveBack: () =>
        gsap.to(".wineOverview", {
          opacity: 0,
          scale: overviewScale0,
          duration: animationOutDuration,
        }),
    },
  });

  // ==================
  // All individual wines
  // ==================

  wines.map((wine) => {
    gsap.to("#wine" + wine, {
      opacity: 0,
      xPercent:
        wine % 2 === 1
          ? -wineContainerSlideXPercent
          : wineContainerSlideXPercent, // If wine number is even : left, otherwise right
      duration: 0,
    });
    gsap.to("#wine" + wine + " .winePicture", {
      opacity: 0,
      duration: 0,
      yPercent: wineUpPercent,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#wine" + wine,
        start: "50% 90%",
        end: "50% 50%",
        scrub: true,
        onEnter: () =>
          gsap
            .timeline()
            .to(
              "#wine" + wine,
              {
                opacity: 1,
                xPercent: 0, // If wine number is even : left, otherwise right
                duration: animationInDuration,
                ease: "",
              },
              0
            )
            .to(
              "#wine" + wine + " .winePicture",
              {
                opacity: 1,
                duration: animationOutDuration,
                yPercent: 0,
                ease: "power1",
              },
              animationInDuration / 2
            ),
        onLeaveBack: () =>
          gsap
            .timeline()
            .to(
              "#wine" + wine,

              {
                opacity: 0,
                xPercent:
                  wine % 2 === 1
                    ? -wineContainerSlideXPercent
                    : wineContainerSlideXPercent, // If wine number is even : left, otherwise right
                duration: animationOutDuration,
                ease: "power1.in",
              },
              0
            )
            .to(
              "#wine" + wine + " .winePicture",

              {
                opacity: 0,
                duration: animationOutDuration,
                yPercent: wineUpPercent,
              },
              0
            ),
      },
    });
  });
};

const scrollTriggersWineyard = () => {
  ScrollTriggerItems(document.querySelectorAll(".wineyardItem"));
  ScrollTriggerItems(document.querySelectorAll("#galleryWrapper"));

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#wineyardtitle",
        start: "50% 90%",
        end: "50% 10%",
        scrub: true,
      },
    })
    .from(
      "#wineyardtitle",
      {
        scale: 0.9,
        opacity: 0,
        duration: 2,
        yPercent: 30,
        ease: "power3.out",
      },
      0
    )
    .from(
      "#wineyardbanner",
      {
        scale: 1.2,
        duration: 2,
        yPercent: -10,
        ease: "power2.out",
      },
      0
    );
};

const ScrollTriggerTeam = () => {
  ScrollTriggerItems(document.querySelectorAll(".teamItem"));
  gsap.to("#trio", {
    filter: "grayscale(100%)",
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#trio",
        start: "50% 100%",
        end: "50% 40%",
        id: "overview",
        scrub: true,
      },
    })
    .to("#trio", {
      filter: "grayscale(0%)",
      scale: 1.05,
      duration: animationInDuration,
    });
};

const ScrollTriggersContact = () => {
  ScrollTriggerItems(document.querySelectorAll(".contactItem"));
  ScrollTriggerItems(document.querySelectorAll("#domainlocationmap"));
};

const ScrollTriggerItems = (querySelectorAllAnswer, element = null) => {
  for (let item of querySelectorAllAnswer) {
    if (element === null) {
      element = item;
    }
    gsap.to(item, {
      opacity: 0,
      scale: overviewScale0,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "50% 100%",
        id: "overview",
        scrub: true,
        onEnter: () =>
          gsap.to(item, {
            opacity: 1,
            scale: 1,
            duration: animationInDuration,
          }),
        onLeaveBack: () =>
          gsap.to(element, {
            opacity: 0,
            scale: overviewScale0,
            duration: animationOutDuration,
          }),
      },
    });
  }
};
