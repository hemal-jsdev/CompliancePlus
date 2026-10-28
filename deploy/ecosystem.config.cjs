// pm2 process file. Start with: pm2 start deploy/ecosystem.config.cjs && pm2 save
module.exports = {
  apps: [
    {
      name: "complianceplus",
      script: "./.output/server/index.mjs",
      cwd: "/var/www/complianceplus/current",
      env_file: "/var/www/complianceplus/shared/.env",
      env: { NODE_ENV: "production", PORT: 3000, HOST: "127.0.0.1" },
      max_memory_restart: "300M",
    },
  ],
};
