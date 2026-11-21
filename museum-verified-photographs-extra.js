/* Four additional file-verified archival images: one authentic autograph where no certain contemporary portrait exists. */
(function(){const items={
  "anne-lister": {
    "at": 1,
    "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Lister_anne.jpg?width=900",
    "page": "https://commons.wikimedia.org/wiki/File:Lister_anne.jpg",
    "caption": "Portrait of Anne Lister of Shibden Hall, attributed to Joshua Horner, c. 1830.",
    "kind": "Historical portrait",
    "credit": "Calderdale Museums · Wikimedia Commons (historical painting; verify file page)"
  },
  "sophie-germain": {
    "at": 1,
    "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Sophie_Germain_-_Signature.jpg?width=900",
    "page": "https://commons.wikimedia.org/wiki/File:Sophie_Germain_-_Signature.jpg",
    "caption": "Surviving autograph signature attributed to the mathematician Sophie Germain. Used instead of an unverified later portrait.",
    "kind": "Historical autograph, not a portrait",
    "credit": "Wikimedia Commons · Original autograph image"
  },
  "elizabeth-i": {
    "at": 1,
    "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Gheeraerts_Elizabeth_I_The_Ditchley_Portrait_c1592.jpg?width=900",
    "page": "https://commons.wikimedia.org/wiki/File:Gheeraerts_Elizabeth_I_The_Ditchley_Portrait_c1592.jpg",
    "caption": "Queen Elizabeth I, the Ditchley Portrait, attributed to Marcus Gheeraerts the Younger, c. 1592.",
    "kind": "Contemporary royal portrait",
    "credit": "National Portrait Gallery · Wikimedia Commons"
  },
  "thomas-hardy": {
    "at": 1,
    "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Thomashardy.jpg?width=900",
    "page": "https://commons.wikimedia.org/wiki/File:Thomashardy.jpg",
    "caption": "Historical photographic portrait of novelist Thomas Hardy, published by Bain News Service.",
    "kind": "Historical photograph",
    "credit": "Bain News Service · Wikimedia Commons"
  }
};for(const [id,pic]of Object.entries(items)){const e=window.MUSEUM_HISTORY_LONGFORM?.[id];if(e&&!e.images?.length)e.images=[pic];}})();