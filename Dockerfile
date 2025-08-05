FROM registry.access.redhat.com/ubi8/nodejs-20:latest

ARG APP_ROOT=/opt/app-root/src
ENV APP_PORT=8080 \
    NO_UPDATE_NOTIFIER=true
WORKDIR ${APP_ROOT}

# NPM Permission Fix
RUN mkdir -p $HOME/.npm
RUN chown -R 1001:0 $HOME/.npm

# Install Application
COPY --chown=1001:0 . ${APP_ROOT}
USER 1001
WORKDIR ${APP_ROOT}/app
RUN npm ci --omit=dev

EXPOSE ${APP_PORT}
CMD ["node", "./bin/www"]
