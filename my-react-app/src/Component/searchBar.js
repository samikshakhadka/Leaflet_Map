import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
function SearchBar() {
    const provider = new OpenStreetMapProvider();
  
    
    const searchControl = new GeoSearchControl({
      provider: provider,
      showPopup: true, 
      retainZoomLevel: true, 
    });
  
    return null; 
  }
  
  export default SearchBar;
  