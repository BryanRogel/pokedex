function Location(routeData) {
    // Absolut URL
    const pageLocation = window.location.href;
    // only the origin location
    const webLocation = window.location.origin;

    const resultData = pageLocation.replace(webLocation, '') === routeData;

    return resultData;
}

export default Location;