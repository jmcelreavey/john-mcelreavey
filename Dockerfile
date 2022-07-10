FROM node:16-bullseye

# Create folder and copy package.json
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install pnpm
RUN npm install -g pnpm;
RUN pnpm --version;
RUN mkdir -p /usr/local/share/pnpm 
RUN pnpm setup; \
    export PNPM_HOME="/usr/local/share/pnpm" &&\
    export PATH="$PNPM_HOME:$PATH"; \
    pnpm bin -g;

# Install dependencies
RUN pnpm install

# Copy app files
COPY . .

# run command
ENTRYPOINT ["/app/entrypoint.sh"]