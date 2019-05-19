import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <i className='fas fa-lg fa-hand-spock' style={{color: '#e33105'}}/>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 47.598530,
            lng: -122.325371
        },
        zoom: 15
    }

    createMapOptions() {
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            styles:
                [
                    {
                        featureType: "all",
                        elementType: "labels",
                        stylers: [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#f3f4f4"
                            }
                        ]
                    },
                    {
                        featureType: "landscape.man_made",
                        elementType: "geometry",
                        stylers: [
                            {
                                "weight": 0.9
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#83cead"
                            }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "all",
                        stylers: [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fee379"
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "all",
                        stylers: [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fee379"
                            }
                        ]
                    },
                    {
                        featureType: "water",
                        elementType: "all",
                        stylers: [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#7fc8ed"
                            }
                        ]
                    }
            ]
            // so many cool styles at https://snazzymaps.com/
            //
            // styles: [
            //     {
            //         featureType: "all",
            //         elementType: "all",
            //         stylers: [
            //             {
            //                 saturation: "32"
            //             },
            //             {
            //                 lightness: "-3"
            //             },
            //             {
            //                 visibility: "on"
            //             },
            //             {
            //                 weight: "1.18"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "administrative",
            //         elementType: "labels",
            //         stylers: [
            //             {
            //                 visiblity: "off"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "landscape",
            //         elementType: "labels",
            //         stylers: [
            //             {
            //                 visiblity: "off"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "landscape.man_made",
            //         elementType: "all",
            //         stylers: [
            //             {
            //                 saturation: "-70"
            //             },
            //             {
            //                 lightness: "14"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "poi",
            //         elementType: "labels",
            //         stylers: [
            //             {
            //                 visiblity: "off"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "road",
            //         elementType: "labels",
            //         stylers: [
            //             {
            //                 visiblity: "off"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "transit",
            //         elementType: "labels",
            //         stylers: [
            //             {
            //                 visiblity: "off"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "water",
            //         elementType: "all",
            //         stylers: [
            //             {
            //                 "saturation": "100"
            //             },
            //             {
            //                 "lightness": "-14"
            //             }
            //         ]
            //     },
            //     {
            //         featureType: "water",
            //         elementType: "labels",
            //         stylers: [
            //             {
            //                 visiblity: "off"
            //             },
            //             {
            //                 lightness: "12"
            //             }
            //         ]
            //     }
            // ]
        }
    }

    render() {
        const MAP_KEY = process.env.GOOGLE_MAPS_API_KEY

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: MAP_KEY }}
                    defaultCenter={this.props.center}
                    options={this.createMapOptions}
                    defaultZoom={this.props.zoom} >
                    <AnyReactComponent
                        lat={47.598802}
                        lng={-122.3257522}
                        text="Make it so"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
