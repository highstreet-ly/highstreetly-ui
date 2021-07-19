'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'highstreetly-ui',
    podModulePrefix: 'highstreetly-ui/pods',
    environment,
    env: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    gReCaptcha: {
      jsUrl: 'https://www.google.com/recaptcha/api.js?render=explicit', // default
      siteKey: '6LervN4ZAAAAAHZsKinGzNMqc8k6lhenVEnSKw6D',
    },

    metricsAdapters: [
      /*{
        name: 'GoogleAnalytics',
        environments: ['development', 'production'],
        config: {
          id: 'UA-183095132-1',
          // Use `analytics_debug.js` in development
          debug: environment === 'development',
          // Use verbose tracing of GA events
          trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development',
          // Specify Google Analytics plugins
          require: ['ecommerce'],
        },
      },*/
      {
        name: 'GoogleTagManager',
        environments: ['development', 'production'],
        config: {
          id: 'GTM-M8HBR7Q',
          // Use `analytics_debug.js` in development
          debug: environment === 'development',
          // Use verbose tracing of GA events
          trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development',
        },
      },
    ],

    /*'responsive-image': {
      sourceDir: 'public/img/responsive',
      destinationDir: 'public/img/responsive/generated',
      quality: 80,
      supportedWidths: [800, 640, 600, 420, 375, 360, 320],
      removeSourceDir: false,
      justCopy: false,
      extensions: ['jpg', 'jpeg', 'png', 'gif'],
    },*/
  };

  ENV['ember-simple-auth-token'] = {
    // serverTokenEndpoint: '/api/token-auth/',
    // identificationField: 'username',
    // passwordField: 'password',
    tokenPropertyName: 'json.access_token',
    // refreshTokenPropertyName: 'refresh_token',
    // authorizationPrefix: 'Bearer ',
    // authorizationHeaderName: 'Authorization',
    // headers: {},
    authenticationRoute: 'login',
    routeAfterAuthentication: 'index',
    routeIfAlreadyAuthenticated: 'index',
  };

  ENV.sonatribe = {};

  ENV.sonatribe.enquiryUrl = process.env.ENQUIRY_URL;
  ENV.sonatribe.launched = process.env.LAUNCHED;

  ENV.sonatribe.Domain = process.env.DOMAIN;
  ENV.sonatribe.Api = process.env.MAIN_API;
  ENV.sonatribe.Client = process.env.MAIN_UI;

  ENV.sonatribe.DashApi = process.env.DASH_API;
  ENV.sonatribe.DashUi = process.env.DASH_UI;

  ENV.sonatribe.authenticationURL = process.env.IDS;

  ENV.sonatribe.AllowedDomains = `api.dashboard.${process.env.A_RECORD}.${process.env.TLD},ids.${process.env.A_RECORD}.${process.env.TLD}`;

  ENV.sonatribe.responseType = process.env.RESPONSE_TYPE;
  ENV.sonatribe.stripeClientId = process.env.STRIPE_CLIENT_ID;

  ENV.sonatribe.partnerId = process.env.PARTNER_ID;
  ENV.sonatribe.apiNamespace = process.env.API_NAMEPSACE;
  ENV.sonatribe.ClientSilentRenew = process.env.CLIENT_SILENT_RENEW;
  ENV.sonatribe.ImageBlobContainer = process.env.IMAGE_BLOB_CONTAINER;

  ENV.sonatribe.requestedScopes = process.env.SCOPE;
  ENV.sonatribe.applicationName = process.env.APPLICATION_NAME;
  ENV.sonatribe.popupRedirectURL = process.env.CLIENT_POPUP;
  ENV.sonatribe.silentRedirectURL = process.env.SILENT_REDIRECT_URL;
  ENV.sonatribe.responseType = process.env.RESPONSE_TYPE;
  ENV.sonatribe.postLogoutRedirectURL = process.env.POST_LOGOUT_URL;
  ENV.sonatribe.checkSessionInterval = +process.env.CHECK_SESSION_INTERVAL;
  ENV.sonatribe.automaticSilentRenew =
    process.env.AUTOMATIC_SILENT_RENEW == 'true';
  ENV.sonatribe.filterProtocolClaims =
    process.env.FILTER_PROTOCOL_CLAIMS == 'true';
  ENV.sonatribe.loadUserInfo = process.env.LOAD_USER_INFO == 'true';
  ENV.sonatribe.clientId = process.env.CLIENT_ID;
  ENV.sonatribe.redirectUrl = '';

  ENV.sonatribe.TickesApi = process.env.TICKETS_API;
  ENV.sonatribe.TicketsUi = process.env.TICKETS_UI;
  ENV.sonatribe.OrdersApi = process.env.ORDERS_API;
  ENV.sonatribe.OrdersUi = process.env.ORDERS_UI;
  ENV.sonatribe.WidgetApi = process.env.WIDGET_API;

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
