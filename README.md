# Minecraft AFK Bot

A simple Minecraft AFK Bot made with Mineflayer.

## Features

* Auto Register
* Auto Login
* Infinite AFK Movement
* 360° Camera Rotation
* Auto Jump Every 3-5 Seconds
* Walk Forward Continuously
* Easy Configuration Using `config.json`

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourname/afkbot.git
cd afkbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Bot

Edit `config.json`:

```json
{
  "host": "YOUR_SERVER_IP",
  "port": 25565,
  "username": "AFKBot",
  "password": "testing3344"
}
```

### 4. Start Bot

```bash
node bot.js
```

## Folder Structure

```text
afkbot/
│
├── bot.js
├── config.json
├── package.json
└── README.md
```

## Commands Performed

After joining:

```text
/register testing3344
```

Wait 5 seconds:

```text
/login testing3344
```

## Requirements

* Node.js 18+
* npm
* Minecraft Java Server

## Dependency

```bash
npm install mineflayer
```

## License

MIT License

Made with Mineflayer ❤️
