export function GetTitleFromRoute(to) {
  let title = "Hoşgeldiniz";

    switch (to.name) {
        case "Home":
            title = "Fotoğraflar";
            break;
        case "VueUseExample":
            title = "VueUse Kullanımı";
            break;
        case "PhotoCarousel":
            title = "Fotoğraf Galerisi";
            break;
        case "vueform":
            title = "Vue Form Kullanımı";
            break;
        default:
            break;
        }
  
  return title;
} 