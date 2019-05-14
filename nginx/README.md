# Hosting a static app

## Running

To run:
`docker-compose up`

## Notes

* The base docker image for nginx requires to run as root, that is why the `bitnami/nginx` image is instead used.
* Multistage builds enable the react app to be built in the image and only the static files copied across to the final image.
* NGINX provides compression and in memory cache for faster application load times.