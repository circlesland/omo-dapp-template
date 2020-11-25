# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### Develepment

```bash
npm run dev
```

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Building

```bash
npm run build
```

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!


### Hostless Deployment
For more information about fission, read the docs: 
https://guide.fission.codes/

Install
```bash
brew install fission-suite/fission/fission-cli
```

Setup your account keys with fission
```bash
fission setup --verbose
```

Register your dapp and enter path of your build folder (./build)
```bash
fission app register --verbose
👷 Build directory (./build): 
```

Publish and delpoy your dapp
```bash
npm run deploy
```

This will first build and then publish your dapp to ipfs via the fission service