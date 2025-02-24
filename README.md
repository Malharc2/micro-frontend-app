### Micro-Frontend App

This project is a micro-frontend app made with Vite, React, and Module Federation. It has several micro-frontends that you can build and manage separately.

### Project Structure

Here's how the project looks:

```
micro-frontend-app/
│-- chat-app/ # Chat app
│-- email-app/ # Email app
│-- shell/ # Main app
│-- README.md # Project info
```

### Getting Started

To set this up on your machine, follow these simple steps:

1. **Clone the Repository**
```
git clone https://github.com/Malharc2/micro-frontend-app.git
cd micro-frontend-app
```

2. **Install Dependencies**
For each app, do this:
```
cd chat-app && npm install
cd ../email-app && npm install
cd ../shell && npm install
```

3. **Start the Development Servers**
Open separate terminal windows and run:
```
cd chat-app && npm run dev # This runs on localhost:3001
cd ../email-app && npm run dev # This runs on localhost:3002
cd ../shell && npm run dev # This runs on localhost:3000
```

### Build & Deploy

To build each app, run these commands:
```
cd chat-app && npm run build
cd ../email-app && npm run build
cd ../shell && npm run build
```

### Troubleshooting

If you see a module error, check if all dependencies are installed.

If pushing with git doesn’t work, try running this first:
```
git pull origin main --rebase
```

### License

This project uses the MIT License.

Created with ❤️ by Malhaar.
