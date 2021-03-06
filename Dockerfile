FROM node:10 as build-stage


# set a working directory
WORKDIR /usr/src/sembako-dashboard

# Copy Node Packages Requirement
COPY . .

# Install node modules based on node packages requirements
RUN yarn
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage ./usr/src/sembako-dashboard/build/ ./usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
