import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class MyGreatPlace extends Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        //tODO; this just doesn't work
        return (
            <div css={{ height: '100px', width: '100px', backgroundColor: 'black'}}>
                <i className={`fab fa-hand-spock-o`}></i>
            </div>
        );
    }
}


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 47.598530,
            lng: -122.325371
        },
        zoom: 13
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

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAsin5-tdRFglW-bzSe3h2zE3XhxuIEEqk' }}
                    defaultCenter={this.props.center}
                    options={this.createMapOptions}
                    defaultZoom={this.props.zoom} >
                    <MyGreatPlace lat={59.955413}
                       lng={30.337844}
                       text="My Marker" />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;