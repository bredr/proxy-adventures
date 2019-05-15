# Hosting a static app

NGINX has a number of optimisations/ potential auth functionality for hosting static files (including web apps). This example demonstrates simple serving of a static web app.

<img src="./design.png" height=300>

## Running

To run:
`docker-compose up`

## Notes

* The base docker image for nginx requires to run as root, that is why the `bitnami/nginx` image is instead used.
* Multistage builds enable the react app to be built in the image and only the static files copied across to the final image.
* NGINX provides compression and in memory cache for faster application load times.