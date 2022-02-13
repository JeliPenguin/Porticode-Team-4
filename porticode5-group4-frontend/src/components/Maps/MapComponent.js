import React from "react";

const MapComponent = ({ lat, long }) => {
    const mapRef = React.useRef(null);
    React.useEffect(() => {
        // TODO: hard coded for now but requires change
        const friendsLatLang = [
            ["My location (Jenna Stones)", lat, long],
            ["Andreas Lipbom", "51.524364", "-360.133824"]
        ]

        let google = window.google;
        let map = mapRef.current;
        console.log("LAT => ", lat)
        console.log("LONG => ", long)
        const myLatlng = new google.maps.LatLng(lat, long);

        const mapOptions = {
            zoom: 18,
            center: myLatlng,
            scrollwheel: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }],
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#4299e1" }, { visibility: "on" }],
                },
            ],
        };

        map = new google.maps.Map(map, mapOptions);

        // const marker = new google.maps.Marker({
        //     position: myLatlng,
        //     map: map,
        //     animation: google.maps.Animation.DROP,
        //     title: "Notus React!",
        // });

        const infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < friendsLatLang.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(friendsLatLang[i][1], friendsLatLang[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(friendsLatLang[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));

            infowindow.setContent(friendsLatLang[i][0]);
            infowindow.open(map, marker);
        
        }

    });
    return (
        <div className="flex flex-wrap">
            <div className="w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="relative w-full rounded h-600-px">
                        <div className="rounded h-full" ref={mapRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapComponent;
