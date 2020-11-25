# Omo Dapp Template
Snowpack, Svelte, Typescript, Tailwind, Fission 

## Install

Clone Repo 
`git clone https://github.com/omoearth/omo-dapp-starter.git`

Enter directory 
```bash
cd omo-dapp-starter
```

Install with npm
```bash
npm i
```

Start
```bash
npm run dev
```
Go to your browser and open https://localhost:8080


### Building for production
The `build` script will compile the app for production. 

```bash
npm run build
```

### Hostless deployment to ipfs via fission
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

Register your dapp and enter path of build folder (./bundle)
```bash
fission app register --verbose
```

Publish and deploy your dapp
```bash
npm run deploy
```
This will first build and then publish your dapp to ipfs via the fission service
