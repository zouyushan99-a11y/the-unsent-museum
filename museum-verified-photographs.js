/* Three verified, individually identified archival photographs, not generated illustrations. */
(function(){const photos={
  "abraham-lincoln": {
    "src": "https://tile.loc.gov/image-services/iiif/service%3Amss%3Amal%3A248%3A2480600%3A001/full/pct%3A100/0/default.jpg",
    "page": "https://www.loc.gov/resource/mal.2480600/",
    "caption": "Abraham Lincoln's draft letter to George G. Meade, 14 July 1863. The letter was not sent.",
    "kind": "Original historical letter",
    "credit": "Library of Congress · Abraham Lincoln Papers"
  },
  "fanny-mendelssohn": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Fanny_Hensel_1842.jpg",
    "page": "https://commons.wikimedia.org/wiki/File:Fanny_Hensel_1842.jpg",
    "caption": "Portrait of Fanny Mendelssohn Hensel by Moritz Daniel Oppenheim, 1842.",
    "kind": "Contemporary portrait painting",
    "credit": "The Jewish Museum, New York · Wikimedia Commons (public-domain painting)"
  },
  "eileen-chang": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a5/1944%E5%B9%B4%E7%9A%84%E5%BC%A0%E7%88%B1%E7%8E%B2.jpg",
    "page": "https://commons.wikimedia.org/wiki/File:1944%E5%B9%B4%E7%9A%84%E5%BC%A0%E7%88%B1%E7%8E%B2.jpg",
    "caption": "Historical photograph of Eileen Chang (Zhang Ailing), dated 1944.",
    "kind": "Historical photograph",
    "credit": "Wikimedia Commons; photographer not identified, see original rights"
  }
};for(const [id,p] of Object.entries(photos)){const exhibit=window.MUSEUM_HISTORY_LONGFORM?.[id];if(exhibit)exhibit.images=[{at:1,...p},...(exhibit.images||[])];}})();