export const mapConfig: google.maps.MapOptions = {
  center: { lat: 27.99731912660475, lng: -82.45700504453703 },
  zoom: 10,
  keyboardShortcuts: false,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "labels.icon",
      stylers: [
        {
          color: "#858585",
        },
      ],
    },
    {
      featureType: "landscape.natural.landcover",
      elementType: "geometry",
      stylers: [{ color: "#F7F7F7" }],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [{ color: "#F7F7F7" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#FFFFFF" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#D6E5E8" }],
    },
  ],
};
