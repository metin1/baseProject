let currentPosition = null;

/**
 * Return a promise that gives you later
 * current user position.
 * By default it works in singleton mode
 * to save time for further requests.
 *
 * @param singleton
 */
export const getCurrentPosition = (singleton = true) => {
  return new Promise(resolve => {
    if (singleton && currentPosition) {
      resolve(currentPosition);
      return;
    }

    navigator.geolocation.getCurrentPosition(position => {
      currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      resolve(currentPosition);
    });
  });
};
