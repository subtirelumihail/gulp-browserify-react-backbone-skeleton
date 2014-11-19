##Nice to have
*	ruby & rails
*	bundler
*	gulp
*	bower

```
npm install -g bower gulp
gem install bundler
```

##How to install

Run this from the project root path

```
sudo npm install

bundler install

bower install
```

## Usage

To install bower files

```
bower install --save plugin-name
```

To get the bower files run:

```
gulp bower
```

To set the <b>development</b> mode, run this in the current project root path

```
gulp
```

To set the <b>production</b> mode, run this in the current project root path

```
gulp --production
```

To <b>clean</b> the build folder

```
gulp clean
```

###Server deployment

To deploy on the server use:

```
npm run start
```

To dev on the server user

```
npm run dev
```