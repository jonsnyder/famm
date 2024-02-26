# Famm

Example website for Summit Lab 2024. https://adobesummit24.com

## Install

Website uses handlebar templates to build the site. Install dependencies with:

```
npm install
```

## Build

Build site using "build.js" script.

```
./build.js
```

## Run the website locally

Navigate to "public/", then run a web server. I like using python because its pre-installed on Mac.

```
python3 -m http.server 9000
```

Then the site is available at http://localhost:9000

## Upload

To upload, you'll need to get and setup the ssh key from namecheap's CPanel.

1. Login to namecheap. (Safari doesn't work for me, but Chrome does), username: summit24, password: (get it from Joe, Jon, or Mitch)
1. Click on Hosting List on left
1. Click "Go To CPanel" next to adobesummit24.com row.
1. Click on "Manage Shell"
1. Click "Manage SSH Keys"
1. Download public and private keys and put them under "~/.ssh/" on your machine.
1. Change file permissions on the private key: `chmod 600 ~/.ssh/id_rsa_namecheap`
1. Add this to your "~/.ssh/config" file:
```
Host adobesummit24.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa_namecheap
  HostKeyAlgorithms +ssh-rsa
  PubkeyAcceptedAlgorithms +ssh-rsa
```

After building a new site, you can upload it by running upload.sh

```
./upload.sh
```

It may ask for a passphrase. Use the same as the summit24 user's password.

## Development Tips

* Modify the handlebars templates in "/src" to update the website. Then build the site to see the changes.
* You can edit the default Adobe Tags script via "src/partials/head.handlebars"
* The build script uses "src/products.js" to automatically build category and product pages.
* You can edit "src/data.js" to create custom datalayers for each page.
* You can edit the javascript functionality in "public/js/custom.js"





