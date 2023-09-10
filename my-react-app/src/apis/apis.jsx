export function fetchLocation(){
    const response =  navigator.geolocation.getCurrentPosition((position) =>{
        return ( position.coords.latitude, position.coords.longitude);
    })
    console.log(response);
}