/* eslint-disable max-len */
const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || '';

export default {

  apiUrl: process.env.API_URL || '',

  googleMapsApiKey,
  googleMapsApiV3Url: `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,

  googleLoginClientId: process.env.GOOGLE_LOGIN_CLIENT_ID || '',
  facebookLoginAppId: process.env.FACEBOOK_LOGIN_APP_ID || '',

  defaultMeta: {},

  /**
   * TODO
   * Swich to formats from I18n
   */
  formats: {
    dateTime: 'DD-MM-YYYY HH:mm',
    date: 'DD-MM-YYYY',
    time: 'HH:mm',
  },

};
