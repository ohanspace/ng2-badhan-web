/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'firebase': 'vendor/firebase/firebase.js',
  'angularfire2': 'vendor/angularfire2',
  'moment': 'vendor/moment/moment.js',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'ng2-bs3-modal': 'vendor/ng2-bs3-modal'
  
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  },
  'vendor/ng2-bootstrap': {
    defaultExtension: 'js',
  },
  'vendor/ng2-bs3-modal': {
    defaultExtension: 'js',
  }
 
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/home',
  'app/shared/header',
  'app/shared/navbar',
  'app/shared/footer',
  'app/+organograms',
  'app/+organograms/organogram-list',
  'app/+organograms/organogram',
  'app/+organograms/organogram-form',  
  'app/auth',
  'app/auth/login',
  'app/+members',
  'app/+members/member-list',
  'app/+members/member',
  'app/+committees',
  'app/+committees/committee',
  'app/+committees/committee-create',
  'app/+members/member-item',
  'app/+members/member-create-form',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
