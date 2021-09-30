AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "./assets/posters/sum.jpg",
        title: "Superman",
        released_year: "1983",
        description:
          "Superman is a superhero who first appeared in American comic books published by DC Comics. ... To protect his privacy, he changes into a colorful costume and uses the alias Superman when fighting crime. Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet",
      },
      spiderman: {
        banner_url: "./assets/posters/spm.jpg",
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. n Spider-Man's first story, in Marvel Comics' Amazing Fantasy, no. 15 (1962), American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. ... Spider-Man as portrayed by Tobey Maguire in Spider-Man 2 (2004).",
      },
      "captain-aero": {
        banner_url: "./assets/posters/ca.jpg",
        title: "Captain Aero",
        released_year: "1942",
        description:
          "Captain Aero Comics is a comic book from the Golden Age of Comics, Captain Aero was one of the many pilot heroes that appeared during World War II. He was a clear eyed, stalwart, gung-ho, two-fisted American flying ace who fought in the Pacific and Europe, and was helped by his friend Buster and his sidekick Chop Suey.",
      },
      "outer-space": {
        banner_url: "./assets/posters/os.jpg",
        title: "Outer Space",
        released_year: "1952",
        description:
          "Outer Space classic comics ( i did not find anything else about this )",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
